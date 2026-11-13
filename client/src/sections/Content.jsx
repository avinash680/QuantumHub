import { Reveal } from "../hooks.jsx";
import { services, industries, why, process } from "../content.js";
import { wrap, card, h2, lead, gradText } from "../ui.js";

const icons = [
  "M3 5h18v11H3zM8 20h8M12 16v4",
  "M8 2h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1zM11 18h2",
  "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
  "M3 4h2l2.5 11h10L20 7H6M9 20h.01M17 20h.01",
  "M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14",
  "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4",
];

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
);

export function Services() {
  return (
    <section id="services" className={`${wrap} py-20 lg:py-28`}>
      <Reveal>
        <h2 className={`${h2} mb-4`}>Everything you need to <span className={gradText}>launch and grow</span></h2>
        <p className={`${lead} mb-12`}>From the first sketch to ongoing support, one team handles the whole journey.</p>
      </Reveal>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 90}>
            <article className={`${card} group h-full p-7`}>
              <span className="mb-5 grid size-12 place-items-center rounded-xl bg-linear-to-br from-qcyan/20 to-qviolet/20 text-qcyan transition group-hover:scale-110 group-hover:text-white"><Icon d={icons[i]} /></span>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-muted">{service.short}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-wrap items-center gap-3">
        <span className="text-muted">Industries we serve:</span>
        {industries.map((industry) => <span key={industry.slug} className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-soft">{industry.name}</span>)}
      </Reveal>
    </section>
  );
}

export function Why() {
  return (
    <section id="why" className="border-y border-white/10 bg-panel">
      <div className={`${wrap} py-20 lg:py-28`}>
        <Reveal>
          <h2 className={`${h2} mb-4`}>Why choose <span className={gradText}>Quantum</span></h2>
          <p className={`${lead} mb-12`}>We focus on understanding your goals, ensuring every project reflects quality, creativity, and efficiency.</p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {why.map(([t, d], i) => (
            <Reveal key={t} delay={i * 110}>
              <article className={`${card} relative h-full overflow-hidden p-8`}>
                <span className="absolute -top-4 right-4 font-head text-8xl font-extrabold text-white/[0.04]">{i + 1}</span>
                <h3 className="mb-3 text-xl font-bold">{t}</h3>
                <p className="text-muted">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className={`${wrap} py-20 lg:py-28`}>
      <Reveal>
        <h2 className={`${h2} mb-4`}>Our development <span className={gradText}>process</span></h2>
        <p className={`${lead} mb-14`}>Clarity, collaboration, and quality at every step. Even after launch, we provide continuous support to keep your product running smoothly.</p>
      </Reveal>
      <ol className="relative grid gap-x-16 gap-y-2 md:grid-cols-2">
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-[22px] w-px bg-linear-to-b from-qcyan via-qviolet to-transparent md:hidden" />
        {process.map(([t, d], i) => (
          <Reveal key={t} delay={(i % 2) * 100}>
            <li className="relative flex gap-5 py-4">
              <span className="relative z-10 grid size-11 shrink-0 place-items-center rounded-full border border-qcyan/40 bg-ink font-head font-bold text-qcyan shadow-[0_0_22px_-4px_rgba(47,192,255,.6)]">{i + 1}</span>
              <div>
                <h3 className="mb-1 text-xl font-bold">{t}</h3>
                <p className="text-muted">{d}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
