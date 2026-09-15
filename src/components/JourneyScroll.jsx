import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "../data/content";

export default function JourneyScroll() {
  const targetRef = useRef(null);
  const [active, setActive] = useState(0);
  const count = PROCESS_STEPS.length;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(count - 1, Math.floor(v * count));
    setActive(index);
  });

  return (
    <section ref={targetRef} className="relative h-[420vh] bg-navy-950">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* faint radial glow */}
        <div className="pointer-events-none absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-brand-400/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="font-display text-2xl font-medium text-white/90 sm:text-3xl">
              What working with us looks like
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50 sm:text-base">
              Four steps, from your first message to ongoing care — scroll to
              follow the journey.
            </p>

            {/* progress rail */}
            <div className="mt-10 flex gap-2.5">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.number} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full rounded-full bg-brand-400"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: i <= active ? 1 : 0 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[260px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm sm:p-12"
              >
                <span className="font-display text-6xl font-medium text-brand-400 sm:text-7xl">
                  {PROCESS_STEPS[active].number}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-white sm:text-3xl">
                  {PROCESS_STEPS[active].title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                  {PROCESS_STEPS[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
