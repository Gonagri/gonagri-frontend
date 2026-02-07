import React, { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "white";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-[0.98]";

  const variants = {
    primary:
      "bg-primary-600 hover:bg-primary-700 text-white shadow-lg shadow-primary-600/30 focus:ring-primary-500",
    secondary:
      "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/30 focus:ring-amber-500",
    outline:
      "border-2 border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700 focus:ring-slate-400",
    ghost:
      "bg-transparent hover:bg-slate-100/50 text-slate-600 hover:text-slate-900",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/30 focus:ring-red-500",
    white:
      "bg-white hover:bg-gray-50 text-slate-800 shadow-md focus:ring-slate-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
      ) : (
        leftIcon && <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
