"use client";
import React, { useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Search, Filter, ShoppingCart, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCT_IMAGES, PRODUCT_CATEGORIES } from "@/app/libs/constants";

export default function BuyerMarketplace() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = PRODUCT_CATEGORIES;

    const products = [
        { id: 1, name: "Premium Maize", category: "Grains", price: 450, unit: "ton", location: "Nakuru, KE", rating: 4.8, image: PRODUCT_IMAGES.maize },
        { id: 2, name: "Red Tomatoes", category: "Vegetables", price: 12, unit: "crate", location: "Kiambu, KE", rating: 4.5, image: PRODUCT_IMAGES.tomatoes },
        { id: 3, name: "Yellow Beans", category: "Legumes", price: 900, unit: "ton", location: "Eldoret, KE", rating: 4.9, image: PRODUCT_IMAGES.beans },
        { id: 4, name: "Bananas", category: "Fruits", price: 250, unit: "bunch", location: "Kisii, KE", rating: 4.2, image: PRODUCT_IMAGES.bananas },
        { id: 5, name: "Potatoes", category: "Tubers", price: 300, unit: "bag", location: "Meru, KE", rating: 4.7, image: PRODUCT_IMAGES.potatoes },
        { id: 6, name: "Onions", category: "Vegetables", price: 50, unit: "net", location: "Nyeri, KE", rating: 4.6, image: PRODUCT_IMAGES.onions },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-center text-white shadow-xl shadow-green-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                    <h1 className="text-3xl sm:text-4xl font-bold">Find the best produce, direct from farmers</h1>
                    <div className="flex p-2 bg-white rounded-2xl shadow-lg">
                        <div className="flex-grow flex items-center px-4">
                            <Search className="text-slate-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Search for maize, beans, potatoes..."
                                className="w-full outline-none text-slate-800 placeholder:text-slate-400"
                            />
                        </div>
                        <Button>Search</Button>
                    </div>
                </div>
            </div>

            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all ${selectedCategory === cat
                            ? "bg-primary-600 text-white shadow-md shadow-primary-500/30"
                            : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <Link href={`/buyer/product/${product.id}`} key={product.id}>
                        <Card padding="none" hover className="overflow-hidden h-full flex flex-col group">
                            <div className="relative h-48 bg-slate-100 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-slate-800 flex items-center shadow-sm">
                                    <Star size={12} className="text-yellow-500 mr-1" fill="currentColor" /> {product.rating}
                                </div>
                            </div>
                            <div className="p-4 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <p className="text-xs text-primary-600 font-semibold uppercase">{product.category}</p>
                                        <h3 className="font-bold text-slate-900 line-clamp-1">{product.name}</h3>
                                    </div>
                                </div>

                                <div className="flex items-center text-xs text-slate-500 mb-4">
                                    <MapPin size={12} className="mr-1" /> {product.location}
                                </div>

                                <div className="mt-auto flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-slate-900">${product.price}</span>
                                        <span className="text-xs text-slate-500"> / {product.unit}</span>
                                    </div>
                                    <Button size="sm" variant="outline" className="p-2 h-auto rounded-lg hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200">
                                        <ShoppingCart size={18} />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
