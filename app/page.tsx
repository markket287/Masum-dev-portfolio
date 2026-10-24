// import Nav from "./components/Nav";
// import Reveal from "./components/Reveal";
// import ContactForm from "./components/ContactForm";
// import HeroVisual, { Backdrop } from "./components/HeroVisual";
// import NeonHeading from "./components/NeonHeading";

// import { me, services, skills, nav } from "../lib/site";

// export default function Home() {
//   const first = me.name.split(" ")[0];
//   const mail = `mailto:${me.email}?subject=Project%20inquiry`;
//   const social = [["Fiverr", me.fiverr], ["GitHub", me.github], ["LinkedIn", me.linkedin]].filter(([, u]) => u);
//   return (
//     <>
//       <Nav brand={me.brand} links={nav} />
//       <div className="relative isolate overflow-hidden">
//         <Backdrop />
//         <section id="home" className="mx-auto grid min-h-[85vh] max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr]">
//           <Reveal>
//             <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-mute">
//               <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
//               Open to new projects
//             </p>
//             <p className="mb-3 font-medium text-accent">Hi, my name is</p>
//             <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">{me.name}.</h1>
//             <h2 className="mt-2 text-3xl font-bold text-mute sm:text-5xl">I build things for the web.</h2>
//             <p className="mt-6 max-w-xl text-lg text-mute">I am a {me.role} from {me.location}. I create fast, responsive and reliable web apps, from the interface to the database.</p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               <a href="#contact" className="btn">Contact me</a>
//             </div>
//           </Reveal>
//           <Reveal delay={0.2}>
//             <HeroVisual alt={`Portrait of ${me.name}`} tags={["React", "Next.js", "Node.js", "MongoDB"]} />
//           </Reveal>
//         </section>
//       </div>

//       <main className="mx-auto max-w-5xl px-5">
//         <section id="about" className="scroll-mt-20 py-16">
//           <h2 className="mb-8 text-3xl font-bold">About me</h2>
//           <Reveal className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
//             <img src="/me.jpg" alt={`Portrait of ${me.name}`} width={240} height={240} className="mx-auto h-60 w-60 rounded-2xl border border-line object-cover" />
//             <div className="space-y-4 text-mute">
//               <p>Hello! I am {first}, a web developer based in {me.location}. I enjoy turning ideas into clean, practical web applications that people actually enjoy using.</p>
//               <p>I work with HTML, CSS, JavaScript, React, Next.js and Tailwind CSS on the frontend, and I am growing my backend skills with Node.js, Express, TypeScript and MongoDB.</p>
//               <p>I value clear communication, maintainable code and realistic deadlines, and I deliver reliable work within the agreed scope.</p>
//             </div>
//           </Reveal>
//         </section>

//         <section id="services" className="scroll-mt-20 py-16">
//           <h2 className="mb-8 text-3xl font-bold">What I do</h2>
//           <div className="grid gap-5 md:grid-cols-3">
//             {services.map((s, i) => (
//               <Reveal key={s.t} delay={i * 0.1}>
//                 <div className="card h-full transition hover:-translate-y-1 hover:border-accent">
//                   <h3 className="mb-2 text-xl font-semibold">{s.t}</h3>
//                   <p className="text-mute">{s.d}</p>
//                 </div>
//               </Reveal>
//             ))}
//           </div>
//         </section>

//         <section id="skills" className="scroll-mt-20 py-16">
//           <NeonHeading>My Tech Stack</NeonHeading>
//           <Reveal className="flex flex-wrap justify-center gap-2.5">
//             {skills.map((s) => <span key={s} className="rounded-full border border-line bg-card px-4 py-2 text-sm">{s}</span>)}
//           </Reveal>
//         </section>

//         <section id="contact" className="scroll-mt-20 py-16 text-center">
//           <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
//           <p className="mx-auto mb-8 max-w-lg text-mute">I am open to new projects and collaborations. Send me a message and I will reply as soon as I can.</p>
//           <ContactForm />
//           <p className="mt-6 text-mute">Or email me directly: <a className="text-accent hover:underline" href={mail}>{me.email}</a></p>
//           <div className="mt-4 flex justify-center gap-6">
//             {social.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer" className="text-mute hover:text-accent">{n}</a>)}
//           </div>
//         </section>
//       </main>
//       <footer className="border-t border-line py-8 text-center text-sm text-mute">
//         © {new Date().getFullYear()} {me.name}. All rights reserved. Designed and built with ♥. · <a href="/admin" className="hover:text-accent">Admin</a>
//       </footer>
//     </>
//   );
// }
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import ContactForm from "./components/ContactForm";
import HeroVisual, { Backdrop } from "./components/HeroVisual";
import NeonHeading from "./components/NeonHeading";

