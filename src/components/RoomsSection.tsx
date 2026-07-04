import { useState } from "react";
import { Check, Search } from "lucide-react";
import { ROOMS, type Room } from "@/data/site";
import { formatNaira, useCart } from "@/lib/cart";
import { SectionTitle } from "./SectionTitle";
import { QuantityStepper } from "./QuantityStepper";

function RoomCard({ room }: { room: Room }) {
  const { add, setOpen } = useCart();
  const [qty, setQty] = useState(1);
  return (
    <article className="group rounded-2xl overflow-hidden bg-card border border-border shadow-luxe flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={room.image} alt={room.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className={`absolute top-3 left-3 rounded-full text-[11px] font-semibold px-2.5 py-1 ${room.available ? "bg-gold text-primary-foreground" : "bg-destructive text-destructive-foreground"}`}>
          {room.available ? "Available" : "Fully Booked"}
        </span>
        <span className="absolute top-3 right-3 rounded-full bg-background/70 backdrop-blur text-[11px] tracking-widest uppercase px-2.5 py-1 text-gold">{room.category}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl">{room.name}</h3>
          <div className="text-right">
            <div className="text-gold font-semibold">{formatNaira(room.price)}</div>
            <div className="text-[11px] text-muted-foreground">per night</div>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{room.description}</p>
        <ul className="mt-4 grid grid-cols-2 gap-y-1.5 text-xs text-muted-foreground">
          {room.amenities.map((a) => (<li key={a} className="flex items-center gap-1.5"><Check className="h-3 w-3 text-gold" /> {a}</li>))}
        </ul>
        <div className="mt-5 flex items-center justify-between gap-3">
          <QuantityStepper value={qty} onChange={setQty} />
          <button disabled={!room.available}
            onClick={() => { add({ id: room.id, kind: "room", name: room.name, price: room.price, image: room.image, meta: "per night" }, qty); setOpen(true); }}
            className="flex-1 rounded-full bg-gold-gradient text-primary-foreground text-sm font-semibold py-2.5 disabled:opacity-40 hover:brightness-110 transition">Add to Cart</button>
        </div>
      </div>
    </article>
  );
}

export function RoomsSection() {
  const [q, setQ] = useState("");
  const filtered = ROOMS.filter((r) => (r.name + r.category + r.description).toLowerCase().includes(q.toLowerCase()));
  return (
    <section id="rooms" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="Accommodation" title="Rooms & Suites" subtitle="From tranquil standard rooms to our marble-clad VIP suite — every stay is curated for comfort." />
        <div className="mx-auto max-w-md mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search rooms…" className="w-full rounded-full bg-secondary/50 border border-border pl-11 pr-4 py-3 text-sm outline-none focus:border-gold" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((r) => (<RoomCard key={r.id} room={r} />))}
        </div>
      </div>
    </section>
  );
}