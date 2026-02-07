"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Badge } from "@/app/components/ui/Badge";
import { FileSearch, Clock, User, ShieldAlert, Monitor } from "lucide-react";

export default function AdminAuditLogs() {
    const logs = [
        { id: 1, action: "Config Updated", user: "Admin (Chief)", target: "Platform Fees", ip: "192.168.1.45", time: "10 mins ago", severity: "medium" },
        { id: 2, action: "User Verified", user: "Moderator_A", target: "Samuel Omondi", ip: "192.168.1.12", time: "25 mins ago", severity: "low" },
        { id: 3, action: "Login Failed", user: "unknown", target: "Login Page", ip: "45.12.89.231", time: "1 hour ago", severity: "high" },
        { id: 4, action: "Payment Released", user: "System", target: "Order #8921", ip: "localhost", time: "3 hours ago", severity: "low" },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Security Audit Logs</h1>
                <p className="text-slate-500">Track all administrative actions and system security events.</p>
            </div>

            <Card padding="none" className="overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 border-b border-slate-200">
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Timestamp</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">User</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Action</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Target</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">IP Address</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase">Severity</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm text-slate-600">
                                            <Clock size={14} /> {log.time}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                                            <User size={14} className="text-slate-400" /> {log.user}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-slate-900">{log.action}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{log.target}</td>
                                    <td className="px-6 py-4 text-sm text-slate-500">
                                        <div className="flex items-center gap-2">
                                            <Monitor size={14} /> {log.ip}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <Badge variant={log.severity === 'high' ? 'danger' : log.severity === 'medium' ? 'secondary' : 'primary'}>
                                            {log.severity}
                                        </Badge>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
