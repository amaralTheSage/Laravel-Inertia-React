import { Head, Link } from "@inertiajs/react";
import React from "react";
import { Toaster, toast } from "sonner";

export default function Layout({ children }) {
    return (
        <>
            <Toaster richColors position="top-right" />
            <header className="flex justify-between px-5 py-4 border-b-2 shadow-md border-gray-400">
                <Link href="/">
                    <span>XYZ</span>
                    <span>Name</span>
                </Link>
                <nav className="flex gap-4">
                    <Link href="">Home</Link>
                    <Link href="">Profile</Link>
                    <Link href="">Terms</Link>
                </nav>
            </header>

            <main>{children}</main>
        </>
    );
}
