import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import mongoose from "mongoose";
import Inquiry from "./models/Inquiry.js";
import { posts } from "./data/posts.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(express.json({ limit: "20kb" }));

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v || "");

app.get("/api/posts", (_req, res) =>
  res.json(posts.map(({ slug, title, meta, body }) => ({ slug, title, meta, ready: !!body })))
);
app.get("/api/posts/:slug", (req, res) => {
  const post = posts.find((p) => p.slug === req.params.slug);
  post ? res.json(post) : res.status(404).json({ error: "Post not found" });
});

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 8 });
app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, service, message } = req.body || {};
  if (!name?.trim() || !message?.trim() || !emailOk(email))
    return res.status(400).json({ error: "Name, a valid email and a message are required." });
  try {
    await Inquiry.create({ name, email, service, message });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Could not save your request. Please try again." });
  }
});

// Serve the built React app in production
const dist = path.join(__dirname, "../client/dist");
app.use(express.static(dist));
app.get("*", (req, res, next) =>
  req.path.startsWith("/api") ? next() : res.sendFile(path.join(dist, "index.html"), (e) => e && next())
);

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/quantum_universal")
  .then(() => app.listen(PORT, () => console.log(`API running on :${PORT}`)))
  .catch((e) => { console.error("MongoDB connection failed:", e.message); process.exit(1); });
