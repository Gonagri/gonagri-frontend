"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Sliders, Save, Database, Shield, Globe, Bell } from "lucide-react";

export default function AdminConfig() {
    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Platform Configurations</h1>
                    <p className="text-slate-500">Manage global platform settings, fees, and feature toggles.</p>
                </div>
                <Button leftIcon={<Save size={18} />}>Save Changes</Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="Fee Management" padding="lg">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Platform Commission (%)</label>
                            <input type="number" defaultValue="5" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
                            <p className="text-xs text-slate-500">The percentage taken from each transaction.</p>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Escrow Fee ($)</label>
                            <input type="number" defaultValue="2" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
                            <p className="text-xs text-slate-500">Fixed fee for secure escrow processing.</p>
                        </div>
                    </div>
                </Card>

                <Card title="Feature Toggles" padding="lg">
                    <div className="space-y-4">
                        {[
                            { id: "msg", label: "Direct Messaging", desc: "Allow buyers and farmers to chat directly.", active: true },
                            { id: "cross", label: "Cross-Border Trade", desc: "Enable international logistics and payments.", active: false },
                            { id: "ins", label: "Crop Insurance", desc: "Show insurance offers on checkout.", active: true },
                            { id: "verify", label: "Mandatory Verification", desc: "Require identity verification before trading.", active: true }
                        ].map((feature) => (
                            <div key={feature.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                <div>
                                    <p className="text-sm font-semibold text-slate-800">{feature.label}</p>
                                    <p className="text-xs text-slate-500">{feature.desc}</p>
                                </div>
                                <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${feature.active ? 'bg-green-500' : 'bg-slate-300'}`}>
                                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${feature.active ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card title="System Settings" padding="lg">
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                            <Database className="text-primary-600" size={24} />
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-slate-900">Database Maintenance</p>
                                <p className="text-xs text-slate-500">Last cleanup: 2 days ago</p>
                            </div>
                            <Button size="sm" variant="outline">Run Now</Button>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                            <Globe className="text-primary-600" size={24} />
                            <div className="flex-grow">
                                <p className="text-sm font-bold text-slate-900">CDN Cache</p>
                                <p className="text-xs text-slate-500">Clear global image and asset cache</p>
                            </div>
                            <Button size="sm" variant="outline">Purge</Button>
                        </div>
                    </div>
                </Card>

                <Card title="Notifications & Alerts" padding="lg">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700">Admin Alert Email</label>
                            <input type="email" defaultValue="admin@gonagri.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-green-600 focus:ring-green-500 rounded" />
                            <label className="text-sm text-slate-700">Receive system error reports</label>
                        </div>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" defaultChecked className="h-4 w-4 text-green-600 focus:ring-green-500 rounded" />
                            <label className="text-sm text-slate-700">Daily transaction summaries</label>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
