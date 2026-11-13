import { useState } from "react";
import Logo from "./Logo.jsx";
import { btn } from "../ui.js";

const links = [["home", "Home"], ["services", "Services"], ["why", "Why us"], ["process", "Process"], ["blog", "Blog"], ["contact", "Contact"]];

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black">
      <div className="mx-auto flex h-[88px] w-[min(1160px,92%)] items-center justify-between">
        <Logo fullImage />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`}
              className={`relative rounded-full px-4 py-2 text-[.95rem] font-medium no-underline transition ${active === id ? "text-white" : "text-soft hover:text-white"}`}>
              {label}
              <span className={`absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-linear-to-r from-qcyan to-qviolet transition-transform duration-300 ${active === id ? "scale-x-100" : "scale-x-0"}`} />
            </a>
          ))}
          <a href="#contact" className={`${btn} ml-3 !px-5 !py-2.5 text-sm`}>Free Consultation</a>
        </nav>
        <button className="grid size-11 place-items-center rounded-xl border border-white/10 lg:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute top-1.5 left-0 h-0.5 w-5 rounded bg-white transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-white transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div className={`grid transition-[grid-template-rows] duration-300 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <nav aria-label="Mobile" className="mx-auto grid w-[min(1160px,92%)] gap-1 pt-2 pb-5">
            {links.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 font-medium no-underline ${active === id ? "bg-white/[0.06] text-white" : "text-soft"}`}>{label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className={`${btn} mt-2`}>Get a Free Consultation</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
