"use client";
import React from "react";
import { Search, Bell, User } from "lucide-react";
import { useAuth } from "@/app/providers/AuthProvider";

interface TopBarProps {
    title: string;
}

export const TopBar: React.FC<TopBarProps> = ({ title }) => {
    const { user } = useAuth();

    return (
        <div className="md:ml-64 bg-white border-b border-slate-200 h-16 fixed top-0 left-0 right-0 z-10 shadow-sm">
            <div className="h-full px-6 flex items-center justify-between">
                <h1 className="text-xl font-bold text-slate-900">{title}</h1>

                <div className="flex items-center gap-6">
                    <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-10 pr-4 py-2 w-64 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
                        <Bell size={20} />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                        <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-green-500/30">
                            {user?.name[0] || "U"}
                        </div>
                        <div className="hidden md:block">
                            <p className="text-sm font-semibold text-slate-900">{user?.name || "User"}</p>
                            <p className="text-xs text-slate-500 capitalize">{user?.role || "Member"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
