import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, ShieldCheck, HeartHandshake, Stethoscope } from "lucide-react";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";
import SectionHeading from "../components/SectionHeading";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import ServiceCard from "../components/ServiceCard";
import JourneyScroll from "../components/JourneyScroll";
import MapEmbed from "../components/MapEmbed";
import { CLINIC, VALUES, SERVICES } from "../data/content";
import { IMAGES } from "../assets/images";

export default function Home() {
  const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`;

  return (
    <>
      <Hero waHref={waHref} />
      <ValuesMarquee />
      <AboutPreview />
      <ServicesShowcase />
      <JourneyScroll />
      <FacilityGallery />
      <CtaBanner waHref={waHref} />
      <MapPreview />
    </>
  );
}

function Hero({ waHref }) {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-32 sm:pb-28 sm:pt-40">
      {/* dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(23,134,196,0.18) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom, black, transparent 80%)",
        }}
      />
      <div className="pointer-events-none absolute -top-24 right-[-10%] h-[30rem] w-[30rem] rounded-full bg-brand-100 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <AnimatedHeadline
            text="Specialist care for every stage of a woman's life."
            className="font-display text-[2.6rem] font-medium leading-[1.06] tracking-tight text-navy-900 text-balance sm:text-6xl lg:text-[3.6rem]"
          />

          <Reveal delay={0.35}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">
              {CLINIC.name} is a gynaecology and obstetrics practice in Ajah, Lagos,
              built on quality, compassion and dignity — helping every patient feel
              whole and heard, backed by modern medical technology.
            </p>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <Link
                to="/services"
                className="flex items-center justify-center gap-2 rounded-full border border-navy-900/15 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-600"
              >
                Explore our services
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.55}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-navy-900/10 pt-6">
              <TrustItem icon={<ShieldCheck className="h-4 w-4" />} label="Confidential, patient-first care" />
              <TrustItem icon={<Stethoscope className="h-4 w-4" />} label="Modern diagnostic technology" />
              <TrustItem icon={<HeartHandshake className="h-4 w-4" />} label="Support beyond the appointment" />
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-navy-900/10 shadow-2xl shadow-navy-900/10">
            <img
              src={IMAGES.heroDoctor}
              alt="Specialist at Her Care Specialist Clinic"
              className="h-[420px] w-full object-cover sm:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden w-56 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-xl shadow-navy-900/10 sm:block">
            <p className="font-display text-2xl font-medium text-navy-900">Ajah, Lagos</p>
            <p className="mt-1 text-sm text-ink-soft">Gynaecology &amp; Obstetrics</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustItem({ icon, label }) {
  return (
    <div className="flex items-center gap-2.5 text-sm font-medium text-navy-800">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        {icon}
      </span>
      {label}
    </div>
  );
}

function ValuesMarquee() {
  // Repeated enough times that each half of the track is comfortably wider
  // than any real viewport — otherwise the track runs out of content right
  // at the loop point and the section's background shows through as a gap.
  const REPEAT = 8;
  const repeated = Array.from({ length: REPEAT }, () => VALUES).flat();
  return (
    <section className="border-y border-navy-900/10 bg-mist py-8">
      <div className="no-scrollbar overflow-hidden mask-fade-x">
        <div className="marquee-track flex w-max gap-14">
          {repeated.map((v, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              <span className="font-display text-lg text-navy-800">{v.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Parallax speed={0.12} className="relative">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={IMAGES.aboutDoctor}
                alt="A consultant at Her Care Specialist Clinic"
                className="h-[440px] w-full object-cover sm:h-[500px]"
              />
            </div>
          </Reveal>
        </Parallax>

        <div>
          <SectionHeading
            title="A practice built around quality, compassion and dignity"
            description="We are a specialist gynaecology and obstetrics facility treating every patient with the balance of clinical quality and personal respect she deserves — helped along by a competent clinical team at each step, and modern technology throughout."
          />
          <Reveal delay={0.15}>
            <ul className="mt-8 space-y-4">
              {[
                "A dedicated consultant follows your case, not a rotating cast of strangers.",
                "Decisions are explained plainly, in the time it takes to actually understand them.",
                "Every recommendation is grounded in current clinical technique.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {line}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.25}>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              More about the clinic
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesShowcase() {
  return (
    <section className="bg-mist pt-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            title="Care across every stage — gynaecology to delivery"
            description="Nine specialist services delivered by one clinical team. Scroll to see the full range."
            className="max-w-2xl"
          />
          <Reveal delay={0.1}>
            <Link
              to="/services"
              className="hidden shrink-0 items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-600 sm:flex"
            >
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="mt-12">
        <HorizontalScrollSection heightVh={300}>
          {SERVICES.map((service) => (
            <div key={service.id} className="w-[82vw] shrink-0 sm:w-[420px]">
              <ServiceCard service={service} className="h-full" />
            </div>
          ))}
          <div className="w-[82vw] shrink-0 sm:w-[420px]">
            <Link
              to="/services"
              className="flex h-full flex-col justify-between rounded-[26px] border border-dashed border-navy-900/20 bg-white/50 p-7 transition-colors hover:border-brand-400"
            >
              <div>
                <p className="font-display text-xl font-medium text-navy-900">
                  See the complete list
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Every service, with detail on what to expect at each visit.
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                Go to Our Services <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </HorizontalScrollSection>
      </div>
    </section>
  );
}

function FacilityGallery() {
  const images = IMAGES.facility;
  const speeds = [0.18, -0.12, 0.22, -0.16];

  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        align="center"
        title="A calm, modern facility"
        description="Take a glimpse inside the space where your care happens — designed to feel unhurried from the moment you walk in."
        className="mx-auto max-w-2xl"
      />

      <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        {images.map((img, i) => (
          <Parallax
            key={img.src}
            speed={speeds[i % speeds.length]}
            className={`overflow-hidden rounded-3xl ${i % 2 === 0 ? "mt-0" : "mt-8 sm:mt-14"}`}
          >
            <Reveal delay={i * 0.06}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-56 w-full object-cover sm:h-72"
              />
            </Reveal>
          </Parallax>
        ))}
      </div>
    </section>
  );
}

function CtaBanner({ waHref }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-500/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-brand-400/20 blur-[100px]" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-medium text-white text-balance sm:text-5xl">
            Ready to talk to a specialist?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
            Reach our team directly — most enquiries get a same-day response
            on WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition-transform hover:-translate-y-0.5 hover:bg-brand-600"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Visit contact page
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MapPreview() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div>
          <SectionHeading
            title="Find us in Ajah"
            description="Easy to reach from the Lekki–Epe corridor, with parking on-site."
          />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              <p className="font-medium text-navy-900">{CLINIC.address}</p>
              <p>{CLINIC.phonePrimaryDisplay} (WhatsApp) · {CLINIC.phoneSecondaryDisplay}</p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <MapEmbed height="380px" />
        </Reveal>
      </div>
    </section>
  );
}
