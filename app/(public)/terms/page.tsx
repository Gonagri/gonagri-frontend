"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { ShieldCheck, FileText, Scale, Lock } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fadeIn">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms of Service</h1>
                <p className="text-lg text-slate-500">Last updated: February 2024</p>
            </div>

            <div className="space-y-8">
                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <FileText size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">1. Agreement to Terms</h2>
                    </div>
                    <Card padding="lg">
                        <p className="text-slate-600 leading-relaxed">
                            By accessing or using Gonagri, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. These terms apply to all visitors, farmers, buyers, and others who access or use the platform.
                        </p>
                    </Card>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <ShieldCheck size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">2. Escrow & Trading</h2>
                    </div>
                    <Card padding="lg">
                        <p className="text-slate-600 leading-relaxed">
                            Gonagri provides a secure escrow service for agricultural trades. Funds are held by Gonagri until the buyer confirms the quantity and quality of produce delivered. Farmers are guaranteed payment upon successful fulfillment of the order specifications.
                        </p>
                    </Card>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <Scale size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">3. Dispute Resolution</h2>
                    </div>
                    <Card padding="lg">
                        <p className="text-slate-600 leading-relaxed">
                            In the event of a disagreement regarding quality or delivery, Gonagri acts as a mediator. Our resolution team will review evidence from both parties, including inspection reports and delivery logs, to reach a fair outcome.
                        </p>
                    </Card>
                </section>

                <section className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <Lock size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900">4. Privacy & Data</h2>
                    </div>
                    <Card padding="lg">
                        <p className="text-slate-600 leading-relaxed">
                            Your privacy is important to us. We collect and process your personal and trade data according to our Privacy Policy. By using Gonagri, you consent to such processing and you warrant that all data provided by you is accurate.
                        </p>
                    </Card>
                </section>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 text-center">
                    <p className="text-slate-500 text-sm">Have questions about our terms? <a href="/contact" className="text-green-600 font-bold hover:underline">Contact our legal team</a></p>
                </div>
            </div>
        </div>
    );
}
