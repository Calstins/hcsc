import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Pins the section in view while the vertical scroll is translated into
 * horizontal motion of its track — the "scrollytelling gallery" pattern.
 * `heightVh` controls how much vertical scroll distance the effect spans;
 * more panels need a taller container to avoid feeling rushed.
 */
export default function HorizontalScrollSection({
  children,
  heightVh = 320,
  endOffset = "-92%",
}) {
  const targetRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", endOffset]);

  if (shouldReduceMotion) {
    return (
      <div className="flex gap-6 overflow-x-auto px-5 pb-4 no-scrollbar sm:px-8">
        {children}
      </div>
    );
  }

  return (
    <section ref={targetRef} style={{ height: `${heightVh}vh` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-6 pl-5 sm:gap-8 sm:pl-8 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          {children}
        </motion.div>
      </div>
    </section>
  );
}
