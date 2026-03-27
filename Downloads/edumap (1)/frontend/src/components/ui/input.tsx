export function Input({ className = "", ...props }: any) {
  return (
    <input
      className={`
        h-10 w-full rounded-md border border-border bg-background px-3 text-sm
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary focus:scale-[1.02]
        ${className}
        `}
    />
  );
}