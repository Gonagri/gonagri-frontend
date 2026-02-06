"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";

export default function AdminSettingsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-slate-800">Platform Settings</h2>

            <Card padding="lg">
                <h3 className="font-bold text-lg mb-4">General Configuration</h3>
                <div className="space-y-4">
                    <Input label="Platform Name" defaultValue="Gonagri" />
                    <Input label="Support Email" defaultValue="support@gonagri.com" />
                    <div className="flex items-center gap-2 mt-2">
                        <input type="checkbox" className="h-4 w-4 text-primary-600 rounded" defaultChecked />
                        <label className="text-sm text-slate-700">Enable New User Registration</label>
                    </div>
                </div>
            </Card>

            <div className="flex justify-end">
                <Button>Save Settings</Button>
            </div>
        </div>
    );
}
