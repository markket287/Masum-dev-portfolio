import type { Config } from "tailwindcss";
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: { extend: { colors: { page: c("page"), card: c("card"), line: c("line"), ink: c("ink"), mute: c("mute"), accent: c("accent") } } },
  plugins: [],
};
export default config;
