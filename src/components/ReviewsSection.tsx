import { Star } from "lucide-react";
import { AVG_RATING, REVIEWS } from "@/data/site";
import { SectionTitle } from "./SectionTitle";
function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < n ? "fill-[oklch(0.82_0.15_82)] text-[oklch(0.82_0.15_82)]" : "text-muted-foreground/40"}`} />
      ))}
    </div>
  );
}
export function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Reviews" title={`Rated ${AVG_RATING}★ by our guests`} subtitle="A few words from those who've stayed and sipped with us." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {REVIEWS.map((r) => (
            <figure key={r.name} className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-3">
              <Stars n={r.rating} />
              <blockquote className="text-sm text-foreground/90 leading-relaxed">"{r.text}"</blockquote>
              <figcaption className="mt-auto text-xs tracking-widest uppercase text-gold">— {r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}