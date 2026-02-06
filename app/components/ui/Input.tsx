import React, { InputHTMLAttributes, forwardRef } from "react";
import { AlertCircle } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
    helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, icon, className = "", helperText, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">
                        {label}
                    </label>
                )}
                <div className="relative">
                    {icon && (
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            {icon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        className={`
              w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4
              text-slate-900 placeholder:text-slate-400
              focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none
              transition-all duration-200
              disabled:bg-slate-50 disabled:text-slate-500
              ${icon ? "pl-10" : ""}
              ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : ""}
              ${className}
            `}
                        {...props}
                    />
                </div>
                {error && (
                    <div className="flex items-center mt-1.5 text-sm text-red-500 pl-1 animate-fadeIn">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {error}
                    </div>
                )}
                {helperText && !error && (
                    <p className="mt-1.5 text-sm text-slate-500 pl-1">{helperText}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";
