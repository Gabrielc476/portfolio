import * as React from "react";
import { cn } from "@/lib/utils";

export interface NeoButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "accent" | "outline";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const variantStyles = {
    primary: "bg-neo-yellow hover:bg-neo-yellow/90",
    secondary: "bg-neo-pink hover:bg-neo-pink/90",
    accent: "bg-neo-green hover:bg-neo-green/90",
    outline: "bg-neo-white hover:bg-neo-cream",
};

const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
};

const NeoButton = React.forwardRef<HTMLButtonElement, NeoButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        return (
            <button
                className={cn(
                    "neo-button inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wide",
                    variantStyles[variant],
                    sizeStyles[size],
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        );
    }
);
NeoButton.displayName = "NeoButton";

export { NeoButton };
