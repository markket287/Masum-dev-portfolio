// "use client";
// import { motion, useReducedMotion } from "framer-motion";

// const NEON = "#22d3ee";
// const soft = "0 0 6px rgba(34,211,238,.7), 0 0 18px rgba(34,211,238,.5), 0 0 36px rgba(34,211,238,.35)";
// const strong = "0 0 10px rgba(34,211,238,1), 0 0 30px rgba(34,211,238,.8), 0 0 60px rgba(34,211,238,.6)";

// // Centered neon heading: fades in on scroll, glow pulses, underline bar grows
// export default function NeonHeading({ children }: { children: string }) {
//   const reduce = useReducedMotion();
//   return (
//     <div className="mb-10 text-center">
//       <motion.div
//         initial={reduce ? false : { opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, margin: "-60px" }}
//         transition={{ duration: 0.6 }}
//       >
//         <motion.h2
//           className="text-3xl font-extrabold tracking-wide sm:text-4xl"
//           style={{ color: NEON, textShadow: soft }}
//           animate={reduce ? undefined : { textShadow: [soft, strong, soft] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         >
//           {children}
//         </motion.h2>
//         <motion.span
//           className="mx-auto mt-4 block h-1 rounded-full"
//           style={{ background: NEON, boxShadow: "0 0 12px rgba(34,211,238,.9)", ...(reduce ? { width: 96 } : {}) }}
//           initial={reduce ? false : { width: 0 }}
//           whileInView={{ width: 96 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         />
//       </motion.div>
//     </div>
//   );
// }
"use client";
import { motion, useReducedMotion } from "framer-motion";

const NEON = "#22d3ee";
const soft = "0 0 4px rgba(34,211,238,.5), 0 0 12px rgba(34,211,238,.35), 0 0 24px rgba(34,211,238,.2)";
const strong = "0 0 8px rgba(34,211,238,.8), 0 0 20px rgba(34,211,238,.55), 0 0 40px rgba(34,211,238,.35)";

// Centered neon heading: fades in on scroll, glow pulses, underline bar grows
export default function NeonHeading({ children }: { children: string }) {
  const reduce = useReducedMotion();
  return (
    <div className="mb-10 text-center">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-extrabold tracking-wide sm:text-4xl"
          style={{ color: NEON, textShadow: soft }}
          animate={reduce ? undefined : { textShadow: [soft, strong, soft] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {children}
        </motion.h2>
        <motion.span
          className="mx-auto mt-4 block h-1 rounded-full"
          style={{ background: NEON, boxShadow: "0 0 12px rgba(34,211,238,.9)", ...(reduce ? { width: 96 } : {}) }}
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>
    </div>
  );
}