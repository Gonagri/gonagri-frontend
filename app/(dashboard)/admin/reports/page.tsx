"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { BarChart, PieChart, Download } from "lucide-react";

export default function AdminReportsPage() {
    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">System Reports</h2>
                <Button leftIcon={<Download size={18} />}>Download PDF</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card padding="lg">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-100 text-blue-600 rounded-lg"><BarChart size={24} /></div>
                        <h3 className="text-lg font-bold text-slate-800">User Growth</h3>
                    </div>
                    <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                        [Growth Chart Placeholder]
                    </div>
                </Card>

                <Card padding="lg">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-green-100 text-green-600 rounded-lg"><PieChart size={24} /></div>
                        <h3 className="text-lg font-bold text-slate-800">Sales Distribution</h3>
                    </div>
                    <div className="h-64 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                        [Distribution Chart Placeholder]
                    </div>
                </Card>
            </div>
        </div>
    );
}
