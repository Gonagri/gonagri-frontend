"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { DollarSign, ArrowUpRight, ArrowDownLeft, Wallet } from "lucide-react";

export default function WalletPage() {
    const transactions = [
        { id: "TX-9923", type: "Deposit", amount: "+$4,500.00", date: "Oct 24, 2023", status: "Success", from: "Escrow Release #ORD-7720" },
        { id: "TX-9922", type: "Withdrawal", amount: "-$1,000.00", date: "Oct 20, 2023", status: "Processing", from: "Bank Transfer" },
        { id: "TX-9921", type: "Deposit", amount: "+$2,400.00", date: "Oct 18, 2023", status: "Success", from: "Escrow Release #ORD-7719" },
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">My Wallet</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card padding="lg" className="bg-slate-900 text-white md:col-span-2">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-slate-400 text-sm font-medium mb-1">Total Balance</p>
                            <h3 className="text-4xl font-bold">$14,250.00</h3>
                        </div>
                        <div className="p-3 bg-slate-800 rounded-xl">
                            <Wallet size={24} className="text-primary-400" />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <Button className="flex-1 bg-primary-600 hover:bg-primary-500 border-none text-white">Withdraw Funds</Button>
                        <Button variant="outline" className="flex-1 border-slate-600 text-white hover:bg-slate-800 hover:text-white">Transaction History</Button>
                    </div>
                </Card>

                <Card padding="lg">
                    <h4 className="font-bold text-slate-800 mb-4">Pending Clearance</h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                                    <DollarSign size={16} />
                                </div>
                                <span className="text-sm font-medium">Order #ORD-7721</span>
                            </div>
                            <span className="font-bold text-slate-800">$4,500</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                                    <DollarSign size={16} />
                                </div>
                                <span className="text-sm font-medium">Order #ORD-7722</span>
                            </div>
                            <span className="font-bold text-slate-800">$1,200</span>
                        </div>
                    </div>
                </Card>
            </div>

            <Card padding="md">
                <h3 className="font-bold text-slate-800 mb-4">Recent Transactions</h3>
                <div className="space-y-4">
                    {transactions.map(tx => (
                        <div key={tx.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors rounded-lg">
                            <div className="flex items-center gap-4 mb-2 sm:mb-0">
                                <div className={`p-2 rounded-full ${tx.type === "Deposit" ? "bg-green-100 text-green-600" : "bg-slate-100 text-slate-600"}`}>
                                    {tx.type === "Deposit" ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">{tx.from}</p>
                                    <p className="text-xs text-slate-500">{tx.date} • {tx.id}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`font-bold ${tx.type === "Deposit" ? "text-green-600" : "text-slate-900"}`}>{tx.amount}</p>
                                <p className="text-xs text-slate-500">{tx.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}
