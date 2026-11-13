import { useState } from "react";
import { Reveal } from "../hooks.jsx";
import { services } from "../content.js";
import { wrap, btn, h2, lead, gradText } from "../ui.js";

const field = "w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-slate-100 transition focus:border-qcyan focus:ring-4 focus:ring-qcyan/15 focus:outline-none";

export default function Contact() {
  const empty = { name: "", email: "", service: "Not sure yet", message: "" };
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
    <section id="contact" className={`${wrap} py-20 lg:py-28`}>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <h2 className={`${h2} mb-5`}>Ready to build <span className={gradText}>something great?</span></h2>
          <p className={lead}>Tell us about your idea and our team will get back to you within 24 hours.</p>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-[0_30px_80px_-30px_rgba(138,99,255,.35)] backdrop-blur sm:p-9">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-medium">Name<input required value={form.name} onChange={set("name")} autoComplete="name" className={field} /></label>
              <label className="grid gap-1.5 text-sm font-medium">Email<input required type="email" value={form.email} onChange={set("email")} autoComplete="email" className={field} /></label>
            </div>
            <label className="grid gap-1.5 text-sm font-medium">What do you need?
              <select value={form.service} onChange={set("service")} className={field}>
                <option>Not sure yet</option>
                {services.map((service) => <option key={service.slug}>{service.title}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm font-medium">Tell us about your idea<textarea required rows="4" value={form.message} onChange={set("message")} className={field} /></label>
            <button className={btn} disabled={status.state === "sending"}>Start Your Project</button>
            <p role="status" className={`min-h-6 text-center text-sm ${color}`}>{status.text}</p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
