import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service, className = "" }) {
  return (
    <article
      className={`group flex h-full flex-col justify-between rounded-[26px] border border-navy-900/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-xl hover:shadow-navy-900/[0.06] ${className}`}
    >
      <div>
        <h3 className="font-display text-xl font-medium text-navy-900 sm:text-[22px]">
          {service.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-brand-600">{service.short}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          {service.description}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-600">
        Learn more
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </article>
  );
}
