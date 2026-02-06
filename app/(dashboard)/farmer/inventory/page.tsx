"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { ClipboardList, Plus, Search, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function FarmerInventory() {
    const inventory = [
        { id: "INV-001", name: "Premium Maize", stock: "45 tons", warehouse: "Store A", status: "In Stock", trend: "up" },
        { id: "INV-002", name: "Yellow Beans", stock: "12 tons", warehouse: "Store B", status: "Low Stock", trend: "down" },
        { id: "INV-003", name: "Red Tomatoes", stock: "150 crates", warehouse: "Cold Storage", status: "In Stock", trend: "stable" },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Inventory Management</h1>
                    <p className="text-slate-500">Track your grain and produce stocks across all warehouses.</p>
                </div>
                <Button leftIcon={<Plus size={18} />}>Stock Entry</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card padding="md" className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-none">
                    <p className="text-white/80 text-sm font-medium">Total Managed Stock</p>
                    <h2 className="text-3xl font-bold mt-1">1,240 Tons</h2>
                    <div className="flex items-center gap-1 text-white/90 text-xs mt-4">
                        <ArrowUpRight size={14} /> +12% from last month
                    </div>
                </Card>
                <Card padding="md">
                    <p className="text-slate-500 text-sm font-medium">Active Warehouses</p>
                    <h2 className="text-3xl font-bold text-slate-900 mt-1">4 Locations</h2>
                    <p className="text-green-600 text-xs mt-4 font-semibold">All systems operational</p>
                </Card>
                <Card padding="md">
                    <p className="text-slate-500 text-sm font-medium">Low Stock Alerts</p>
                    <h2 className="text-3xl font-bold text-slate-900 mt-1">2 Items</h2>
                    <p className="text-amber-600 text-xs mt-4 font-semibold">Needs attention soon</p>
                </Card>
            </div>

            <Card padding="none">
                <div className="p-4 border-b border-slate-100 flex flex-col md:flex-row gap-4 justify-between">
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input type="text" placeholder="Search inventory..." className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" />
                    </div>
                    <Button variant="outline" leftIcon={<Filter size={18} />}>Filter</Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-bold tracking-wider">
                                <th className="px-6 py-4">Item ID</th>
                                <th className="px-6 py-4">Produce Name</th>
                                <th className="px-6 py-4">Current Stock</th>
                                <th className="px-6 py-4">Warehouse</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {inventory.map((item) => (
                                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 text-sm font-mono text-slate-500">{item.id}</td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.name}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{item.stock}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{item.warehouse}</td>
                                    <td className="px-6 py-4">
                                        <Badge variant={item.status === 'Low Stock' ? 'warning' : 'success'}>{item.status}</Badge>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-green-600 font-semibold text-sm hover:underline">Update</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
