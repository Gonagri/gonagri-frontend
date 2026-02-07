"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Button } from "@/app/components/ui/Button";

export default function BuyerOrdersPage() {
    const orders = [
        { id: "ORD-9921", date: "Oct 25, 2023", items: "Premium Maize (2 Tons)", total: "$900.00", status: "Processing" },
        { id: "ORD-8920", date: "Oct 12, 2023", items: "Tomatoes (20 Crates)", total: "$240.00", status: "Delivered" },
        { id: "ORD-8819", date: "Sep 30, 2023", items: "Potatoes (50 Bags)", total: "$1,200.00", status: "Delivered" },
    ];

    return (
        <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">My Orders</h2>

            <div className="space-y-4">
                {orders.map(order => (
                    <Card key={order.id} padding="md">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div>
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-bold text-slate-900">{order.id}</h3>
                                    <span className="text-xs text-slate-500">{order.date}</span>
                                </div>
                                <p className="text-slate-700">{order.items}</p>
                            </div>
                            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                                <span className="font-bold text-slate-900">{order.total}</span>
                                <Badge variant={order.status === "Delivered" ? "success" : "warning"}>{order.status}</Badge>
                                <Button variant="outline" size="sm">Details</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
