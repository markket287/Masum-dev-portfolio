"use client";
import { motion, useReducedMotion } from "framer-motion";

const mask = "radial-gradient(ellipse at center, black 30%, transparent 75%)";
const grid = "linear-gradient(rgb(var(--ink)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--ink)) 1px, transparent 1px)";

// Soft grid + slowly drifting glow orbs behind the hero
export function Backdrop() {
  const reduce = useReducedMotion();
  const drift = (x: number, y: number, d: number) =>
    reduce ? {} : { animate: { x: [0, x, 0], y: [0, y, 0] }, transition: { duration: d, repeat: Infinity, ease: "easeInOut" as const } };
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: grid, backgroundSize: "48px 48px", maskImage: mask, WebkitMaskImage: mask }} />
      <motion.div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" {...drift(60, 40, 14)} />
      <motion.div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" {...drift(-50, -30, 16)} />
    </div>
  );
}

// Portrait with a rotating gradient ring and floating tech badges
export default function HeroVisual({ alt, tags }: { alt: string; tags: string[] }) {
  const reduce = useReducedMotion();
  const spots = ["left-0 top-8", "right-0 top-20", "left-3 bottom-12", "right-6 bottom-2"];
  return (
    <div className="relative mx-auto h-72 w-72 sm:h-96 sm:w-96">
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{ background: "conic-gradient(from 0deg, rgb(var(--accent)), transparent 60%, rgb(var(--accent)))" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-[6px] overflow-hidden rounded-full border-4 border-page bg-card">
        <img src="/me.jpg" alt={alt} width={384} height={384} className="h-full w-full object-cover" />
      </div>
      {tags.slice(0, 4).map((t, i) => (
        <motion.span
          key={t}
          className={`absolute ${spots[i]} rounded-full border border-line bg-card px-3.5 py-1.5 text-sm font-semibold shadow-lg`}
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}