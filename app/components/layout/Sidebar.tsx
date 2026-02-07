"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";

interface SidebarProps {
    links: { name: string; href: string; icon: LucideIcon }[];
    title: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ links, title }) => {
    const pathname = usePathname();
    const { logout } = useAuth();

    return (
        <>
            <div className="hidden md:flex flex-col w-64 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700 min-h-screen fixed left-0 top-0 bottom-0 z-20">
                <div className="p-6 border-b border-slate-700">
                    <h2 className="text-white font-bold text-xl tracking-wide">{title}</h2>
                </div>

                <nav className="flex-1 space-y-1 px-4 py-6 overflow-y-auto">
                    {links.map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all group ${isActive
                                        ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                    }`}
                            >
                                <link.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-slate-400 group-hover:text-white"}`} />
                                <span>{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-slate-700">
                    <button
                        onClick={logout}
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white rounded-xl font-medium transition-all"
                    >
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>
        </>
    );
};
