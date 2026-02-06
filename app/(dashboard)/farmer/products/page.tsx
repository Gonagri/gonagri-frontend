"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Search, Filter, MoreVertical, Plus } from "lucide-react";
import Image from "next/image";

export default function FarmerProductsPage() {
    const products = [
        { id: 1, name: "Organic Maize", category: "Grains", price: "$450 / ton", stock: "50 tons", status: "Active", image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&q=80&w=200" },
        { id: 2, name: "Red Tomatoes", category: "Vegetables", price: "$12 / crate", stock: "120 crates", status: "Low Stock", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=200" },
        { id: 3, name: "Yellow Beans", category: "Pulses", price: "$900 / ton", stock: "10 tons", status: "Draft", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&q=80&w=200" },
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">My Products</h2>
                    <p className="text-slate-500">Manage your product listings and inventory.</p>
                </div>
                <Button leftIcon={<Plus size={18} />}>Add Product</Button>
            </div>

            <Card padding="sm" className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 w-full focus:outline-none"
                    />
                </div>
                <Button variant="outline" leftIcon={<Filter size={16} />}>Filters</Button>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <Card key={product.id} padding="none" hover className="overflow-hidden group">
                        <div className="relative h-48 bg-slate-200">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2">
                                <Badge variant={product.status === "Active" ? "success" : product.status === "Low Stock" ? "warning" : "neutral"} className="shadow-sm bg-white/90 backdrop-blur-sm">
                                    {product.status}
                                </Badge>
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <p className="text-xs text-primary-600 font-bold uppercase tracking-wide">{product.category}</p>
                                    <h3 className="font-bold text-lg text-slate-900">{product.name}</h3>
                                </div>
                                <button className="text-slate-400 hover:text-slate-600">
                                    <MoreVertical size={20} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                                <div>
                                    <p className="text-xs text-slate-500">Price</p>
                                    <p className="font-semibold text-slate-900">{product.price}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 text-right">Stock</p>
                                    <p className="font-semibold text-slate-900 text-right">{product.stock}</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
