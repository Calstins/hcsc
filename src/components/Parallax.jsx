import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wrap an element to give it its own scroll speed relative to its
 * container — stack several with different `speed` values for a
 * multilevel parallax effect.
 * speed > 0 moves slower than the page (background feel);
 * speed < 0 moves opposite to scroll (foreground pop).
 */
export default function Parallax({ children, speed = 0.15, className = "" }) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 220 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={shouldReduceMotion ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
