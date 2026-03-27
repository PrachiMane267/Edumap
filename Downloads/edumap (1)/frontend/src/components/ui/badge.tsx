export function Badge({
  className = "",
  variant = "default",
  children,
}: any) {

  const variants: any = {
    default: "bg-secondary text-secondary-foreground",
    outline: "border border-border text-foreground",
    secondary: "bg-secondary/50 text-foreground",
  };

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}