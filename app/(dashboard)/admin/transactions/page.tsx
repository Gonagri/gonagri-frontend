"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Search } from "lucide-react";

export default function AdminTransactionsPage() {
    const transactions = [
        { id: "TX-1002", type: "Escrow Deposit", amount: "$4,500.00", user: "WholeFoods Market", status: "Held", date: "2023-10-24" },
        { id: "TX-1001", type: "Payout", amount: "$1,200.00", user: "John Farmer", status: "Completed", date: "2023-10-23" },
        { id: "TX-1000", type: "Refund", amount: "$250.00", user: "Alice Buyer", status: "Completed", date: "2023-10-21" },
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">Transactions & Escrow</h2>

            <Card padding="none">
                <div className="p-4 border-b border-slate-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input type="text" placeholder="Search transaction ID..." className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-500" />
                    </div>
                </div>
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                        <tr>
                            <th className="p-4">Tx ID</th>
                            <th className="p-4">Type</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">User</th>
                            <th className="p-4">Date</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {transactions.map(tx => (
                            <tr key={tx.id} className="hover:bg-slate-50">
                                <td className="p-4 font-mono text-xs text-slate-500">{tx.id}</td>
                                <td className="p-4 font-medium">{tx.type}</td>
                                <td className="p-4 font-bold text-slate-900">{tx.amount}</td>
                                <td className="p-4">{tx.user}</td>
                                <td className="p-4">{tx.date}</td>
                                <td className="p-4"><Badge variant={tx.status === "Completed" ? "success" : "warning"}>{tx.status}</Badge></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
