"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Users, Sprout, Globe, Award, TrendingUp, Handshake, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="space-y-24 pb-24 animate-fadeIn">
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000"
                    alt="Agricultural landscape"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Cultivating Trust, Connecting Growth.</h1>
                    <p className="text-xl md:text-2xl opacity-90 font-medium max-w-2xl mx-auto leading-relaxed">
                        Gonagri is the digital bridge between the world's finest farmers and the bulk buyers who need their produce.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Core Values</h2>
                    <p className="text-slate-500 text-lg">The principles that guide every trade on our platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Transparency", icon: Globe, desc: "Complete visibility into pricing, origins, and quality for every single grain." },
                        { title: "Empowerment", icon: Sprout, desc: "Giving farmers direct access to markets and fair pricing they deserve." },
                        { title: "Reliability", icon: ShieldCheck, desc: "Securing every cent and every kilogram through our advanced escrow system." }
                    ].map((val, i) => (
                        <Card key={i} padding="lg" className="text-center group hover:border-green-500 transition-all">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                <val.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-slate-500 leading-relaxed font-medium">{val.desc}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-slate-900 py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { label: "Farmers Registered", value: "50,000+", icon: Users },
                            { label: "Trades Secured", value: "$250M", icon: Handshake },
                            { label: "Countries Served", value: "12", icon: Globe },
                            { label: "Quality Rating", value: "4.9/5", icon: Award }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-4">
                                <div className="text-green-500 flex justify-center">
                                    <stat.icon size={40} />
                                </div>
                                <h3 className="text-4xl font-black">{stat.value}</h3>
                                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000"
                        alt="Farmer in the field"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">Eliminating the Middleman. Reimagining Agriculture.</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        For too long, the agricultural industry has been plagued by complex supply chains and unfair pricing. Gonagri was founded to disrupt this cycle.
                    </p>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        By leveraging blockchain-verified identity and secure escrow finance, we ensure that the value goes directly to those who cultivate our land and those who feed our nations.
                    </p>
                    <div className="flex gap-4 pt-4">
                        <Button size="lg">Join Our Mission</Button>
                        <Button size="lg" variant="outline">Learn More</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
