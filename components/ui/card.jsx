import clsx from "clsx";

export function Card({ className, ...props }) {
  return (
    <div
      className={clsx(
        "rounded-xl border bg-card text-card-foreground shadow-sm",
        "border-emerald-800 bg-emerald-900/80 text-emerald-50",
        className
      )}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div
      className={clsx("p-6", className)}
      {...props}
    />
  );
}