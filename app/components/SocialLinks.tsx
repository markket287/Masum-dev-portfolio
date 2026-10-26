type Link = { name: string; url: string };

const GITHUB = "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z";
const LINKEDIN = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z";

function Icon({ name }: { name: string }) {
  if (name === "Fiverr") return <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center text-lg font-extrabold leading-none">fi</span>;
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d={name === "GitHub" ? GITHUB : LINKEDIN} />
    </svg>
  );
}

export default function SocialLinks({ links }: { links: Link[] }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {links.map((l) => (
        <a key={l.name} href={l.url} target="_blank" rel="noreferrer" aria-label={`${l.name} profile`}
          className="flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-2.5 font-semibold text-mute transition hover:-translate-y-1 hover:border-accent hover:text-accent">
          <Icon name={l.name} />
          {l.name}
        </a>
      ))}
    </div>
  );
}