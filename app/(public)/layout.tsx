import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

export default function PublicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
        </div>
    );
}
