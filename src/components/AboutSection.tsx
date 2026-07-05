import { Shield, Sparkles, Coffee, HeartHandshake } from "lucide-react";
import { SectionTitle } from "./SectionTitle";
const items = [
  { icon: Sparkles, title: "Luxury Interiors", text: "Curated spaces that whisper elegance." },
  { icon: Shield, title: "24/7 Security", text: "Round-the-clock safety and privacy." },
  { icon: Coffee, title: "Full-service Lounge", text: "Signature cocktails and premium bottles." },
  { icon: HeartHandshake, title: "Warm Hospitality", text: "Guests welcomed like family, always." },
];
export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="About Us" title="A quiet luxury, thoughtfully hosted" subtitle="Essence  place & Lounge blends boutique comfort with an intimate lounge experience — designed for travellers, celebrants, and anyone chasing an unforgettable evening." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl bg-card border border-border p-6 hover:border-gold/60 transition-colors">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold"><it.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}