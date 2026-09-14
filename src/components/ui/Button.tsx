"use client";

import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  asChild?: boolean;
}

export function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/50 active:scale-95";
  
  const variants = {
    primary: "bg-[var(--accent)] text-white shadow-[0_0_20px_var(--accent)] shadow-[var(--accent)]/30 hover:shadow-[0_0_30px_var(--accent)] hover:shadow-[var(--accent)]/50",
    outline: "border border-[var(--foreground)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 text-[var(--foreground)]",
    ghost: "hover:bg-[var(--foreground)]/10 text-[var(--foreground)]"
  };

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  );
}
