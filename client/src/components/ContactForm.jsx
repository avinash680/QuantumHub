import { useState } from "react";
import { services } from "../content.js";
import { btn } from "../ui.js";

const field = "rounded-[10px] border border-line bg-ink px-3.5 py-2.5 text-slate-100 focus:border-qcyan focus:outline-none";

export default function ContactForm({ initialService = "Not sure yet" }) {
  const empty = { name: "", email: "", service: initialService, message: "" };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState({ state: "idle", text: "" });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setStatus({ state: "sending", text: "Sending…" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setForm(empty);
      setStatus({ state: "ok", text: "Request sent. We will reply within 24 hours." });
    } catch (err) {
      setStatus({ state: "error", text: err.message });
    }
  }

  const color = { ok: "text-emerald-400", error: "text-rose-400", sending: "text-muted", idle: "" }[status.state];

  return (
    <form onSubmit={submit} className="grid gap-4 text-[.95rem] font-medium">
      <label className="grid gap-1.5">Name<input required value={form.name} onChange={set("name")} autoComplete="name" className={field} /></label>
      <label className="grid gap-1.5">Email<input required type="email" value={form.email} onChange={set("email")} autoComplete="email" className={field} /></label>
      <label className="grid gap-1.5">What do you need?
        <select value={form.service} onChange={set("service")} className={field}>
          <option>Not sure yet</option>
          {services.map((s) => <option key={s.slug}>{s.title}</option>)}
        </select>
      </label>
      <label className="grid gap-1.5">Tell us about your idea<textarea required rows="5" value={form.message} onChange={set("message")} className={field} /></label>
      <button className={`${btn} justify-self-start`} disabled={status.state === "sending"}>Start Your Project</button>
      <p role="status" className={`min-h-6 ${color}`}>{status.text}</p>
    </form>
  );
}
