"use client";
import React from "react";
import { Sidebar } from "../../components/layout/Sidebar";
import { TopBar } from "../../components/layout/TopBar";
import { LayoutDashboard, Package, ShoppingCart, MessageSquare, Wallet, UserCircle, BarChart3, ClipboardList } from "lucide-react";

export default function FarmerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        { name: "Dashboard", href: "/farmer", icon: LayoutDashboard },
        { name: "Inventory", href: "/farmer/inventory", icon: ClipboardList },
        { name: "Active Products", href: "/farmer/products", icon: Package },
        { name: "Orders Received", href: "/farmer/orders", icon: ShoppingCart },
        { name: "Sales Analytics", href: "/farmer/analytics", icon: BarChart3 },
        { name: "Direct Messages", href: "/farmer/messages", icon: MessageSquare },
        { name: "Wallet", href: "/farmer/wallet", icon: Wallet },
        { name: "My Profile", href: "/farmer/profile", icon: UserCircle },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar links={links} title="FARMER AREA" />
            <TopBar title="Farmer Dashboard" />

            <main className="md:ml-64 pt-20 px-4 sm:px-6 lg:px-8 pb-12">
                {children}
            </main>
        </div>
    );
}
