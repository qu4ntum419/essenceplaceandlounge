import { useState } from "react";
import { X, Trash2, MessageCircle } from "lucide-react";
import { useCart, formatNaira } from "@/lib/cart";
import { QuantityStepper } from "./QuantityStepper";
import { buildWhatsAppMessage, whatsappLink } from "@/lib/whatsapp";

export function CartDrawer() {
  const { open, setOpen, items, update, remove, subtotal, clear } = useCart();
  const [checkout, setCheckout] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const canCheckout = items.length > 0 && name.trim() && phone.trim();
  const handleCheckout = () => {
    const msg = buildWhatsAppMessage({ items, customerName: name.trim(), phone: phone.trim(), note });
    window.open(whatsappLink(msg), "_blank");
  };
  return (
    <>
      <div className={`fixed inset-0 z-50 bg-background/70 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)} />
      <aside className={`fixed top-0 right-0 z-50 h-full w-full sm:max-w-md bg-card border-l border-border shadow-luxe flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <header className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="font-display text-xl">{checkout ? "Checkout" : "Your Cart"}</h2>
          <button onClick={() => { setOpen(false); setTimeout(() => setCheckout(false), 300); }} className="h-9 w-9 grid place-items-center rounded-full border border-border text-foreground" aria-label="Close cart"><X className="h-4 w-4" /></button>
        </header>
        {!checkout ? (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 && (<p className="text-sm text-muted-foreground text-center py-10">Your cart is empty. Add a room or a drink to get started.</p>)}
              {items.map((i) => (
                <div key={i.id} className="flex gap-3 rounded-xl bg-secondary/40 p-3">
                  <img src={i.image} alt={i.name} className="h-16 w-16 rounded-lg object-cover" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <div className="text-[10px] tracking-widest uppercase text-gold">{i.meta}</div>
                        <div className="font-medium truncate">{i.name}</div>
                      </div>
                      <button onClick={() => remove(i.id)} className="text-muted-foreground hover:text-destructive" aria-label="Remove"><Trash2 className="h-4 w-4" /></button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantityStepper value={i.quantity} onChange={(v) => update(i.id, v)} />
                      <div className="text-gold font-semibold text-sm">{formatNaira(i.price * i.quantity)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <footer className="border-t border-border p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Subtotal</span>
                <span className="font-display text-xl text-gold">{formatNaira(subtotal)}</span>
              </div>
              <button disabled={items.length === 0} onClick={() => setCheckout(true)} className="w-full rounded-full bg-gold-gradient text-primary-foreground font-semibold py-3 disabled:opacity-40 hover:brightness-110 transition">Checkout via WhatsApp</button>
              {items.length > 0 && (<button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-destructive">Clear cart</button>)}
            </footer>
          </>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              <p className="text-sm text-muted-foreground">Fill in your details. We'll open WhatsApp with your order pre-filled and reply with payment details.</p>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground">Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="mt-1 w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground">Phone Number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="08012345678" className="mt-1 w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm outline-none focus:border-gold" />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-muted-foreground">Note (optional)</label>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={3} placeholder="Arrival by 8 PM today" className="mt-1 w-full rounded-lg bg-secondary/50 border border-border px-4 py-3 text-sm outline-none focus:border-gold resize-none" />
              </div>
              <div className="rounded-xl border border-border p-4 space-y-2 text-sm">
                {items.map((i) => (
                  <div key={i.id} className="flex justify-between text-muted-foreground">
                    <span className="truncate pr-2">{i.name} × {i.quantity}</span>
                    <span className="text-foreground">{formatNaira(i.price * i.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 flex justify-between font-semibold">
                  <span>Total</span><span className="text-gold">{formatNaira(subtotal)}</span>
                </div>
              </div>
            </div>
            <footer className="border-t border-border p-5 space-y-2">
              <button disabled={!canCheckout} onClick={handleCheckout} className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white font-semibold py-3 disabled:opacity-40 hover:brightness-110 transition">
                <MessageCircle className="h-4 w-4" /> Send Order on WhatsApp
              </button>
              <button onClick={() => setCheckout(false)} className="w-full text-xs text-muted-foreground hover:text-gold">← Back to cart</button>
            </footer>
          </>
        )}
      </aside>
    </>
  );
}