import { Link } from "@tanstack/react-router";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/lib/cart";
import { SITE } from "@/data/site";

const links = [
  { href: "#rooms", label: "Rooms" },
  { href: "#drinks", label: "Lounge" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { count, setOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 min-w-0">
          <span className="font-display text-gold-gradient text-lg sm:text-xl font-bold truncate">{SITE.short}</span>
          <span className="hidden sm:inline text-[10px] tracking-[0.25em] text-muted-foreground uppercase">Hotel & Lounge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => setOpen(true)} className="relative inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-2 text-sm text-gold hover:bg-gold hover:text-primary-foreground transition-colors" aria-label="Open cart">
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1 rounded-full bg-gold text-primary-foreground text-[11px] font-bold grid place-items-center">{count}</span>
            )}
          </button>
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="text-base text-foreground/90 hover:text-gold py-1">{l.label}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}