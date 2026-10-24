import "./globals.css";
import type { ReactNode } from "react";
import { me } from "../lib/site";

export const metadata = {
  title: `${me.name} | Full Stack Web Developer`,
  description: "Portfolio of Masum Islam, a full stack web developer from Bangladesh building fast, responsive web apps with React, Next.js, Node.js and MongoDB.",
};
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.classList.add("light")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
