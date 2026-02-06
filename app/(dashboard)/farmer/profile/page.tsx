"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { CheckCircle, MapPin, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/app/components/ui/Button";

export default function ProfilePage() {
    const user = {
        name: "John Farmer",
        role: "Farmer",
        organization: "Green Valley Farms Ltd.",
        email: "john@greenvalley.com",
        phone: "+254 712 345 678",
        location: "Nakuru, Kenya",
        joined: "September 2023",
        verified: true,
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">My Profile</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card padding="lg" className="md:col-span-1 flex flex-col items-center text-center">
                    <div className="w-32 h-32 bg-primary-100 rounded-full flex items-center justify-center text-4xl font-bold text-primary-700 mb-4 border-4 border-white shadow-lg">
                        {user.name[0]}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{user.name}</h3>
                    <p className="text-slate-500 mb-2">{user.organization}</p>
                    {user.verified && (
                        <Badge variant="success" className="mb-6"><CheckCircle size={14} className="mr-1" /> Verified Account</Badge>
                    )}
                    <Button variant="outline" fullWidth size="sm">Edit Profile</Button>
                </Card>

                <Card padding="lg" className="md:col-span-2">
                    <h4 className="font-bold text-slate-800 mb-6 border-b border-slate-100 pb-2">Contact Information</h4>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500"><Mail size={20} /></div>
                            <div>
                                <p className="text-xs text-slate-500">Email Address</p>
                                <p className="font-medium text-slate-900">{user.email}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500"><Phone size={20} /></div>
                            <div>
                                <p className="text-xs text-slate-500">Phone Number</p>
                                <p className="font-medium text-slate-900">{user.phone}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500"><MapPin size={20} /></div>
                            <div>
                                <p className="text-xs text-slate-500">Location</p>
                                <p className="font-medium text-slate-900">{user.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-slate-500"><Calendar size={20} /></div>
                            <div>
                                <p className="text-xs text-slate-500">Member Since</p>
                                <p className="font-medium text-slate-900">{user.joined}</p>
                            </div>
                        </div>
                    </div>

                    <h4 className="font-bold text-slate-800 mt-8 mb-6 border-b border-slate-100 pb-2">Verification Documents</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="border border-slate-200 rounded-lg p-3 flex items-center justify-between bg-slate-50">
                            <span className="text-sm font-medium">National ID</span>
                            <Badge variant="success">Approved</Badge>
                        </div>
                        <div className="border border-slate-200 rounded-lg p-3 flex items-center justify-between bg-slate-50">
                            <span className="text-sm font-medium">Business Permit</span>
                            <Badge variant="success">Approved</Badge>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
