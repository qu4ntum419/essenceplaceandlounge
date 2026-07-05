import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { SectionTitle } from "./SectionTitle";
export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/30 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Contact" title="Come stay with us" subtitle="Reach us any time — reception is open 24 hours." />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold/10 text-gold text-xs font-semibold px-3 py-1">
              <Clock className="h-3.5 w-3.5" /> Open 24 hours
            </span>
            <div className="space-y-4">
              <a href={`tel:${SITE.phoneDisplay.replace(/\s/g, "")}`} className="flex items-start gap-3 hover:text-gold transition">
                <Phone className="h-5 w-5 text-gold mt-0.5" />
                <div><div className="text-xs tracking-widest uppercase text-muted-foreground">Phone</div><div className="font-medium">{SITE.phoneDisplay}</div></div>
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 hover:text-gold transition">
                <Mail className="h-5 w-5 text-gold mt-0.5" />
                <div><div className="text-xs tracking-widest uppercase text-muted-foreground">Email</div><div className="font-medium">{SITE.email}</div></div>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5" />
                <div><div className="text-xs tracking-widest uppercase text-muted-foreground">Address</div><div className="font-medium">{SITE.address}</div></div>
              </div>
            </div>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white font-semibold px-5 py-3 hover:brightness-110 transition">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border min-h-[320px]">
            <iframe title="Map" src={SITE.mapEmbed} className="w-full h-full min-h-[320px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </div>
    </section>
  );
}