export function Card({ className = "", ...props }: any) {
  return (
    <div
      className={`
        rounded-2xl border border-border bg-card text-card-foreground
        shadow-sm hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-[1.01]
        ${className}
      `}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: any) {
  return (
    <div
      className={`p-6 pb-3 flex flex-col gap-1 ${className}`}
      {...props}
    />
  );
}

export function CardTitle({ className = "", ...props }: any) {
  return (
    <h3
      className={`
        font-semibold text-lg text-foreground tracking-tight
        ${className}
      `}
      {...props}
    />
  );
}

export function CardDescription({ className = "", ...props }: any) {
  return (
    <p
      className={`
        text-sm text-muted-foreground leading-relaxed
        ${className}
      `}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }: any) {
  return (
    <div
      className={`p-6 pt-0 ${className}`}
      {...props}
    />
  );
}