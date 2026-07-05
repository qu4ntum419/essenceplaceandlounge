import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { DRINKS, type Drink } from "@/data/site";
import { formatNaira, useCart } from "@/lib/cart";
import { SectionTitle } from "./SectionTitle";
import { QuantityStepper } from "./QuantityStepper";

function DrinkCard({ drink }: { drink: Drink }) {
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);
  return (
    <article className="rounded-2xl bg-card border border-border overflow-hidden shadow-luxe group flex flex-col">
      <div className="aspect-square overflow-hidden bg-secondary/30">
        <img src={drink.image} alt={drink.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="text-[10px] tracking-[0.3em] uppercase text-gold">{drink.category}</div>
        <h3 className="mt-1 font-display text-lg leading-tight">{drink.name}</h3>
        <p className="mt-1.5 text-xs text-muted-foreground line-clamp-2">{drink.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-gold font-semibold">{formatNaira(drink.price)}</span>
          <QuantityStepper value={qty} onChange={setQty} />
        </div>
        <button onClick={() => { add({ id: drink.id, kind: "drink", name: drink.name, price: drink.price, image: drink.image, meta: drink.category }, qty); setOpen(true); }}
          className="mt-3 rounded-full border border-gold/50 text-gold text-sm font-semibold py-2 hover:bg-gold hover:text-primary-foreground transition">Add to Cart</button>
      </div>
    </article>
  );
}

export function DrinksSection() {
  const categories = useMemo(() => ["All", ...Array.from(new Set(DRINKS.map((d) => d.category)))], []);
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const filtered = DRINKS.filter((d) => (cat === "All" || d.category === cat) && (d.name + d.description).toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="drinks" className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="The Lounge" title="Drinks & Bottles" subtitle="Signature cocktails, top-shelf whiskeys, chilled champagne, and everything for the perfect night." />
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search drinks…" className="w-full rounded-full bg-background border border-border pl-11 pr-4 py-3 text-sm outline-none focus:border-gold" />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs font-medium border transition ${cat === c ? "bg-gold text-primary-foreground border-gold" : "bg-background border-border text-muted-foreground hover:text-gold hover:border-gold/50"}`}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((d) => (<DrinkCard key={d.id} drink={d} />))}
        </div>
      </div>
    </section>
  );
}