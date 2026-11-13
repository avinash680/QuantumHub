import Logo from "./Logo.jsx";
import { services, industries } from "../content.js";
import { wrap, btn } from "../ui.js";

const col = "grid content-start gap-3";
const head = "mb-1 font-head text-base font-bold text-white";
const link = "text-muted no-underline transition hover:text-qcyan";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-panel">
      <div className={`${wrap} py-14`}>
        <div className="mb-14 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-linear-to-r from-qcyan/10 to-qviolet/10 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="mb-1 text-2xl font-extrabold sm:text-3xl">Ready to build something great?</h2>
            <p className="text-soft">Tell us about your idea. We reply within 24 hours.</p>
          </div>
          <a href="#contact" className={btn}>Start Your Project</a>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className={col}>
            <Logo fullImage />
            <p className="max-w-xs text-muted">Design. Develop. Deliver. Digital solutions built for the world, with clients in France, the USA, and Australia.</p>
          </div>
          <nav className={col} aria-label="Services">
            <h3 className={head}>Services</h3>
            {services.map((service) => <a key={service.slug} href="#services" className={link}>{service.title}</a>)}
          </nav>
          <nav className={col} aria-label="Company">
            <h3 className={head}>Explore</h3>
            <a href="#why" className={link}>Why choose us</a>
            <a href="#process" className={link}>Our process</a>
            <a href="#blog" className={link}>Blog</a>
            <a href="#contact" className={link}>Contact</a>
          </nav>
          <div className={col}>
            <h3 className={head}>Industries</h3>
            {industries.map((industry) => <span key={industry.slug} className="text-muted">{industry.name}</span>)}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Quantum Technology Universal. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 text-soft no-underline transition hover:text-qcyan">
            Back to top
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
