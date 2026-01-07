import { cn } from "./utils";

export function Badge({ className, tone = "accent", ...props }) {
  const tones = {
    accent: "bg-accent/15 text-accentStrong",
    neutral: "bg-muted text-ink"
  };
  return (
    <span
      className={cn(
        "inline-flex min-h-[32px] items-center rounded-full px-3 text-sm font-semibold",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
