// Crops just the globe mark out of the supplied logo (square JPG with black margins) and writes the name beside it.
export function LogoMark({ size = 40 }) {
  const s = size / 40;
  return (
    <span className="block shrink-0 overflow-hidden rounded-xl" style={{ width: size, height: size }}>
      <img src="/logo.jpg" alt="" className="block max-w-none mix-blend-lighten"
        style={{ width: 210 * s, marginLeft: -8 * s, marginTop: -64 * s }} />
    </span>
  );
}

export default function Logo({ fullImage = false }) {
  return (
    <a href="#home" aria-label="Quantum Technology Universal – home" className={`inline-flex h-[88px] shrink-0 items-center overflow-hidden no-underline ${fullImage ? "w-[88px]" : "w-[min(246px,70vw)]"}`}>
      <img src="/logo.jpg" alt="" className={`block max-w-none mix-blend-lighten ${fullImage ? "size-full object-contain" : "w-full -translate-y-[28.5%]"}`} />
    </a>
  );
}
