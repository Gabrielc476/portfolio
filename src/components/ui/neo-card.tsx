import * as React from "react";
import { cn } from "@/lib/utils";

export interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
    color?: "yellow" | "pink" | "green" | "blue" | "orange" | "purple" | "white";
    hover?: boolean;
}

const colorStyles = {
    yellow: "bg-neo-yellow",
    pink: "bg-neo-pink",
    green: "bg-neo-green",
    blue: "bg-neo-blue",
    orange: "bg-neo-orange",
    purple: "bg-neo-purple",
    white: "bg-neo-white",
};

const NeoCard = React.forwardRef<HTMLDivElement, NeoCardProps>(
    ({ className, color = "white", hover = true, children, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "neo-border neo-shadow p-6",
                    colorStyles[color],
                    hover && "transition-all duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:neo-shadow-hover",
                    className
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    }
);
NeoCard.displayName = "NeoCard";

const NeoCardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-4", className)} {...props} />
));
NeoCardHeader.displayName = "NeoCardHeader";

const NeoCardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("text-xl font-bold tracking-tight", className)}
        {...props}
    />
));
NeoCardTitle.displayName = "NeoCardTitle";

const NeoCardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
));
NeoCardDescription.displayName = "NeoCardDescription";

const NeoCardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
));
NeoCardContent.displayName = "NeoCardContent";

export { NeoCard, NeoCardHeader, NeoCardTitle, NeoCardDescription, NeoCardContent };
