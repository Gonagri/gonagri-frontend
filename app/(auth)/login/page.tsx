"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const { login, isLoading: isAuthLoading } = useAuth();

    const [selectedRole, setSelectedRole] = useState<"farmer" | "buyer" | "admin">("farmer");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        login(selectedRole);
    };

    return (
        <div>
            <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Sign in to your account</h3>
                <p className="text-sm text-slate-500 mt-1">Welcome back! Please enter your details.</p>
            </div>

            <div className="mb-6 p-1 bg-slate-100 rounded-lg flex">
                {(["farmer", "buyer"] as const).map((role) => (
                    <button
                        key={role}
                        type="button"
                        onClick={() => setSelectedRole(role)}
                        className={`flex-1 py-1.5 text-xs font-medium rounded-md capitalize transition-all ${selectedRole === role
                            ? "bg-white shadow-sm text-primary-700"
                            : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        {role}
                    </button>
                ))}
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    icon={<Mail size={18} />}
                    error={errors.email?.message}
                    {...register("email")}
                />

                <div className="relative">
                    <Input
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        icon={<Lock size={18} />}
                        error={errors.password?.message}
                        {...register("password")}
                    />
                    <button
                        type="button"
                        className="absolute top-[34px] right-3 text-slate-400 hover:text-slate-600"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                            Remember me
                        </label>
                    </div>

                    <div className="text-sm">
                        <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isSubmitting}
                    className="w-full"
                >
                    Sign in
                </Button>
            </form>

            <div className="mt-6 text-center text-sm">
                <span className="text-slate-500">Don't have an account? </span>
                <Link href="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                    Sign up
                </Link>
            </div>
        </div>
    );
}
