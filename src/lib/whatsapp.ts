import { SITE } from "@/data/site";
import type { CartItem } from "@/lib/cart";
import { formatNaira } from "@/lib/cart";

export function buildWhatsAppMessage(opts: { items: CartItem[]; customerName: string; phone: string; note?: string; }) {
  const rooms = opts.items.filter((i) => i.kind === "room");
  const drinks = opts.items.filter((i) => i.kind === "drink");
  const total = opts.items.reduce((n, i) => n + i.price * i.quantity, 0);
  const lines: string[] = [];
  lines.push(`Hello ${SITE.name},`);
  lines.push("");
  lines.push("I would like to make the following booking/order:");
  lines.push("");
  if (rooms.length) {
    lines.push("*Rooms:*");
    for (const r of rooms) lines.push(`- ${r.name} x${r.quantity} = ${formatNaira(r.price * r.quantity)}`);
    lines.push("");
  }
  if (drinks.length) {
    lines.push("*Drinks:*");
    for (const d of drinks) lines.push(`- ${d.name} x${d.quantity} = ${formatNaira(d.price * d.quantity)}`);
    lines.push("");
  }
  lines.push(`*Total Amount:* ${formatNaira(total)}`);
  lines.push("");
  lines.push(`*Customer Name:* ${opts.customerName}`);
  lines.push(`*Phone Number:* ${opts.phone}`);
  if (opts.note?.trim()) lines.push(`*Additional Note:* ${opts.note.trim()}`);
  lines.push("");
  lines.push("Please send payment details. Thank you.");
  return lines.join("\n");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}