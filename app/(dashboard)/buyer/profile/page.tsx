"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";

export default function BuyerProfilePage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">Account Settings</h2>

            <Card padding="lg">
                <h3 className="font-bold text-lg mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Full Name" defaultValue="Alice Buyer" />
                    <Input label="Email Address" defaultValue="alice@buyer.com" readOnly />
                    <Input label="Phone Number" defaultValue="+254 700 000 000" />
                    <Input label="Company Name" placeholder="Optional" />
                </div>
            </Card>

            <Card padding="lg">
                <h3 className="font-bold text-lg mb-4">Default Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                        <Input label="Street Address" defaultValue="44 Business Park" />
                    </div>
                    <Input label="City" defaultValue="Nairobi" />
                    <Input label="Postal Code" defaultValue="00100" />
                </div>
            </Card>

            <div className="flex justify-end gap-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
            </div>
        </div>
    );
}
