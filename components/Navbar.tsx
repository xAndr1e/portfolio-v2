"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="sticky top-0 z-50 w-full flex justify-center p-4">
            <nav className={`flex items-center justify-center gap-8 px-8 py-3 rounded-full border transition-all duration-300 ${
                scrolled
                    ? "border-white/30 bg-black/80 backdrop-blur-md shadow-lg shadow-white/5"
                    : "border-white/20 bg-black/40 backdrop-blur-sm"
            }`}>
                {["Home", "About", "Projects", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                        className="font-bold text-white/70 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full hover:text-white transition-colors duration-200"
                    >
                        {item}
                    </Link>
                ))}
            </nav>
        </div>
    );
}