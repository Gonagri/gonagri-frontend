"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/app/components/ui/Button";
import { Input } from "@/app/components/ui/Input";
import { Card } from "@/app/components/ui/Card";
import { Upload, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        router.push("/farmer/products");
    };

    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">Add New Product</h2>
                <Button variant="outline" onClick={() => router.back()}>Cancel</Button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <Card padding="lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Basic Information</h3>
                    <div className="space-y-4">
                        <Input label="Product Name" placeholder="e.g. Organic Maize" {...register("name")} />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Category</label>
                                <select {...register("category")} className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-slate-900 focus:ring-2 focus:ring-primary-500 outline-none">
                                    <option>Grains</option>
                                    <option>Vegetables</option>
                                    <option>Fruits</option>
                                    <option>Tubers</option>
                                    <option>Livestock</option>
                                </select>
                            </div>
                            <Input label="Variety / Type" placeholder="e.g. H614" {...register("variety")} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Input label="Price" type="number" placeholder="0.00" {...register("price")} />
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Unit</label>
                                <select {...register("unit")} className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-slate-900 focus:ring-2 focus:ring-primary-500 outline-none">
                                    <option>Kg</option>
                                    <option>Ton</option>
                                    <option>Crate</option>
                                    <option>Bag</option>
                                </select>
                            </div>
                            <Input label="Available Stock" type="number" placeholder="0" {...register("stock")} />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5 ml-1">Description</label>
                            <textarea
                                {...register("description")}
                                rows={4}
                                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 px-4 text-slate-900 focus:ring-2 focus:ring-primary-500 outline-none resize-none"
                                placeholder="Describe your product..."
                            ></textarea>
                        </div>
                    </div>
                </Card>

                <Card padding="lg">
                    <h3 className="text-lg font-bold text-slate-800 mb-4">Product Images</h3>
                    <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors">
                        <Upload className="h-10 w-10 text-slate-400 mb-2" />
                        <p className="text-sm text-slate-500 font-medium">Click to upload images</p>
                        <p className="text-xs text-slate-400">PNG, JPG up to 5MB</p>
                    </div>
                </Card>

                <div className="flex justify-end gap-4">
                    <Button type="button" variant="ghost" onClick={() => router.back()}>Cancel</Button>
                    <Button type="submit">Create Listing</Button>
                </div>
            </form>
        </div>
    );
}
