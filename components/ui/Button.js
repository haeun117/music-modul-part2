import { cn } from "./utils";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}) {
  const base =
    "inline-flex min-h-[44px] items-center justify-center rounded-2xl px-5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60";
  const variants = {
    primary: "bg-accent text-white shadow-soft hover:bg-accentStrong",
    secondary: "bg-white text-ink shadow-soft hover:bg-muted",
    ghost: "bg-transparent text-ink hover:bg-muted"
  };
  const sizes = {
    md: "text-base",
    sm: "text-sm px-4",
    lg: "text-lg px-6"
  };
  return (
    <button
      type="button"
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
