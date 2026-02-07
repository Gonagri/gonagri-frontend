"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { BarChart3, TrendingUp, DollarSign, ShoppingBag, Users, Globe } from "lucide-react";

export default function FarmerAnalytics() {
    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Sales & Revenue Analytics</h1>
                <p className="text-slate-500">Visual insights into your farm's performance and market demand.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Revenue", value: "$45,280", icon: DollarSign, color: "bg-green-100 text-green-600", trend: "+15%" },
                    { label: "Active Orders", value: "24", icon: ShoppingBag, color: "bg-blue-100 text-blue-600", trend: "+8%" },
                    { label: "Total Buyers", value: "156", icon: Users, color: "bg-purple-100 text-purple-600", trend: "+12%" },
                    { label: "Market Reach", value: "12 Areas", icon: Globe, color: "bg-amber-100 text-amber-600", trend: "+5%" },
                ].map((stat, i) => (
                    <Card key={i} padding="md">
                        <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-2xl ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <span className="text-green-600 text-xs font-bold leading-none">{stat.trend}</span>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                            <h2 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h2>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2" title="Revenue Growth" padding="lg">
                    <div className="h-64 flex items-end justify-between gap-2 px-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                            <div key={i} className="w-full bg-green-500/10 rounded-t-lg relative group transition-all hover:bg-green-500/20" style={{ height: `${h}%` }}>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    ${h * 100}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium font-mono uppercase">
                        <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
                    </div>
                </Card>

                <Card title="Top Selling Categories" padding="lg">
                    <div className="space-y-6">
                        {[
                            { label: "Maize & Grains", value: 65, color: "bg-green-500" },
                            { label: "Vegetables", value: 20, color: "bg-amber-500" },
                            { label: "Fruits", value: 10, color: "bg-blue-500" },
                            { label: "Other", value: 5, color: "bg-slate-300" }
                        ].map((cat, i) => (
                            <div key={i} className="space-y-2">
                                <div className="flex justify-between text-sm font-medium">
                                    <span className="text-slate-700">{cat.label}</span>
                                    <span className="text-slate-500">{cat.value}%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <div className={`h-full ${cat.color} transition-all duration-1000`} style={{ width: `${cat.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    );
}
