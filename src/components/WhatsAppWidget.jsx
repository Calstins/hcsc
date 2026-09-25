import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { CLINIC } from "../data/content";

export default function WhatsAppWidget() {
  const [expanded, setExpanded] = useState(false);
  const href = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
    CLINIC.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-64 rounded-2xl border border-navy-900/10 bg-white p-4 shadow-xl shadow-navy-950/15"
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-display text-sm font-semibold text-navy-900">
                Talk to Palicon Hospital
              </p>
              <button
                aria-label="Close"
                onClick={() => setExpanded(false)}
                className="rounded-full p-1 text-navy-500 hover:bg-navy-900/5"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">
              Message us directly on WhatsApp — a real member of our care team
              will reply during clinic hours.
            </p>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <MessageCircle className="h-4 w-4" />
              Start chat
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Open WhatsApp chat"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg shadow-brand-500/40"
      >
        <span className="absolute inset-0 rounded-full bg-brand-500/60 animate-ping" />
        <MessageCircle className="relative h-6 w-6" strokeWidth={2.2} />
      </motion.button>
    </div>
  );
}
