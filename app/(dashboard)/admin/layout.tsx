"use client";
import React from "react";
import { Sidebar } from "../../components/layout/Sidebar";
import { TopBar } from "../../components/layout/TopBar";
import { LayoutDashboard, Users, CreditCard, Flag, Settings, ShieldCheck, FileSearch, Gavel, Sliders } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const links = [
        { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
        { name: "User Verification", href: "/admin/verification", icon: ShieldCheck },
        { name: "Users", href: "/admin/users", icon: Users },
        { name: "Transactions", href: "/admin/transactions", icon: CreditCard },
        { name: "Resolved Disputes", href: "/admin/disputes", icon: Gavel },
        { name: "Audit Logs", href: "/admin/audit", icon: FileSearch },
        { name: "Platform Config", href: "/admin/config", icon: Sliders },
        { name: "Reports", href: "/admin/reports", icon: Flag },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Sidebar links={links} title="ADMIN PORTAL" />
            <TopBar title="Admin Dashboard" />

            <main className="md:ml-64 pt-20 px-4 sm:px-6 lg:px-8 pb-12">
                {children}
            </main>
        </div>
    );
}
