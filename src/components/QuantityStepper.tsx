import { Minus, Plus } from "lucide-react";
export function QuantityStepper({ value, onChange, min = 1, max = 99 }: { value: number; onChange: (v: number) => void; min?: number; max?: number; }) {
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-secondary/40">
      <button type="button" onClick={() => onChange(Math.max(min, value - 1))} className="h-9 w-9 grid place-items-center text-muted-foreground hover:text-gold" aria-label="Decrease"><Minus className="h-4 w-4" /></button>
      <span className="w-8 text-center text-sm font-semibold">{value}</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + 1))} className="h-9 w-9 grid place-items-center text-muted-foreground hover:text-gold" aria-label="Increase"><Plus className="h-4 w-4" /></button>
    </div>
  );
}