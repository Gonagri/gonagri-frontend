"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Trash2, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_IMAGES } from "@/app/libs/constants";

export default function CartPage() {
    const cartItems = [
        { id: 1, name: "Premium Organic Maize", price: 450, quantity: 2, unit: "ton", image: PRODUCT_IMAGES.maize },
        { id: 2, name: "Red Tomatoes", price: 12, quantity: 10, unit: "crate", image: PRODUCT_IMAGES.tomatoes },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const fee = subtotal * 0.02;
    const total = subtotal + fee;

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-fadeIn">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-2xl">
                    <ShoppingBag size={28} />
                </div>
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900">Your Marketplace Cart</h1>
                    <p className="text-slate-500">Review your selected produce before securing the trade.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                    {cartItems.length > 0 ? (
                        cartItems.map(item => (
                            <Card key={item.id} padding="none" className="flex flex-col sm:flex-row gap-6 items-center overflow-hidden hover:border-green-200 transition-colors">
                                <div className="relative w-full sm:w-40 h-40 bg-slate-100 flex-shrink-0">
                                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                                </div>
                                <div className="flex-grow p-6 sm:pl-0">
                                    <h3 className="text-xl font-extrabold text-slate-900 mb-1">{item.name}</h3>
                                    <p className="text-green-600 font-bold mb-4">${item.price} <span className="text-slate-400 font-medium text-sm">/ {item.unit}</span></p>

                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl overflow-hidden">
                                            <button className="px-4 py-2 hover:bg-slate-200 transition-colors font-bold text-slate-600">-</button>
                                            <span className="px-4 font-black text-slate-900">{item.quantity}</span>
                                            <button className="px-4 py-2 hover:bg-slate-200 transition-colors font-bold text-slate-600">+</button>
                                        </div>
                                        <button className="flex items-center gap-2 text-red-500 hover:text-red-700 font-bold text-sm transition-colors">
                                            <Trash2 size={16} /> Remove
                                        </button>
                                    </div>
                                </div>
                                <div className="p-6 text-right">
                                    <p className="text-xs text-slate-400 font-bold uppercase mb-1">Item Total</p>
                                    <p className="text-2xl font-black text-slate-900">${(item.price * item.quantity).toLocaleString()}</p>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <Card className="py-20 text-center">
                            <ShoppingBag className="mx-auto text-slate-200 mb-4" size={64} />
                            <p className="text-xl text-slate-500 font-bold">Your cart is currently empty</p>
                            <Link href="/buyer">
                                <Button className="mt-6">Browse Marketplace</Button>
                            </Link>
                        </Card>
                    )}
                </div>

                <div className="space-y-6">
                    <Card padding="lg" className="bg-slate-900 text-white border-none shadow-2xl">
                        <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                            Summary <ShieldCheck className="text-green-500" />
                        </h3>
                        <div className="space-y-4 mb-8 border-b border-white/10 pb-8 text-slate-300">
                            <div className="flex justify-between">
                                <span className="font-medium">Selected Items</span>
                                <span className="font-bold text-white">${subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Escrow Fee (2%)</span>
                                <span className="font-bold text-white">${fee.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-medium">Estimated Logistics</span>
                                <span className="text-green-400 font-bold">Calculated at Checkout</span>
                            </div>
                        </div>
                        <div className="flex justify-between text-2xl font-black text-white mb-10">
                            <span>TOTAL</span>
                            <span className="text-green-500">${total.toLocaleString()}</span>
                        </div>
                        <Link href="/buyer/checkout">
                            <Button fullWidth size="lg" className="bg-green-600 hover:bg-green-700 shadow-xl shadow-green-500/20" rightIcon={<ArrowRight size={18} />}>Secure Checkout</Button>
                        </Link>
                        <p className="text-[10px] text-center text-white/40 mt-6 uppercase font-black tracking-widest">
                            Verified Trade Security
                        </p>
                    </Card>
                </div>
            </div>
        </div>
    );
}
