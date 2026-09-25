import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";
import { CLINIC } from "../data/content";

export default function Contact() {
  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    CLINIC.addressMapQuery
  )}`;

  return (
    <>
      <PageHeader />

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <InfoCard
            icon={<MapPin className="h-5 w-5" strokeWidth={1.8} />}
            title="Visit us"
            lines={[CLINIC.address]}
            action={{ label: "Get directions", href: directionsUrl }}
          />
          <InfoCard
            icon={<Phone className="h-5 w-5" strokeWidth={1.8} />}
            title="Call us"
            lines={[CLINIC.phonePrimaryDisplay]}
            action={{ label: `Call ${CLINIC.phonePrimaryDisplay}`, href: `tel:${CLINIC.phonePrimaryTel}` }}
          />
          <InfoCard
            icon={<Mail className="h-5 w-5" strokeWidth={1.8} />}
            title="Email us"
            lines={[CLINIC.email]}
            action={{ label: "Send an email", href: `mailto:${CLINIC.email}` }}
          />
          <InfoCard
            icon={<MessageCircle className="h-5 w-5" strokeWidth={1.8} />}
            title="WhatsApp"
            lines={[CLINIC.phonePrimaryDisplay, "Fastest way to reach our team"]}
            action={{ label: "Start a chat", href: waHref, external: true }}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 sm:pb-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-medium text-navy-900 sm:text-3xl">
                Send us a message
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
                Prefer to write it out? Fill in the form and our front desk
                will follow up by phone or email.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 block">
              <ContactForm />
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="overflow-hidden rounded-[28px] border border-navy-900/10 bg-mist p-2">
                <MapEmbed height="320px" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-brand-50 p-5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" strokeWidth={1.8} />
                <p className="text-sm leading-relaxed text-navy-800">
                  For same-day appointment requests, WhatsApp reaches our team
                  fastest — the contact form is best for general enquiries.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-32 sm:pb-16 sm:pt-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(23,134,196,0.16) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <AnimatedHeadline
          text="Let's talk about your care."
          className="font-display text-4xl font-medium leading-[1.1] text-navy-900 sm:text-6xl"
        />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Reach the clinic directly by phone, WhatsApp or the form below —
            whichever is easiest for you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function InfoCard({ icon, title, lines, action }) {
  return (
    <Reveal>
      <div className="flex h-full flex-col justify-between rounded-[26px] border border-navy-900/10 bg-white p-7">
        <div>
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            {icon}
          </span>
          <h3 className="mt-5 font-display text-lg font-medium text-navy-900">{title}</h3>
          <div className="mt-2 space-y-1 text-sm leading-relaxed text-ink-soft">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <a
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noreferrer" : undefined}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600"
        >
          {action.label}
        </a>
      </div>
    </Reveal>
  );
}
