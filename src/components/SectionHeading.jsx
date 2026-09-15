import Reveal from "./Reveal";

export default function SectionHeading({
  title,
  description,
  align = "left",
  size = "lg",
  className = "",
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleSize =
    size === "xl"
      ? "text-4xl sm:text-5xl lg:text-6xl"
      : "text-3xl sm:text-4xl lg:text-[2.75rem]";

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <Reveal>
        <h2 className={`font-display ${titleSize} font-medium leading-[1.08] text-balance text-navy-900`}>
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.08}>
          <p className={`max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg ${align === "center" ? "mx-auto" : ""}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
