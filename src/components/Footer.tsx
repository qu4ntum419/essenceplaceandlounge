import { SITE } from "@/data/site";
import { Instagram, Facebook, Twitter } from "lucide-react";
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <div className="font-display text-gold-gradient text-xl font-bold">{SITE.short}</div>
          <p className="text-xs text-muted-foreground mt-1">{SITE.tagline}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={SITE.socials.instagram} aria-label="Instagram" className="h-10 w-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition"><Instagram className="h-4 w-4" /></a>
          <a href={SITE.socials.facebook} aria-label="Facebook" className="h-10 w-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition"><Facebook className="h-4 w-4" /></a>
          <a href={SITE.socials.twitter} aria-label="Twitter" className="h-10 w-10 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition"><Twitter className="h-4 w-4" /></a>
        </div>
        <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}