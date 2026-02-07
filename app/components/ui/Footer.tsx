"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary-500 rounded-md flex items-center justify-center text-white font-bold">
                                G
                            </div>
                            <span className="text-xl font-bold text-white">GONAGRI</span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Connecting African farmers directly with global markets. Fair prices, transparent supply chains, and sustainable growth.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-primary-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary-500 transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Platform</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/buyer" className="hover:text-green-500 transition-colors">Marketplace</Link></li>
                            <li><Link href="/signup" className="hover:text-green-500 transition-colors">Join as Farmer</Link></li>
                            <li><Link href="/signup" className="hover:text-green-500 transition-colors">Join as Buyer</Link></li>
                            <li><Link href="/#how-it-works" className="hover:text-green-500 transition-colors">How it Works</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/about" className="hover:text-green-500 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-green-500 transition-colors">Contact Support</Link></li>
                            <li><Link href="/terms" className="hover:text-green-500 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/terms" className="hover:text-green-500 transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary-500 shrink-0 mt-0.5" />
                                <span>123 AgriBusiness Road,<br />Nairobi, Kenya</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary-500 shrink-0" />
                                <span>+254 123 456 789</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary-500 shrink-0" />
                                <span>support@gonagri.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Gonagri. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
