import React from "react";

interface CardProps {
    children: React.ReactNode;
    title?: string | React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    glass?: boolean;
    onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
    children,
    title,
    footer,
    className = "",
    hover = false,
    padding = "md",
    glass = false,
    onClick,
}) => {
    const paddings = {
        none: "p-0",
        sm: "p-3",
        md: "p-6",
        lg: "p-8",
    };

    const styles = `
        rounded-2xl border border-slate-100 overflow-hidden
        ${glass
            ? "bg-white/80 backdrop-blur-md border-white/40 shadow-xl"
            : "bg-white shadow-sm"
        }
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer" : ""}
        ${className}
    `;

    return (
        <div className={styles} onClick={onClick}>
            {title && (
                <div className="px-6 py-4 border-b border-slate-50">
                    {typeof title === "string" ? (
                        <h3 className="font-bold text-slate-900">{title}</h3>
                    ) : (
                        title
                    )}
                </div>
            )}
            <div className={paddings[padding]}>
                {children}
            </div>
            {footer && (
                <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/50">
                    {footer}
                </div>
            )}
        </div>
    );
};