import { me, services, skills, nav } from "../lib/site";

export default function Home() {
  const first = me.name.split(" ")[0];
  const mail = `mailto:${me.email}?subject=Project%20inquiry`;
  const social = [["Fiverr", me.fiverr], ["GitHub", me.github], ["LinkedIn", me.linkedin]].filter(([, u]) => u);
  return (
    <>
      <Nav brand={me.brand} links={nav} />
      <div className="relative isolate overflow-hidden">
        <Backdrop />
        <section id="home" className="mx-auto grid min-h-[85vh] max-w-5xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-mute">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none" />
              Open to new projects
            </p>
            <p className="mb-3 font-medium text-accent">Hi, my name is</p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">{me.name}.</h1>
            <h2 className="mt-2 text-3xl font-bold text-mute sm:text-5xl">I build things for the web.</h2>
            <p className="mt-6 max-w-xl text-lg text-mute">I am a {me.role} from {me.location}. I create fast, responsive and reliable web apps, from the interface to the database.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn">Contact me</a>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <HeroVisual alt={`Portrait of ${me.name}`} tags={["React", "Next.js", "Node.js", "MongoDB"]} />
          </Reveal>
        </section>
      </div>

      <main className="mx-auto max-w-5xl px-5">
        <section id="about" className="scroll-mt-20 py-16">
          <NeonHeading>About Me</NeonHeading>
          <Reveal className="grid items-center gap-10 md:grid-cols-[240px_1fr]">
            <img src="/me.jpg" alt={`Portrait of ${me.name}`} width={240} height={240} className="mx-auto h-60 w-60 rounded-2xl border border-line object-cover" />
            <div className="space-y-4 text-mute">
              <p>Hello! I am {first}, a web developer based in {me.location}. I enjoy turning ideas into clean, practical web applications that people actually enjoy using.</p>
              <p>I work with HTML, CSS, JavaScript, React, Next.js and Tailwind CSS on the frontend, and I am growing my backend skills with Node.js, Express, TypeScript and MongoDB.</p>
              <p>I value clear communication, maintainable code and realistic deadlines, and I deliver reliable work within the agreed scope.</p>
            </div>
          </Reveal>
        </section>

        <section id="services" className="scroll-mt-20 py-16">
          <NeonHeading>What I Do</NeonHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.1}>
                <div className="card h-full transition hover:-translate-y-1 hover:border-accent">
                  <h3 className="mb-2 text-xl font-semibold">{s.t}</h3>
                  <p className="text-mute">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-20 py-16">
          <NeonHeading>My Tech Stack</NeonHeading>
          <Reveal className="flex flex-wrap justify-center gap-2.5">
            {skills.map((s) => <span key={s} className="rounded-full border border-line bg-card px-4 py-2 text-sm">{s}</span>)}
          </Reveal>
        </section>

        <section id="contact" className="scroll-mt-20 py-16 text-center">
          <NeonHeading>Contact Me</NeonHeading>
          <p className="mx-auto mb-8 max-w-lg text-mute">I am open to new projects and collaborations. Send me a message and I will reply as soon as I can.</p>
          <ContactForm />
          <p className="mt-6 text-mute">Or email me directly: <a className="text-accent hover:underline" href={mail}>{me.email}</a></p>
          <div className="mt-4 flex justify-center gap-6">
            {social.map(([n, u]) => <a key={n} href={u} target="_blank" rel="noreferrer" className="text-mute hover:text-accent">{n}</a>)}
          </div>
        </section>
      </main>
      <footer className="border-t border-line py-8 text-center text-sm text-mute">
        © {new Date().getFullYear()} {me.name}. All rights reserved. Designed and built with ♥. · <a href="/admin" className="hover:text-accent">Admin</a>
      </footer>
    </>
  );
}