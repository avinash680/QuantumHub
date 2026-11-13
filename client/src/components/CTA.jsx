import { Link } from "react-router-dom";
import { wrap, btn } from "../ui.js";

export default function CTA({ title = "Ready to build something great?", text = "Tell us about your idea and our team will get back to you within 24 hours.", to = "/contact" }) {
  return (
    <section className="border-t border-line bg-panel">
      <div className={`${wrap} flex flex-wrap items-center justify-between gap-6 py-14`}>
        <div>
          <h2 className="mb-2 text-3xl font-bold">{title}</h2>
          <p className="max-w-[60ch] text-soft">{text}</p>
        </div>
        <Link to={to} className={btn}>Start Your Project</Link>
      </div>
    </section>
  );
}
