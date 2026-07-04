export function SectionTitle({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean; }) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}