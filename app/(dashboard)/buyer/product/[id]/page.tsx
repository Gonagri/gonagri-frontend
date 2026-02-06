"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/app/components/ui/Button";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { Star, MapPin, ShieldCheck, Truck, ShoppingCart, Minus, Plus, MessageCircle } from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";

export default function ProductDetailsPage() {
    const params = useParams();
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        router.push("/buyer/cart");
    };

    const product = {
        id: params.id,
        name: "Premium Organic Maize - High Quality Yield",
        price: 450,
        unit: "ton",
        description: "Our maize is grown using sustainable organic farming practices in the fertile lands of Nakuru. It is dried to perfection with moisture content below 13%, making it ideal for milling and long-term storage. Suitable for commercial buyers and processors.",
        farmer: {
            name: "Green Valley Farms",
            location: "Nakuru, Kenya",
            rating: 4.8,
            reviews: 124,
            verified: true
        },
        images: ["https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=800"],
        specifications: [
            { label: "Variety", value: "H614" },
            { label: "Moisture", value: "< 13%" },
            { label: "Grade", value: "1" },
            { label: "Harvest Date", value: "Oct 2023" },
        ]
    };

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-4">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="relative h-24 rounded-lg overflow-hidden bg-slate-50 cursor-pointer border-2 hover:border-green-500 transition-colors">
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <Badge variant="success" className="mb-2">Grains</Badge>
                        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{product.name}</h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span className="flex items-center"><Star size={16} className="text-yellow-500 mr-1" fill="currentColor" /> 4.8 (24 Reviews)</span>
                            <span className="flex items-center"><MapPin size={16} className="mr-1" /> {product.farmer.location}</span>
                        </div>
                    </div>

                    <div className="flex items-end gap-2 border-b border-slate-100 pb-6">
                        <span className="text-4xl font-extrabold text-green-600">${product.price}</span>
                        <span className="text-slate-500 mb-1">/ {product.unit}</span>
                    </div>

                    <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed font-medium">{product.description}</p>

                        <div className="grid grid-cols-2 gap-4">
                            {product.specifications.map(spec => (
                                <div key={spec.label} className="flex justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <span className="text-slate-500 text-sm font-medium">{spec.label}</span>
                                    <span className="font-bold text-slate-900 text-sm">{spec.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Card padding="md" className="bg-green-50/30 border-green-100">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">G</div>
                                <div>
                                    <p className="font-bold text-slate-900">{product.farmer.name}</p>
                                    <div className="flex items-center text-xs text-green-600 font-bold uppercase tracking-wider">
                                        <ShieldCheck size={14} className="mr-1" /> Trusted Farmer
                                    </div>
                                </div>
                            </div>
                            <Button size="sm" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50" leftIcon={<MessageCircle size={16} />}>Negotiate</Button>
                        </div>
                    </Card>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <div className="flex items-center border border-slate-300 rounded-2xl overflow-hidden bg-slate-50">
                            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 hover:bg-slate-200 transition-colors font-bold text-slate-600"><Minus size={18} /></button>
                            <span className="px-6 font-black min-w-[3rem] text-center text-slate-900">{quantity}</span>
                            <button onClick={() => setQuantity(quantity + 1)} className="p-4 hover:bg-slate-200 transition-colors font-bold text-slate-600"><Plus size={18} /></button>
                        </div>
                        <Button size="lg" className="flex-grow shadow-xl shadow-green-600/20" leftIcon={<ShoppingCart size={20} />} onClick={handleAddToCart}>
                            Add to Cart - ${(product.price * quantity).toLocaleString()}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
