import { cn } from "./utils";

export function Toggle({ checked = false, onChange, className, label }) {
  return (
    <button
      type="button"
      aria-pressed={checked}
      onClick={() => onChange?.(!checked)}
      className={cn(
        "relative inline-flex min-h-[44px] w-16 items-center rounded-full border border-muted bg-white px-1 transition",
        checked ? "bg-accent/20" : "bg-white",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-7 w-7 rounded-full bg-accent shadow-soft transition",
          checked ? "translate-x-8" : "translate-x-0"
        )}
      />
      <span className="sr-only">{label}</span>
    </button>
  );
}
