"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ArrowLeft, ShieldCheck, MapPin, Truck } from "lucide-react";
import { Input } from "@/app/components/ui/Input";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();

    const handleProceedToPayment = () => {
        router.push("/buyer/payment");
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
            <Link href="/buyer/cart" className="inline-flex items-center text-slate-500 hover:text-green-600 transition-colors font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Cart
            </Link>

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-extrabold text-slate-900">Finalize Order</h1>
                <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold border border-green-100">
                    <ShieldCheck size={14} />
                    Secured by Gonagri Escrow
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                    <Card padding="lg" title={<div className="flex items-center gap-2 text-slate-900 font-bold"><MapPin size={18} className="text-green-600" /> Delivery Information</div>}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input label="Receiver Full Name" placeholder="John Doe" />
                            <Input label="Contact Number" placeholder="+254 7XX XXX XXX" />
                            <div className="md:col-span-2">
                                <Input label="Delivery Address" placeholder="123 Agro Plaza, Suite 4" />
                            </div>
                            <Input label="Town/City" placeholder="Nairobi" />
                            <Input label="County/Region" placeholder="Nairobi" />
                        </div>
                    </Card>

                    <Card padding="lg" title={<div className="flex items-center gap-2 text-slate-900 font-bold"><Truck size={18} className="text-green-600" /> Shipping Preference</div>}>
                        <div className="space-y-4">
                            {[
                                { id: "standard", label: "Standard Delivery", time: "3-5 Business Days", price: "$50.00" },
                                { id: "express", label: "Express Shipping", time: "1-2 Business Days", price: "$120.00" }
                            ].map((option) => (
                                <label key={option.id} className="flex items-center justify-between p-4 border rounded-2xl cursor-pointer hover:border-green-500 hover:bg-green-50/30 transition-all border-slate-100">
                                    <div className="flex items-center gap-3">
                                        <input type="radio" name="shipping" defaultChecked={option.id === 'standard'} className="h-4 w-4 text-green-600 focus:ring-green-500" />
                                        <div>
                                            <p className="font-bold text-slate-900">{option.label}</p>
                                            <p className="text-xs text-slate-500">{option.time}</p>
                                        </div>
                                    </div>
                                    <span className="font-bold text-slate-900">{option.price}</span>
                                </label>
                            ))}
                        </div>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card padding="lg" className="sticky top-24">
                        <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Order Overview
                        </h3>
                        <div className="space-y-4 text-sm mb-6">
                            <div className="flex justify-between items-center pb-3 border-b border-dashed border-slate-200">
                                <div className="text-slate-500">
                                    <p className="font-bold text-slate-900">Maize & Grains</p>
                                    <p>50 Tons @ $450/ton</p>
                                </div>
                                <span className="font-bold text-slate-900">$22,500.00</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Logistic Fees</span>
                                <span className="font-bold text-slate-900">$50.00</span>
                            </div>
                            <div className="flex justify-between text-slate-600">
                                <span>Platform Surcharge</span>
                                <span className="font-bold text-slate-900">$450.00</span>
                            </div>
                        </div>
                        <div className="pt-4 border-t-2 border-slate-900 flex justify-between items-center mb-8">
                            <span className="font-black text-slate-900 uppercase tracking-tighter">Grand Total</span>
                            <span className="text-2xl font-black text-green-600">$23,000.00</span>
                        </div>

                        <Button fullWidth size="lg" className="shadow-lg shadow-green-500/20" onClick={handleProceedToPayment}>Proceed to Payment</Button>
                        <p className="text-center text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">Secure Bank Grade Encryption</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
