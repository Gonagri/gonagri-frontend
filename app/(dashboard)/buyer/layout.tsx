"use client";
import React from "react";
import { TopBar } from "../../components/layout/TopBar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, MessageSquare, User, List, LogOut, ShoppingCart } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";
import { Button } from "@/app/components/ui/Button";

const BuyerNav = () => {
    const pathname = usePathname();
    const { logout } = useAuth();

    const links = [
        { name: "Marketplace", href: "/buyer", icon: ShoppingBag },
        { name: "My Cart", href: "/buyer/cart", icon: ShoppingCart },
        { name: "Orders", href: "/buyer/orders", icon: List },
        { name: "Messages", href: "/buyer/messages", icon: MessageSquare },
        { name: "Profile", href: "/buyer/profile", icon: User },
    ];

    return (
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <Link href="/buyer" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-green-500/30">G</div>
                            <span className="text-xl font-bold text-green-700 hidden sm:block">Gonagri Market</span>
                        </Link>

                        <nav className="hidden md:flex space-x-4">
                            {links.map(link => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
                                            ? "bg-green-100 text-green-700 font-semibold"
                                            : "text-slate-600 hover:text-primary-700 hover:bg-green-50"
                                            }`}
                                    >
                                        <link.icon className="w-4 h-4 mr-2" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" onClick={logout} leftIcon={<LogOut className="w-4 h-4" />} className="text-slate-500">
                            Sign Out
                        </Button>
                        <div className="w-8 h-8 rounded-full bg-green-100 border-2 border-green-200 flex items-center justify-center text-green-700 font-bold shadow-sm">
                            B
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function BuyerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <BuyerNav />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
        </div>
    );
}
