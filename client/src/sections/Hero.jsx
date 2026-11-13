import { highlights, industries } from "../content.js";
import { wrap, btn, btnGhost, gradText } from "../ui.js";

export default function Hero() {
  const loop = [...industries.map((industry) => industry.name), "Web Design", "Mobile Apps", "UI/UX", "Custom Software"];
  return (
    <section id="home" className="relative overflow-hidden bg-black pt-[88px]">
      <img src="/hero.jpg" alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 size-full object-contain object-center" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/40" />

      <div className={`${wrap} relative py-16 lg:py-24`}>
        <div className="max-w-4xl animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-sm text-soft backdrop-blur">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            Trusted by clients in France, the USA, and Australia
          </p>
          <h1 className="mb-6 text-[2.4rem] font-extrabold sm:text-5xl lg:text-6xl">
            Design. Develop. Deliver.
            <span className={`mt-2 block text-[.62em] ${gradText}`}>Digital Solutions Built for the World.</span>
          </h1>
          <p className="mb-9 max-w-[58ch] text-lg text-soft">
            Quantum Technology Universal is a full-fledged web and mobile design and development company providing
            global digital solutions. Our passionate team delivers innovative results across Real Estate, Hospitality,
            E-Commerce, and Education, helping businesses expand their reach worldwide.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className={btn}>Get a Free Consultation</a>
            <a href="#services" className={btnGhost}>View Our Work</a>
          </div>
        </div>
      </div>

      <ul className={`${wrap} relative grid gap-3 pb-14 sm:grid-cols-2 lg:grid-cols-4`}>
        {highlights.map((h) => (
          <li key={h} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur">
            <svg viewBox="0 0 24 24" className="size-5 shrink-0 text-qcyan" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M5 13l4 4L19 7" /></svg>
            <span className="font-medium">{h}</span>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="relative overflow-hidden border-y border-white/10 bg-white/[0.02] py-4 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-10 font-head text-lg font-semibold text-muted">
          {[...loop, ...loop, ...loop, ...loop].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">{t}<span className="text-qviolet">✦</span></span>
          ))}
        </div>
      </div>
    </section>
  );
}
