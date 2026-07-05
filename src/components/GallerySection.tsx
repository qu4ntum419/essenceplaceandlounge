import { useState } from "react";
import { X } from "lucide-react";
import { GALLERY } from "@/data/site";
import { SectionTitle } from "./SectionTitle";
export function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Gallery" title="A look inside the essence" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((g, i) => (
            <button key={i} onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl border border-border ${i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </button>
          ))}
        </div>
      </div>
      {open !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm grid place-items-center p-4" onClick={() => setOpen(null)}>
          <button className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full border border-border text-foreground" aria-label="Close"><X className="h-5 w-5" /></button>
          <img src={GALLERY[open].src} alt={GALLERY[open].alt} className="max-h-[85vh] max-w-full rounded-2xl shadow-luxe" />
        </div>
      )}
    </section>
  );
}