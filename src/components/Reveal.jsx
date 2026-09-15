import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades + lifts a block into place once it enters the viewport.
 * Wrap a single section or card with this rather than animating everything.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.7,
  once = true,
  amount = 0.25,
  className = "",
  as = "div",
}) {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
