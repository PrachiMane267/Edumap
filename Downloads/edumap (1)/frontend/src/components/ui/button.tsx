import * as React from "react";

export function Button({
  className = "",
  variant = "default",
  size = "default",
  ...props
}: any) {

 const base =
"inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none hover:scale-[1.02] active:scale-95";

  const variants: any = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-border bg-background hover:bg-secondary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-secondary",
  };

  const sizes: any = {
    default: "px-4 py-2 text-sm",
    sm: "px-3 py-1.5 text-xs",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}