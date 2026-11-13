import { wrap, lead } from "../ui.js";

export default function PageHeader({ title, intro, children }) {
  return (
    <header className="border-b border-line bg-panel">
      <div className={`${wrap} py-14 md:py-20`}>
        <h1 className="mb-5 max-w-[20ch] text-4xl font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        {intro && <p className={`${lead} mb-0`}>{intro}</p>}
        {children}
      </div>
    </header>
  );
}
