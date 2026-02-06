import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center text-slate-600 hover:text-primary-600 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
            </div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="flex justify-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                        G
                    </div>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                    GONAGRI
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 border border-slate-100">
                    {children}
                </div>
            </div>
        </div>
    );
}
