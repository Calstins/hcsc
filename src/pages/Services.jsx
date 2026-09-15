import { MessageCircle } from "lucide-react";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import MapEmbed from "../components/MapEmbed";
import { SERVICES, CLINIC } from "../data/content";
import { IMAGES } from "../assets/images";

export default function Services() {
  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`;

  return (
    <>
      <PageHeader />
      <IntroStrip />
      <ServicesGrid />
      <NeedHelpBanner waHref={waHref} />
      <MapSection />
    </>
  );
}

function PageHeader() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-32 sm:pb-20 sm:pt-40">
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
          text="Our Services"
          className="font-display text-4xl font-medium leading-[1.1] text-navy-900 sm:text-6xl"
        />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Whatever brings you to us, our personnel deliver the same standard
            of optimal, quality care — irrespective of which service you need.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function IntroStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-8 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Parallax speed={0.12}>
          <Reveal>
            <div className="overflow-hidden rounded-[28px]">
              <img
                src={IMAGES.consultation}
                alt="A specialist reviewing a diagnostic scan with a patient"
                className="h-[320px] w-full object-cover sm:h-[400px]"
              />
            </div>
          </Reveal>
        </Parallax>
        <div>
          <Reveal>
            <p className="text-sm font-medium text-brand-600">Nine areas of focus</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-2xl font-medium leading-snug text-navy-900 sm:text-3xl">
              From routine screening to complex gynaecological surgery, one
              clinical team sees you through it.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              Not sure which service applies to you? Message us on WhatsApp
              and describe what you're experiencing — we'll point you to the
              right consultation.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, i) => (
          <Reveal key={service.id} delay={(i % 3) * 0.08}>
            <ServiceCard service={service} className="h-full" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function NeedHelpBanner({ waHref }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-brand-500/30 blur-[110px]" />
      </div>
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
            Need one of these services?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
            We anticipate helping you reach your own success story. Reach out
            and let's start with a conversation.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with the clinic
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading title="Find us" description="110 Saliu Obodo Road, off Addo Road, Ajah, Lagos." />
      <Reveal delay={0.1} className="mt-8 block">
        <MapEmbed height="420px" />
      </Reveal>
    </section>
  );
}
