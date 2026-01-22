import { cn } from "./utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-soft border border-muted",
        className
      )}
      {...props}
    />
  );
}
