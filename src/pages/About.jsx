import { Link } from "react-router-dom";
import { ShieldCheck, HeartHandshake, Sparkles, Award, Lightbulb, ArrowUpRight } from "lucide-react";
import AnimatedHeadline from "../components/AnimatedHeadline";
import Reveal from "../components/Reveal";
import Parallax from "../components/Parallax";
import SectionHeading from "../components/SectionHeading";
import { VALUES, CLINIC } from "../data/content";
import { IMAGES } from "../assets/images";

const VALUE_ICONS = {
  Integrity: ShieldCheck,
  Respect: HeartHandshake,
  Excellence: Award,
  Compassion: Sparkles,
  Innovation: Lightbulb,
};

export default function About() {
  return (
    <>
      <PageHeader />
      <Intro />
      <MissionVision />
      <ValuesGrid />
      <TeamStrip />
      <CtaStrip />
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
          text="A dream made real for women's health in Lagos."
          className="font-display text-4xl font-medium leading-[1.1] text-navy-900 text-balance sm:text-6xl"
        />
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {CLINIC.name} exists to make comprehensive, exemplary healthcare
            attainable for women in Ajah and across Lagos — in a setting that
            never asks you to compromise on dignity to receive good care.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <SectionHeading
            title="A specialist gynaecology and obstetrics practice"
            description="We treat every patient with a balance of clinical quality, compassion, respect and dignity — helping her feel as whole and healthy as possible, supported by modern medical technology at every stage."
          />
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-ink-soft sm:text-base">
              <p>
                As an organisation, we take pride in employing personnel who
                are genuinely good at what they do — and we're grateful for
                every patient who lets us walk part of her story with her.
              </p>
              <p>
                Through ongoing clinical training, every member of our team —
                whatever their role — is held to the same standard of care,
                from the front desk to the theatre.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="order-1 lg:order-2">
          <Parallax speed={0.1}>
            <Reveal>
              <div className="overflow-hidden rounded-[28px]">
                <img
                  src={IMAGES.aboutDoctor}
                  alt="A consultant at Her Care Specialist Clinic"
                  className="h-[420px] w-full object-cover sm:h-[480px]"
                />
              </div>
            </Reveal>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-9 sm:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Vision
            </p>
            <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              To exceed expectations in delivering consistent, patient-centred
              care for women.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="h-full rounded-[28px] border border-white/10 bg-white/[0.04] p-9 sm:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
              Mission
            </p>
            <p className="mt-4 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              Outstanding care for women, delivered by skilled, dedicated
              people using modern medical technology.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ValuesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        align="center"
        title="Why women choose Her Care"
        description="Five commitments that shape every appointment, every recommendation, every conversation."
        className="mx-auto max-w-2xl"
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map((value, i) => {
          const Icon = VALUE_ICONS[value.title] ?? ShieldCheck;
          return (
            <Reveal key={value.title} delay={i * 0.06} className="lg:col-span-1">
              <div className="flex h-full flex-col gap-4 rounded-[24px] border border-navy-900/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-navy-900/[0.06]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-navy-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TeamStrip() {
  return (
    <section className="bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title="The people behind your care"
          description="A small, consistent clinical team — drag to see more of the faces you'll meet."
        />
      </div>
      <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 no-scrollbar sm:px-8">
        {IMAGES.team.map((member, i) => (
          <Reveal
            key={member.src}
            delay={i * 0.05}
            className="w-[240px] shrink-0 snap-start sm:w-[280px]"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={member.src}
                alt={member.alt}
                className="h-[320px] w-full object-cover transition-transform duration-500 hover:scale-105 sm:h-[360px]"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function CtaStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <Reveal>
        <div className="flex flex-col items-center justify-between gap-6 rounded-[32px] bg-navy-900 px-8 py-12 text-center sm:flex-row sm:px-14 sm:text-left">
          <div>
            <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
              Questions before you book?
            </h3>
            <p className="mt-2 max-w-md text-sm text-white/60 sm:text-base">
              Our team is happy to talk you through any service before your first visit.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex shrink-0 items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
          >
            Contact us
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
