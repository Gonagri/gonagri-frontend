"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { CreditCard, Wallet, ShieldCheck, Lock, CheckCircle2, ChevronRight, AlertCircle } from "lucide-react";

export default function BuyerPayment() {
    const [method, setMethod] = useState<"card" | "mobile" | "wallet">("card");
    const [step, setStep] = useState<"pay" | "success">("pay");

    if (step === "success") {
        return (
            <div className="max-w-2xl mx-auto py-16 text-center animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                    <CheckCircle2 size={48} />
                </div>
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Payment Successful!</h1>
                <p className="text-xl text-slate-600 mb-10">Your funds have been securely placed in escrow. The farmer has been notified to begin delivery.</p>
                <div className="bg-slate-50 rounded-2xl p-6 mb-10 text-left border border-slate-100">
                    <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-200">
                        <span className="text-slate-500">Transaction ID</span>
                        <span className="font-mono font-bold text-slate-900">#TRX-99812-GN</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-slate-500">Escrow Status</span>
                        <Badge variant="success">Secured</Badge>
                    </div>
                </div>
                <div className="flex gap-4 justify-center">
                    <Button variant="outline">Track Order</Button>
                    <Button>Back to Marketplace</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="text-center">
                <h1 className="text-3xl font-extrabold text-slate-900">Secure Checkout</h1>
                <p className="text-slate-500 mt-2">Finish your purchase using our protected escrow system.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <Card title="Payment Method" padding="lg">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { id: "card", label: "Credit Card", icon: CreditCard },
                                { id: "mobile", label: "Mobile Money", icon: Wallet },
                                { id: "wallet", label: "Gonagri Wallet", icon: ShieldCheck }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setMethod(item.id as any)}
                                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${method === item.id ? 'border-green-600 bg-green-50' : 'border-slate-100 bg-slate-50 hover:border-slate-200'}`}
                                >
                                    <item.icon className={method === item.id ? 'text-green-600' : 'text-slate-400'} size={24} />
                                    <p className={`mt-2 font-bold ${method === item.id ? 'text-green-900' : 'text-slate-600'}`}>{item.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 space-y-6">
                            {method === "card" && (
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Cardholder Name</label>
                                        <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Card Number</label>
                                        <div className="relative">
                                            <input type="text" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="0000 0000 0000 0000" />
                                            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Expiry Date</label>
                                            <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="MM/YY" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">CVV</label>
                                            <div className="relative">
                                                <input type="password" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="***" />
                                                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {method === "mobile" && (
                                <div className="space-y-4">
                                    <div className="p-4 bg-amber-50 rounded-2xl flex gap-3 text-amber-700 border border-amber-100">
                                        <AlertCircle size={20} className="flex-shrink-0" />
                                        <p className="text-sm leading-relaxed">Ensure you have your phone nearby to complete the prompt.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                                        <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="+254 7XX XXX XXX" />
                                    </div>
                                </div>
                            )}

                            {method === "wallet" && (
                                <div className="p-8 bg-green-900 rounded-3xl text-white relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="opacity-70 text-sm">Available Balance</p>
                                        <h2 className="text-4xl font-extrabold mt-1">$4,850.50</h2>
                                        <div className="mt-8 flex justify-between items-center">
                                            <p className="font-mono text-sm opacity-60">Gonagri Secured ID: GA-88219</p>
                                            <Badge variant="success" className="bg-white/20 border-white/20 text-white">Active</Badge>
                                        </div>
                                    </div>
                                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card padding="md" className="bg-slate-900 text-white border-none">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-green-500 rounded-2xl">
                                <ShieldCheck size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Gonagri Escrow Protection</h3>
                                <p className="text-slate-400 text-sm">Your money is only released after you confirm delivery and quality.</p>
                            </div>
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card title="Order Summary" padding="lg">
                        <div className="space-y-4">
                            <div className="flex justify-between text-slate-600">
                                <span>Subtotal</span>
                                <span className="font-bold text-slate-900">$22,500.00</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Platform Fee (2%)</span>
                                <span className="font-bold text-slate-900">$450.00</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Escrow Service</span>
                                <span className="text-green-600 font-bold">FREE</span>
                            </div>
                            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                                <span className="font-bold text-slate-900">Total to Pay</span>
                                <span className="text-3xl font-black text-green-600">$22,950.00</span>
                            </div>
                        </div>
                        <Button fullWidth size="lg" className="mt-8 shadow-xl shadow-green-500/30" onClick={() => setStep("success")}>Pay Now & Secure Funds</Button>
                        <p className="text-center text-xs text-slate-400 mt-4">By paying, you agree to our Terms of Sale and Escrow Agreement.</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
