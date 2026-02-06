"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { TrendingUp, Package, ShoppingCart, DollarSign, Plus } from "lucide-react";
import Link from "next/link";

export default function FarmerDashboard() {
    const stats = [
        { label: "Total Sales", value: "$12,450", icon: DollarSign, color: "bg-green-100 text-green-600" },
        { label: "Active Orders", value: "12", icon: ShoppingCart, color: "bg-blue-100 text-blue-600" },
        { label: "Total Products", value: "45", icon: Package, color: "bg-orange-100 text-orange-600" },
        { label: "Mthly Growth", value: "+24%", icon: TrendingUp, color: "bg-purple-100 text-purple-600" },
    ];

    const recentOrders = [
        { id: "#ORD-001", product: "Organic Maize", buyer: "WholeFoods Market", date: "Oct 24, 2023", amount: "$450.00", status: "pending" },
        { id: "#ORD-002", product: "Fresh Tomatoes", buyer: "City Grocers", date: "Oct 23, 2023", amount: "$120.00", status: "completed" },
        { id: "#ORD-003", product: "Sweet Potatoes", buyer: "John Doe", date: "Oct 22, 2023", amount: "$85.00", status: "processing" },
        { id: "#ORD-004", product: "Avocados", buyer: "Export Ltd", date: "Oct 21, 2023", amount: "$1,200.00", status: "completed" },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">Overview</h2>
                    <p className="text-slate-500">Welcome back, here's what's happening efficiently.</p>
                </div>
                <Link href="/farmer/products/new">
                    <Button leftIcon={<Plus size={18} />}>Add New Product</Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <Card key={stat.label} padding="md" hover>
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-xl ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                            <Badge variant="success">+2.5%</Badge>
                        </div>
                        <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</h3>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card padding="none" className="overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="font-bold text-slate-800">Recent Orders</h3>
                            <Button variant="ghost" size="sm">View All</Button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-600">
                                <thead className="bg-slate-50 text-slate-700 font-semibold">
                                    <tr>
                                        <th className="p-4 rounded-tl-lg">Order ID</th>
                                        <th className="p-4">Product</th>
                                        <th className="p-4">Buyer</th>
                                        <th className="p-4">Amount</th>
                                        <th className="p-4 rounded-tr-lg">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {recentOrders.map((order) => (
                                        <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                                            <td className="p-4 font-medium text-primary-600">{order.id}</td>
                                            <td className="p-4">{order.product}</td>
                                            <td className="p-4">{order.buyer}</td>
                                            <td className="p-4 font-bold text-slate-800">{order.amount}</td>
                                            <td className="p-4">
                                                <Badge variant={
                                                    order.status === 'completed' ? 'success' :
                                                        order.status === 'pending' ? 'warning' : 'info'
                                                }>
                                                    {order.status}
                                                </Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card padding="md">
                        <h3 className="font-bold text-slate-800 mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <Button fullWidth variant="outline" className="justify-start">Verify Identification</Button>
                            <Button fullWidth variant="outline" className="justify-start">Withdraw Funds</Button>
                            <Button fullWidth variant="outline" className="justify-start">Contact Support</Button>
                        </div>
                    </Card>

                    <Card padding="md" className="bg-gradient-to-br from-primary-600 to-primary-800 text-white border-none shadow-xl">
                        <h3 className="font-bold text-lg mb-2">Pro Plan</h3>
                        <p className="text-primary-100 text-sm mb-4">Upgrade to get lower fees and premium support.</p>
                        <Button size="sm" variant="white" fullWidth className="text-primary-700">Upgrade Now</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
