"use client";
import React from "react";
import { Card } from "@/app/components/ui/Card";
import { Input } from "@/app/components/ui/Input";
import { Button } from "@/app/components/ui/Button";
import { Search } from "lucide-react";

export const Messages = () => {
    const conversations = [
        { id: 1, name: "WholeFoods Market", lastMsg: "When can you deliver the maize?", time: "2m ago", unread: 2 },
        { id: 2, name: "City Grocers", lastMsg: "Payment confirmed. Thanks!", time: "1h ago", unread: 0 },
        { id: 3, name: "John Doe", lastMsg: "Is the price negotiable?", time: "1d ago", unread: 0 },
    ];

    return (
        <div className="h-[calc(100vh-8rem)] flex rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm animate-fadeIn">
            <div className="w-80 border-r border-slate-200 flex flex-col">
                <div className="p-4 border-b border-slate-200">
                    <div className="relative">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                        />
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto">
                    {conversations.map(c => (
                        <div key={c.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer ${c.id === 1 ? "bg-primary-50" : ""}`}>
                            <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-slate-800 text-sm">{c.name}</h4>
                                <span className="text-xs text-slate-500">{c.time}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className="text-sm text-slate-600 truncate max-w-[180px]">{c.lastMsg}</p>
                                {c.unread > 0 && (
                                    <span className="bg-primary-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{c.unread}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-grow flex flex-col bg-slate-50/50">
                <div className="p-4 border-b border-slate-200 bg-white flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">W</div>
                        <div>
                            <h3 className="font-bold text-slate-800">WholeFoods Market</h3>
                            <p className="text-xs text-slate-500">Active now</p>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm">Details</Button>
                </div>

                <div className="flex-grow p-6 space-y-4 overflow-y-auto">
                    <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-sm text-sm">
                            Hi, is the organic maize still available?
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <div className="bg-primary-600 text-white p-3 rounded-2xl rounded-tr-none shadow-md max-w-sm text-sm">
                            Yes, we have about 50 tons available for immediate shipping.
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm max-w-sm text-sm">
                            Great! When can you deliver if we order today?
                        </div>
                    </div>
                </div>

                <div className="p-4 bg-white border-t border-slate-200">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="flex-grow bg-slate-100 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                        <Button>Send</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
