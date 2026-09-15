import { motion, useReducedMotion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.055, delayChildren: 0.05 },
  },
};

const word = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Splits text into words and reveals them with a rising stagger on mount.
 * Intended for a single hero-scale headline — not for repeated use per section.
 */
export default function AnimatedHeadline({ text, as: Tag = "h1", className = "" }) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <Tag className={className} style={{ display: "block" }}>
        {words.map((w, i) => (
          <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}>
            <motion.span variants={word} style={{ display: "inline-block" }}>
              {w}
              {i !== words.length - 1 ? "\u00A0" : ""}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}
