"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Badge } from "@/app/components/ui/Badge";
import { Search, MoreHorizontal, Check, X } from "lucide-react";

export default function AdminUsersPage() {
    const users = [
        { id: 1, name: "John Doe", email: "john@farm.com", role: "Farmer", status: "Pending", joined: "Oct 24, 2023" },
        { id: 2, name: "Alice Smith", email: "alice@buyer.com", role: "Buyer", status: "Active", joined: "Oct 22, 2023" },
        { id: 3, name: "Robert Green", email: "robert@farm.com", role: "Farmer", status: "Active", joined: "Sep 12, 2023" },
        { id: 4, name: "Sarah Connor", email: "sarah@buyer.com", role: "Buyer", status: "Suspended", joined: "Aug 05, 2023" },
    ];

    return (
        <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-slate-800">User Management</h2>
                <Button>Export CSV</Button>
            </div>

            <Card padding="none">
                <div className="p-4 border-b border-slate-100 flex gap-4">
                    <div className="relative flex-grow max-w-md">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search users..."
                            className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary-500"
                        />
                    </div>
                    <select className="border rounded-lg px-4 py-2 text-sm text-slate-600 outline-none">
                        <option>All Roles</option>
                        <option>Farmer</option>
                        <option>Buyer</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-600">
                        <thead className="bg-slate-50 text-slate-700 font-semibold border-b border-slate-200">
                            <tr>
                                <th className="p-4">User</th>
                                <th className="p-4">Role</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Joined</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-slate-50">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-xs text-slate-600">
                                                {user.name[0]}
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-900">{user.name}</p>
                                                <p className="text-xs text-slate-500">{user.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">{user.role}</td>
                                    <td className="p-4">
                                        <Badge variant={user.status === "Active" ? "success" : user.status === "Pending" ? "warning" : "danger"}>
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="p-4">{user.joined}</td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            {user.status === "Pending" && (
                                                <>
                                                    <button className="p-1 text-green-600 hover:bg-green-50 rounded"><Check size={18} /></button>
                                                    <button className="p-1 text-red-600 hover:bg-red-50 rounded"><X size={18} /></button>
                                                </>
                                            )}
                                            <button className="p-1 text-slate-400 hover:text-slate-600"><MoreHorizontal size={18} /></button>
                                        </div>
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
