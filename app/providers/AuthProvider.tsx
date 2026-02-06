"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type UserRole = "farmer" | "buyer" | "admin" | null;

interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    avatar?: string;
}

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (role: UserRole) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedUser = localStorage.getItem("gonagri_user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = (role: UserRole) => {
        const mockUser: User = {
            id: "1",
            name: role === "farmer" ? "John Farmer" : role === "buyer" ? "Alice Buyer" : "Admin User",
            email: `test@${role}.com`,
            role: role,
            avatar: "https://i.pravatar.cc/150?u=" + role
        };

        setUser(mockUser);
        localStorage.setItem("gonagri_user", JSON.stringify(mockUser));

        if (role === "farmer") router.push("/farmer");
        else if (role === "buyer") router.push("/buyer");
        else if (role === "admin") router.push("/admin");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("gonagri_user");
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
