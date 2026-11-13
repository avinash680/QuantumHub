import { useEffect, useState } from "react";
import { Reveal } from "../hooks.jsx";
import { wrap, card, btn, h2, lead, gradText } from "../ui.js";

function Block({ text }) {
  if (!text.startsWith("## ")) return <p className="mb-4 text-soft">{text}</p>;
  const [head, ...rest] = text.slice(3).split("\n");
  const lines = rest.filter(Boolean);
  const list = lines.length && lines.every((l) => l.startsWith("- "));
  return (
    <>
      <h3 className="mt-8 mb-3 text-2xl font-bold">{head}</h3>
      {list
        ? <ul className="list-disc space-y-2 pl-6 text-soft">{lines.map((l) => <li key={l}>{l.slice(2)}</li>)}</ul>
        : lines.map((l) => <p key={l} className="mb-4 text-soft">{l}</p>)}
    </>
  );
}

function PostModal({ slug, onClose }) {
  const [post, setPost] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`/api/posts/${slug}`).then((r) => (r.ok ? r.json() : Promise.reject())).then(setPost).catch(() => setError(true));
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [slug]);

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm animate-fade-up" onClick={onClose} role="dialog" aria-modal="true" aria-label={post?.title || "Blog post"}>
      <div className="max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-panel p-7 sm:p-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="mb-6 inline-flex items-center gap-2 text-sm text-muted transition hover:text-white">
          <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg> Close
        </button>
        {error && <p className="text-rose-400">Could not load this post.</p>}
        {!post && !error && <p className="text-muted">Loading…</p>}
        {post && (
          <article>
            <h2 className="mb-6 text-3xl font-extrabold sm:text-4xl">{post.title}</h2>
            {post.body.map((b, i) => <Block key={i} text={b} />)}
            <a href="#contact" onClick={onClose} className={`${btn} mt-8`}>Get a Free Consultation</a>
          </article>
        )}
      </div>
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(null);
  useEffect(() => { fetch("/api/posts").then((r) => r.json()).then(setPosts).catch(() => setError(true)); }, []);

  return (
    <section id="blog" className="border-t border-white/10 bg-panel">
      <div className={`${wrap} py-20 lg:py-28`}>
        <Reveal>
          <h2 className={`${h2} mb-4`}>Insights from the <span className={gradText}>blog</span></h2>
          <p className={`${lead} mb-12`}>Practical advice on websites, apps, and getting more from your digital presence.</p>
        </Reveal>
        {error && <p className="text-rose-400">Could not load posts. Check that the API is running.</p>}
        {!posts && !error && <p className="text-muted">Loading…</p>}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <article className={`${card} flex h-full flex-col p-7`}>
                <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
                <p className="mb-6 flex-1 text-muted">{p.meta}</p>
                {p.ready
                  ? <button onClick={() => setOpen(p.slug)} className="self-start font-semibold text-qcyan transition hover:text-white">Read article →</button>
                  : <span className="self-start rounded-full border border-white/10 px-3 py-1 text-xs text-muted">Coming soon</span>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      {open && <PostModal slug={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
