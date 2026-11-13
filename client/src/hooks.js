import { useEffect } from "react";

const SITE = "Quantum Technology Universal";
const DEFAULT_DESC = "Quantum Technology Universal delivers custom web and mobile solutions for Real Estate, Hospitality, E-Commerce, and Education businesses worldwide. Get a free consultation today.";

export function usePageMeta(title, description = DEFAULT_DESC) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Web & Mobile App Design and Development Company`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
}
