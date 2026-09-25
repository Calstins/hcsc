import { Navigation } from "lucide-react";
import { CLINIC } from "../data/content";

export default function MapEmbed({ height = "420px", className = "" }) {
  const query = encodeURIComponent(CLINIC.addressMapQuery);
  const embedSrc = `https://maps.google.com/maps?q=${query}&t=m&z=15&output=embed&iwloc=near`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${query}`;

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-navy-900/10 bg-navy-900 ${className}`}
      style={{ height }}
    >
      <iframe
        title="Palicon Hospital location"
        src={embedSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-brand-tint h-full w-full transition-all duration-500"
        style={{ border: 0 }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
      <a
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        className="pointer-events-auto absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy-900 shadow-lg shadow-navy-950/20 transition-transform hover:scale-[1.03]"
      >
        <Navigation className="h-4 w-4 text-brand-500" strokeWidth={2.3} />
        Get Directions
      </a>
    </div>
  );
}
