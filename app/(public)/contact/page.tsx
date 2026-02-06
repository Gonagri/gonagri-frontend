"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Get in Touch</h1>
                <p className="text-xl text-slate-600">Have questions about our platform or need assistance with a trade? Our team is here to help you grow.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card padding="lg">
                        <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="your@email.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Subject</label>
                                <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none" placeholder="How can we help?" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-slate-700">Message</label>
                                <textarea rows={6} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none resize-none" placeholder="Tell us more about your inquiry..."></textarea>
                            </div>
                            <Button size="lg" fullWidth leftIcon={<Send size={18} />}>Send Message</Button>
                        </form>
                    </Card>
                </div>

                <div className="space-y-8">
                    <Card padding="lg" className="bg-green-600 text-white border-none">
                        <h3 className="font-bold text-xl mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="p-2 bg-white/20 rounded-lg h-fit">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">Email us at</p>
                                    <p className="font-bold">support@gonagri.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-2 bg-white/20 rounded-lg h-fit">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">Call us</p>
                                    <p className="font-bold">+254 700 000 000</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="p-2 bg-white/20 rounded-lg h-fit">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">HQ Office</p>
                                    <p className="font-bold">Agri Plaza, Suite 10, Nairobi</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card padding="lg" className="bg-slate-900 text-white border-none">
                        <div className="flex items-center gap-4 mb-4">
                            <MessageCircle className="text-green-500" size={32} />
                            <h3 className="font-bold text-lg">Live Chat</h3>
                        </div>
                        <p className="text-slate-400 text-sm mb-6">Need instant support? Our agents are online Mon-Fri, 8 AM to 6 PM.</p>
                        <Button className="bg-green-600 hover:bg-green-700 border-none w-full">Start Chat</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
