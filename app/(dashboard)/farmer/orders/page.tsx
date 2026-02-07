"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";
import { Search, Eye } from "lucide-react";

export default function FarmerOrdersPage() {
    const orders = [
        { id: "ORD-7721", product: "Organic Maize", buyer: "WholeFoods Market", date: "2023-10-24", quantity: "10 Tons", total: "$4,500", status: "Pending" },
        { id: "ORD-7720", product: "Red Tomatoes", buyer: "City Grocers", date: "2023-10-23", quantity: "50 Crates", total: "$600", status: "Completed" },
        { id: "ORD-7719", product: "Avocados", buyer: "Export Ltd", date: "2023-10-21", quantity: "2 Tons", total: "$2,400", status: "Processing" },
        { id: "ORD-7718", product: "Organic Maize", buyer: "Local Millers", date: "2023-10-20", quantity: "5 Tons", total: "$2,250", status: "Cancelled" },
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">Orders Management</h2>

            <Card padding="none">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search by Order ID or Buyer..."
                            className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        {["All", "Pending", "Processing", "Completed"].map(status => (
                            <button key={status} className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 border border-transparent hover:border-slate-200">{status}</button>
                        ))}
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="p-4">Order ID</th>
                                <th className="p-4">Product</th>
                                <th className="p-4">Buyer</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Quantity</th>
                                <th className="p-4">Total</th>
                                <th className="p-4">Status</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {orders.map(order => (
                                <tr key={order.id} className="hover:bg-slate-50">
                                    <td className="p-4 font-bold text-primary-700">{order.id}</td>
                                    <td className="p-4">{order.product}</td>
                                    <td className="p-4">{order.buyer}</td>
                                    <td className="p-4">{order.date}</td>
                                    <td className="p-4">{order.quantity}</td>
                                    <td className="p-4 font-bold text-slate-900">{order.total}</td>
                                    <td className="p-4">
                                        <Badge variant={
                                            order.status === "Completed" ? "success" :
                                                order.status === "Pending" ? "warning" :
                                                    order.status === "Cancelled" ? "danger" : "info"
                                        }>
                                            {order.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4 text-right">
                                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0"><Eye size={16} /></Button>
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
