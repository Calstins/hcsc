import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "../data/content";
import logo from "../assets/logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-white/95 backdrop-blur border-b border-navy-900/10 shadow-[0_1px_0_rgba(10,15,24,0.04)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <NavLink to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={logo} alt={CLINIC.name} className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
          <span className="leading-tight">
            <span
              className={`block font-display text-[15px] font-semibold tracking-tight sm:text-base ${
                scrolled || open ? "text-navy-900" : "text-navy-900"
              }`}
            >
              Palicon
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.16em] text-brand-600 sm:text-[11px]">
              Hospital
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-brand-600" : "text-navy-800 hover:text-brand-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-brand-50"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${CLINIC.phonePrimaryTel}`}
            className="flex items-center gap-2 rounded-full border border-navy-900/15 px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-brand-500 hover:text-brand-600"
          >
            <Phone className="h-4 w-4" strokeWidth={2} />
            Call
          </a>
          <a
            href={`https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-brand-500/30 transition-colors hover:bg-brand-600"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/15 text-navy-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy-900/10 bg-white lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2.5 text-base font-medium ${
                      isActive ? "bg-brand-50 text-brand-600" : "text-navy-800"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <a
                  href={`tel:${CLINIC.phonePrimaryTel}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-navy-900/15 px-4 py-2.5 text-sm font-medium text-navy-800"
                >
                  <Phone className="h-4 w-4" /> {CLINIC.phonePrimaryDisplay}
                </a>
                <a
                  href={`https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-2.5 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
