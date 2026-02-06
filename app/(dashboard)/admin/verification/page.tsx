"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { ShieldCheck, UserCheck, XCircle, ExternalLink, Calendar } from "lucide-react";

export default function AdminVerification() {
    const verificationQueue = [
        { id: "V101", name: "Samuel Omondi", type: "Farmer", location: "Nakuru", date: "2024-05-18", status: "Pending" },
        { id: "V102", name: "AgriCorp Ltd", type: "Buyer", location: "Nairobi", date: "2024-05-19", status: "In Review" },
        { id: "V103", name: "Mercy Wanjiku", type: "Farmer", location: "Kiambu", date: "2024-05-20", status: "Pending" },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">User Verification Queue</h1>
                <p className="text-slate-500">Review and approve identity verifications for farmers and buyers.</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {verificationQueue.map((item) => (
                    <Card key={item.id} padding="none" className="overflow-hidden">
                        <div className="p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-slate-900">{item.name}</h3>
                                        <Badge variant={item.type === 'Farmer' ? 'primary' : 'secondary'}>{item.type}</Badge>
                                    </div>
                                    <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                        <span className="flex items-center gap-1"><Calendar size={14} /> {item.date}</span>
                                        <span>• {item.location}</span>
                                        <span>• ID: {item.id}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Badge variant="outline">{item.status}</Badge>
                                <Button variant="outline" size="sm" leftIcon={<ExternalLink size={14} />}>View Docs</Button>
                                <Button size="sm" className="bg-green-600 hover:bg-green-700" leftIcon={<UserCheck size={14} />}>Approve</Button>
                                <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50" leftIcon={<XCircle size={14} />}>Reject</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
