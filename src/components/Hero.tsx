import hero from "@/assets/hero.jpg";
import { SITE } from "@/data/site";
export function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden pt-16">
      <img src={hero} alt="Essence Place lounge" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 md:pt-32 pb-20 min-h-[100svh] flex flex-col justify-center">
        <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-gold mb-6">Boutique Hotel · Lounge · Bar</p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-4xl">
          <span className="text-gold-gradient">Essence</span> Place<br />& Lounge
        </h1>
        <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">{SITE.tagline}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#rooms" className="inline-flex items-center justify-center rounded-full bg-gold-gradient text-primary-foreground font-semibold px-6 py-3 shadow-luxe hover:brightness-110 transition">Book a Room</a>
          <a href="#drinks" className="inline-flex items-center justify-center rounded-full border border-gold/50 text-gold px-6 py-3 hover:bg-gold hover:text-primary-foreground transition">Order Drinks</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-foreground/80 hover:border-gold hover:text-gold transition">Contact Us</a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[{ k: "24/7", v: "Reception" }, { k: "4.2★", v: "Guest rating" }, { k: "100+", v: "Happy stays" }].map((s) => (
            <div key={s.v}>
              <div className="font-display text-2xl sm:text-3xl text-gold">{s.k}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}