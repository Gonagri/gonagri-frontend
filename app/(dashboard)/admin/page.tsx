"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Users, DollarSign, Activity, AlertCircle } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div className="space-y-8 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">Platform Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Users", value: "12,403", icon: Users, color: "text-blue-600 bg-blue-100" },
                    { label: "Total Revenue", value: "$1.2M", icon: DollarSign, color: "text-green-600 bg-green-100" },
                    { label: "Active Sessions", value: "892", icon: Activity, color: "text-purple-600 bg-purple-100" },
                    { label: "Pending Issues", value: "24", icon: AlertCircle, color: "text-red-600 bg-red-100" },
                ].map((stat) => (
                    <Card key={stat.label} padding="md">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.color}`}>
                                <stat.icon size={20} />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card padding="md">
                    <h3 className="font-bold text-slate-800 mb-4">Pending Verifications</h3>
                    <div className="space-y-4">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                                    <div>
                                        <p className="font-bold text-sm">Farmhouse Ltd</p>
                                        <p className="text-xs text-slate-500">Submitted 2h ago</p>
                                    </div>
                                </div>
                                <Badge variant="warning">Pending</Badge>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card padding="md">
                    <h3 className="font-bold text-slate-800 mb-4">Recent System Logs</h3>
                    <div className="text-sm text-slate-600 space-y-2">
                        <p>10:04 AM - User #4421 verified email</p>
                        <p>09:55 AM - Transaction #TX-9922 failed (insufficient funds)</p>
                        <p>09:42 AM - New product &quot;Hybrid Maize&quot; listed</p>
                    </div>
                </Card>
            </div>
        </div>
    );
}
