"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu, X, User } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuth();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Marketplace", href: "/buyer" },
        { name: "How it Works", href: "/#how-it-works" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Terms", href: "/terms" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-md py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            G
                        </div>
                        <span className={`text-2xl font-bold ${isScrolled ? "text-primary-900" : "text-primary-800"}`}>
                            GONAGRI
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors ${isScrolled
                                    ? "text-slate-600 hover:text-primary-600"
                                    : "text-slate-700 hover:text-primary-600"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                <Link href={user.role === 'farmer' ? '/farmer' : user.role === 'admin' ? '/admin' : '/buyer'} >
                                    <Button variant="outline" size="sm" leftIcon={<User aria-hidden="true" className="w-4 h-4" />}>
                                        Dashboard
                                    </Button>
                                </Link>
                                <Button variant="ghost" size="sm" onClick={logout}>Logout</Button>
                            </div>
                        ) : (
                            <>
                                <Link href="/login">
                                    <Button variant="ghost" className={isScrolled ? "text-slate-700" : "text-slate-800"}>
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button variant="primary">Get Started</Button>
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col space-y-4 animate-fadeIn">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 font-medium py-2 hover:text-primary-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="border-t border-slate-100 pt-4 flex flex-col space-y-3">
                        {user ? (
                            <>
                                <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button fullWidth>Dashboard</Button>
                                </Link>
                                <Button variant="ghost" fullWidth onClick={() => { logout(); setIsMobileMenuOpen(false); }}>Logout</Button>
                            </>
                        ) : (
                            <>
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button variant="outline" fullWidth>Login</Button>
                                </Link>
                                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button fullWidth>Get Started</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
