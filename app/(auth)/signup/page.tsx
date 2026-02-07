"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Mail, Lock, User as UserIcon, Sprout, ShoppingBag } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";

const signupSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["farmer", "buyer"]),
});

type SignupFormData = z.infer<typeof signupSchema>;

export default function SignupPage() {
    const [role, setRole] = useState<"farmer" | "buyer">("farmer");
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            role: "farmer"
        }
    });

    const handleRoleChange = (newRole: "farmer" | "buyer") => {
        setRole(newRole);
        setValue("role", newRole);
    };

    const onSubmit = async (data: SignupFormData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        login(data.role);
    };

    return (
        <div>
            <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-slate-900">Create your account</h3>
                <p className="text-sm text-slate-500 mt-1">Join the community today.</p>
            </div>

            <div className="flex gap-4 mb-8">
                <div
                    onClick={() => handleRoleChange("farmer")}
                    className={`flex-1 cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center text-center transition-all ${role === "farmer"
                            ? "border-primary-500 bg-primary-50 text-primary-700"
                            : "border-slate-100 hover:border-slate-200 text-slate-500"
                        }`}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${role === "farmer" ? "bg-primary-100" : "bg-slate-100"}`}>
                        <Sprout size={20} />
                    </div>
                    <span className="font-semibold text-sm">I'm a Farmer</span>
                </div>

                <div
                    onClick={() => handleRoleChange("buyer")}
                    className={`flex-1 cursor-pointer border-2 rounded-xl p-4 flex flex-col items-center text-center transition-all ${role === "buyer"
                            ? "border-secondary-500 bg-secondary-50 text-secondary-700"
                            : "border-slate-100 hover:border-slate-200 text-slate-500"
                        }`}
                >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${role === "buyer" ? "bg-secondary-100" : "bg-slate-100"}`}>
                        <ShoppingBag size={20} />
                    </div>
                    <span className="font-semibold text-sm">I'm a Buyer</span>
                </div>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Full Name"
                    placeholder="John Doe"
                    icon={<UserIcon size={18} />}
                    error={errors.fullName?.message}
                    {...register("fullName")}
                />

                <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    icon={<Mail size={18} />}
                    error={errors.email?.message}
                    {...register("email")}
                />

                <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    icon={<Lock size={18} />}
                    error={errors.password?.message}
                    {...register("password")}
                />

                <div className="text-xs text-slate-500 mt-2">
                    By clicking &quot;Create Account&quot;, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
                </div>

                <Button
                    type="submit"
                    fullWidth
                    isLoading={isSubmitting}
                    className="mt-6"
                >
                    Create Account
                </Button>
            </form>

            <div className="mt-6 text-center text-sm">
                <span className="text-slate-500">Already have an account? </span>
                <Link href="/login" className="font-medium text-primary-600 hover:text-primary-500">
                    Sign in
                </Link>
            </div>
        </div>
    );
}
