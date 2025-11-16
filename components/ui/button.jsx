import clsx from "clsx";

export function Button({ className, variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-500 ring-offset-emerald-950",
    outline:
      "border border-emerald-400 text-emerald-100 hover:bg-emerald-900/50 ring-offset-emerald-950",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  );
}