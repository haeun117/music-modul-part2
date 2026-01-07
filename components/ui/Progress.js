import { cn } from "./utils";

export function Progress({ value = 0, className }) {
  const safeValue = Math.min(100, Math.max(0, value));
  return (
    <div
      className={cn(
        "h-3 w-full overflow-hidden rounded-full bg-muted",
        className
      )}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={safeValue}
    >
      <div
        className="h-full rounded-full bg-accent transition"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
}
