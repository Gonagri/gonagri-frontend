"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Gavel, MessageSquare, Scale, CheckCircle2, AlertCircle } from "lucide-react";

export default function AdminDisputes() {
    const disputes = [
        { id: "D-882", order: "#ORD-991", buyer: "Alice Smith", farmer: "Bob's Farm", reason: "Quality mismatch", status: "Active", amount: "$450" },
        { id: "D-891", order: "#ORD-1022", buyer: "Kevin M.", farmer: "Green Valley", reason: "Late delivery", status: "Pending Response", amount: "$1,200" },
        { id: "D-875", order: "#ORD-850", buyer: "Market Co.", farmer: "Organic Hut", reason: "Damaged goods", status: "Resolved", amount: "$300" },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Escrow Dispute Resolution</h1>
                <p className="text-slate-500">Mediate and resolve conflicts between buyers and farmers.</p>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {disputes.map((dispute) => (
                    <Card key={dispute.id} padding="lg">
                        <div className="flex flex-col lg:flex-row justify-between gap-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${dispute.status === 'Resolved' ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                                        <Scale size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900">Dispute {dispute.id}</h3>
                                        <p className="text-sm text-slate-500">Linked to Order {dispute.order}</p>
                                    </div>
                                    <Badge variant={dispute.status === 'Resolved' ? 'primary' : 'secondary'}>{dispute.status}</Badge>
                                </div>
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                                    <div>
                                        <p className="text-slate-500">Buyer</p>
                                        <p className="font-semibold text-slate-900">{dispute.buyer}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500">Farmer</p>
                                        <p className="font-semibold text-slate-900">{dispute.farmer}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500">Claim Amount</p>
                                        <p className="font-bold text-green-600">{dispute.amount}</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-500">Reason</p>
                                        <p className="font-semibold text-slate-900">{dispute.reason}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex lg:flex-col justify-center gap-3">
                                {dispute.status !== 'Resolved' ? (
                                    <>
                                        <Button size="sm" leftIcon={<MessageSquare size={14} />}>Open Mediator Chat</Button>
                                        <Button size="sm" variant="outline" className="text-green-600 hover:bg-green-50" leftIcon={<CheckCircle2 size={14} />}>Refund Buyer</Button>
                                        <Button size="sm" variant="outline" className="text-amber-600 hover:bg-amber-50" leftIcon={<AlertCircle size={14} />}>Pay Farmer</Button>
                                    </>
                                ) : (
                                    <Button size="sm" variant="ghost" className="text-slate-400" disabled>Already Resolved</Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
