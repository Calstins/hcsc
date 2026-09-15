import { NavLink } from "react-router-dom";
import { MapPin, Phone, MessageCircle, ArrowUpRight } from "lucide-react";
import { CLINIC, NAV_LINKS } from "../data/content";
import logo from "../assets/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC.addressMapQuery
  )}`;

  return (
    <footer className="bg-navy-950 text-white/80">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt={CLINIC.name} className="h-12 w-12 object-contain" />
              <div>
                <p className="font-display text-lg font-semibold text-white">{CLINIC.name}</p>
                <p className="text-xs uppercase tracking-[0.16em] text-brand-300">
                  Ajah, Lagos
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              A specialist gynaecology and obstetrics practice built around one idea:
              every woman deserves modern, unhurried, dignified care.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Explore
            </p>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-sm text-white/70 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Reach us
            </p>
            <ul className="mt-4 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a href={directionsUrl} target="_blank" rel="noreferrer" className="hover:text-brand-300">
                  {CLINIC.address}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span className="flex flex-col gap-1">
                  <a href={`tel:${CLINIC.phonePrimaryTel}`} className="hover:text-brand-300">
                    {CLINIC.phonePrimaryDisplay}
                  </a>
                  <a href={`tel:${CLINIC.phoneSecondaryTel}`} className="hover:text-brand-300">
                    {CLINIC.phoneSecondaryDisplay}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`https://wa.me/${CLINIC.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-300"
                >
                  Chat on WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {CLINIC.name}. All rights reserved.</p>
          <p>Gynaecology &amp; Obstetrics · Ajah, Lagos State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
