"use client";
import React from "react";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ArrowRight, CheckCircle, TrendingUp, ShieldCheck, Users, Leaf, Award, Globe, MessageSquare, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCT_IMAGES } from "@/app/libs/constants";

export default function LandingPage() {
    const testimonials = [
        { name: "John Kamau", role: "Maize Farmer, Nakuru", image: "https://ui-avatars.com/api/?name=John+Kamau&background=22c55e&color=fff&size=100", quote: "Gonagri helped me increase my income by 40%. Direct access to buyers means better prices and faster payments.", rating: 5 },
        { name: "Sarah Ochieng", role: "Tomato Farmer, Kiambu", image: "https://ui-avatars.com/api/?name=Sarah+Ochieng&background=16a34a&color=fff&size=100", quote: "The escrow system gives me confidence that I'll get paid. No more chasing buyers for my money.", rating: 5 },
        { name: "Ahmed Hassan", role: "Wholesale Buyer, Mombasa", image: "https://ui-avatars.com/api/?name=Ahmed+Hassan&background=15803d&color=fff&size=100", quote: "Quality products at fair prices. The platform makes it easy to find exactly what I need.", rating: 5 },
    ];

    const stats = [
        { value: "50,000+", label: "Active Farmers", icon: Users },
        { value: "10,000+", label: "Verified Buyers", icon: CheckCircle },
        { value: "$2.5M+", label: "Monthly Trade Volume", icon: TrendingUp },
        { value: "98%", label: "Success Rate", icon: Award },
    ];

    return (
        <div className="overflow-hidden">
            <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[800px] h-[800px] bg-gradient-to-br from-green-200 to-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-gradient-to-tr from-green-300 to-emerald-200 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 animate-fadeInUp">
                            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-green-100">
                                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-ping absolute"></span>
                                <span className="flex h-2 w-2 rounded-full bg-green-500 relative"></span>
                                <span className="text-green-700 font-semibold text-sm">Revolutionizing African Agriculture</span>
                            </div>

                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                                Farm to Market,<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-500">
                                    Direct & Simple
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                                Connect directly with verified buyers and farmers across Africa. Secure payments, transparent pricing, and fair trade for everyone in the agricultural value chain.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/signup" className="flex-1 sm:flex-initial">
                                    <Button size="lg" rightIcon={<ArrowRight size={20} />} className="w-full sm:w-auto shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all">
                                        Start Trading Free
                                    </Button>
                                </Link>
                                <Link href="/#how-it-works" className="flex-1 sm:flex-initial">
                                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-green-600 text-green-700 hover:bg-green-50">
                                        See How It Works
                                    </Button>
                                </Link>
                            </div>

                            <div className="pt-8 grid grid-cols-3 gap-6">
                                {[
                                    { value: "50K+", label: "Farmers" },
                                    { value: "10K+", label: "Buyers" },
                                    { value: "$2.5M+", label: "Monthly Trades" }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center sm:text-left">
                                        <p className="text-3xl sm:text-4xl font-bold text-slate-900">{stat.value}</p>
                                        <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative animate-fadeInUp hidden lg:block">
                            <div className="relative">
                                <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={PRODUCT_IMAGES.harvest}
                                        alt="African farmer with fresh harvest"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                                    <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-green-100">
                                                <div className="w-full h-full flex items-center justify-center text-green-600 font-bold text-lg">JK</div>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">James Kariuki</p>
                                                <p className="text-sm text-slate-500">Verified Farmer</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-xs text-slate-500 mb-1">Latest Order</p>
                                                <p className="font-bold text-slate-900">50 tons Organic Maize</p>
                                            </div>
                                            <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-md">
                                                <CheckCircle size={18} />
                                                <span>$22,500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -left-8 top-24 bg-white p-4 rounded-2xl shadow-xl animate-float border border-green-100">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-3 rounded-xl text-green-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Revenue Growth</p>
                                            <p className="font-bold text-slate-900 text-lg">+45%</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute -right-8 bottom-48 bg-white p-4 rounded-2xl shadow-xl animate-float border border-amber-100" style={{ animationDelay: "1s" }}>
                                    <div className="flex items-center gap-3">
                                        <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                                            <Globe size={24} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Global Reach</p>
                                            <p className="font-bold text-slate-900 text-lg">15 Countries</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl text-green-600 mb-4 group-hover:scale-110 transition-transform">
                                    <stat.icon size={32} />
                                </div>
                                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                                <p className="text-sm text-slate-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white" id="features">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                            <Leaf size={16} />
                            <span>Platform Features</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            Everything you need to succeed
                        </h2>
                        <p className="text-xl text-slate-600">
                            Built by farmers and traders, for farmers and traders. We understand your challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <Card hover padding="lg" className="border-t-4 border-t-green-500 bg-gradient-to-br from-white to-green-50/30">
                            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-green-500/30">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Escrow Payments</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Protection for both buyers and sellers with our secure transaction system.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-amber-500 bg-gradient-to-br from-white to-amber-50/30">
                            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-amber-500/30">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Market Prices</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Access live data to price your produce competitively and make profit.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-blue-500 bg-gradient-to-br from-white to-blue-50/30">
                            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30">
                                <Users size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Direct Trading</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Connect directly without middlemen to maximize your agricultural revenue.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-purple-500 bg-gradient-to-br from-white to-purple-50/30">
                            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-purple-500/30">
                                <MessageSquare size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">In-App Chat</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Secure communication channel for negotiations and deal coordination.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-emerald-500 bg-gradient-to-br from-white to-emerald-50/30">
                            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30">
                                <Award size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Verification</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Rigorous stakeholder verification ensuring a trustworthy marketplace.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-orange-500 bg-gradient-to-br from-white to-orange-50/30">
                            <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-orange-500/30">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Global Reach</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Access regional and international markets with built-in logistics.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-teal-500 bg-gradient-to-br from-white to-teal-50/30">
                            <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-teal-500/30">
                                <Leaf size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Yield Forecast</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                AI-driven insights to predict harvests and optimize your planting.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-indigo-500 bg-gradient-to-br from-white to-indigo-50/30">
                            <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-500/30">
                                <CheckCircle size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Smart Inventory</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Real-time tracking of your stocks and automatic low stock alerts.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-cyan-500 bg-gradient-to-br from-white to-cyan-50/30">
                            <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-cyan-500/30">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Finance Access</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Get credit and insurance offers based on your verified trade history.
                            </p>
                        </Card>

                        <Card hover padding="lg" className="border-t-4 border-t-lime-500 bg-gradient-to-br from-white to-lime-50/30">
                            <div className="w-12 h-12 bg-lime-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-lime-500/30">
                                <Users size={28} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">Community Hub</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Connect with experts and fellow farmers for knowledge sharing.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-slate-50 relative" id="how-it-works">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                            <CheckCircle size={16} />
                            <span>Simple Process</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">How Gonagri Works</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">Start trading in four simple steps</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            {[
                                { step: "01", title: "Create Your Account", desc: "Sign up as a Farmer or Buyer. Complete your profile and get verified in under 5 minutes. No hidden fees." },
                                { step: "02", title: "List or Browse Products", desc: "Farmers: Upload quality photos and set competitive prices. Buyers: Search by category, location, and quality grade." },
                                { step: "03", title: "Connect & Negotiate", desc: "Use our secure messaging to discuss terms. Agree on quantity, quality standards, delivery timeline, and final price." },
                                { step: "04", title: "Complete Transaction Safely", desc: "Funds held in escrow until delivery is confirmed. Both parties protected. Release payment with one click." }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center font-bold text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={PRODUCT_IMAGES.farm}
                                alt="Modern sustainable farming"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-green-900/40 to-transparent flex items-end p-8">
                                <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl w-full">
                                    <h4 className="text-2xl font-bold text-slate-900 mb-4">Ready to get started?</h4>
                                    <p className="text-slate-600 mb-6">Join thousands of farmers and buyers transforming African agriculture.</p>
                                    <Link href="/signup">
                                        <Button size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight size={20} />}>
                                            Create Free Account
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full font-semibold text-sm mb-4">
                            <Star size={16} fill="currentColor" />
                            <span>Testimonials</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                            Trusted by thousands
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            See how Gonagri is changing lives across Africa
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, idx) => (
                            <Card key={idx} padding="lg" className="bg-gradient-to-br from-white to-slate-50/50 border-2 border-slate-100 hover:border-green-200 transition-colors">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={18} className="text-amber-400" fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-slate-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden bg-green-100 flex-shrink-0">
                                        <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">{testimonial.name}</p>
                                        <p className="text-sm text-slate-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500 rounded-full blur-3xl opacity-10"></div>
                <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to transform your agricultural business?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join Gonagri today and connect with verified buyers and farmers across Africa. Zero joining fees.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/signup">
                            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto shadow-xl shadow-green-600/30" rightIcon={<ArrowRight size={20} />}>
                                Start Trading Free
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto backdrop-blur-sm">
                                Sign In
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
