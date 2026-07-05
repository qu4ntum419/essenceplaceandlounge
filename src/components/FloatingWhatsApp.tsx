import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
export function FloatingWhatsApp() {
  return (
    <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform">
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}