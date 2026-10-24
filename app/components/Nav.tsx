// "use client";
// import { useEffect, useState } from "react";

// export default function Nav({ brand, links, mail }: { brand: string; links: string[]; mail: string }) {
//   const [light, setLight] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("");
//   const words = brand.split(" ");
//   const last = words.pop();

//   useEffect(() => {
//     setLight(document.documentElement.classList.contains("light"));
//     const els = links.map((l) => document.getElementById(l.toLowerCase())).filter((e): e is HTMLElement => !!e);
//     const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-40% 0px -55% 0px" });
//     els.forEach((e) => io.observe(e));
//     return () => io.disconnect();
//   }, []); // eslint-disable-line react-hooks/exhaustive-deps

//   function toggle() {
//     const next = !light;
//     document.documentElement.classList.toggle("light", next);
//     try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
//     setLight(next);
//   }
//   return (
//     <header className="sticky top-0 z-20 border-b border-line bg-page/80 backdrop-blur">
//       <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4" aria-label="Main">
//         <a href="#home" className="text-lg font-bold">{words.join(" ")} <span className="text-accent">{last}</span></a>
//         <div className="hidden gap-6 text-sm md:flex">
//           {links.map((n) => (
//             <a key={n} href={"#" + n.toLowerCase()} className={active === n.toLowerCase() ? "text-accent" : "text-mute hover:text-accent"}>{n}</a>
//           ))}
//         </div>
//         <div className="flex items-center gap-2">
//           <button onClick={toggle} aria-label="Toggle light and dark theme" className="rounded-lg border border-line px-3 py-2 text-sm text-mute hover:border-accent">{light ? "Dark" : "Light"}</button>
//           <a href={mail} className="hidden rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-page sm:block">Hire me</a>
//           <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" className="rounded-lg border border-line px-3 py-2 text-sm md:hidden">{open ? "Close" : "Menu"}</button>
//         </div>
//       </nav>
//       {open && (
//         <div id="mobile-menu" className="border-t border-line bg-page md:hidden">
//           <div className="mx-auto flex max-w-5xl flex-col px-5 py-2">
//             {links.map((n) => (
//               <a key={n} href={"#" + n.toLowerCase()} onClick={() => setOpen(false)} className={"py-3 " + (active === n.toLowerCase() ? "text-accent" : "text-mute")}>{n}</a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";
import { useEffect, useState } from "react";

export default function Nav({ brand, links }: { brand: string; links: string[]; mail?: string }) {
  const [light, setLight] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const words = brand.split(" ");
  const last = words.pop();

  useEffect(() => {
    setLight(document.documentElement.classList.contains("light"));
    const els = links.map((l) => document.getElementById(l.toLowerCase())).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function toggle() {
    const next = !light;
    document.documentElement.classList.toggle("light", next);
    try { localStorage.setItem("theme", next ? "light" : "dark"); } catch {}
    setLight(next);
  }
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-page/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-4" aria-label="Main">
        <a href="#home" className="text-lg font-bold">{words.join(" ")} <span className="text-accent">{last}</span></a>
        <div className="hidden gap-6 text-sm md:flex">
          {links.map((n) => (
            <a key={n} href={"#" + n.toLowerCase()} className={active === n.toLowerCase() ? "text-accent" : "text-mute hover:text-accent"}>{n}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle light and dark theme" className="rounded-lg border border-line px-3 py-2 text-sm text-mute hover:border-accent">{light ? "Dark" : "Light"}</button>
          <a href="#contact" className="hidden rounded-lg border border-accent px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-page sm:block">Hire me</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" className="rounded-lg border border-line px-3 py-2 text-sm md:hidden">{open ? "Close" : "Menu"}</button>
        </div>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-page md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {links.map((n) => (
              <a key={n} href={"#" + n.toLowerCase()} onClick={() => setOpen(false)} className={"py-3 " + (active === n.toLowerCase() ? "text-accent" : "text-mute")}>{n}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
