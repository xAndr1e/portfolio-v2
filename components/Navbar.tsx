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
        <div className={`sticky top-0 z-50 items-center w-full flex justify-between p-4 border-b border-white/30 transition-all duration-300 ${
            scrolled ? "bg-black/90 backdrop-blur-md shadow-lg shadow-white/5" : "bg-black"
        }`}>
            <div className="flex items-center justify-center">
                <h1 className="font-bold rounded-full border border-white/30 p-2 text-white transition-all duration-300 hover:border-white hover:bg-white/10 hover:scale-105 cursor-pointer">
                    e.drie
                </h1>
            </div>

            <nav className="navbar w-64 h-16 text-white flex items-center justify-center rounded-full p-8 border border-white/30 transition-all duration-300 hover:border-white/60">
                <ul className="flex space-x-8">
                    {["Home", "About", "Projects"].map((item) => (
                        <li key={item}>
                            <Link
                                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                className="font-bold relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full transition-colors duration-200 hover:text-gray-300"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="flex items-center justify-center">
                <Link
                    href="/contact"
                    className="font-bold text-white rounded-full border border-white/30 p-2 px-4 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
}