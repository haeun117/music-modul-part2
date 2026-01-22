import { cn } from "./utils";

export function Tooltip({ label, children, className }) {
  return (
    <span className="relative inline-flex items-center group">
      {children}
      <span
        role="tooltip"
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max -translate-x-1/2 rounded-xl",
          "bg-slate-900 px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-soft",
          "transition group-hover:opacity-100 group-focus-within:opacity-100",
          className
        )}
      >
        {label}
      </span>
    </span>
  );
}
