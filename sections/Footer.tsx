"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const fadeUp = (delay: string) =>
        `transition-all duration-700 ease-out ${delay} ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`;

    return (
        <div ref={ref} className="w-7xl mt-8 mx-auto">
            <div className="border border-white/30 rounded-2xl p-12 grid grid-cols-[1fr_auto_auto] gap-12 items-start bg-black/50 transition-all duration-300 hover:border-white/60 hover:bg-white/5">
                <div className={fadeUp("delay-0")}>
                    <h1 className="text-white font-bold text-5xl leading-tight tracking-tight transition-colors duration-300 hover:text-gray-300 cursor-default">
                        Andrie<br />Elbambuena.
                    </h1>
                </div>

                <div className={fadeUp("delay-150")}>
                    <h2 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Explore</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">Home</a>
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">About</a>
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">Projects</a>
                    </div>
                </div>

                <div className={fadeUp("delay-300")}>
                    <h2 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">Let's Connect</h2>
                    <div className="flex flex-col gap-2">
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">Email</a>
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">LinkedIn</a>
                        <a href="#" className="text-white/55 hover:text-white hover:translate-x-1 transition-all duration-200 text-sm">GitHub</a>
                    </div>
                </div>
            </div>

            <div className={`flex justify-between px-1 mt-4 ${fadeUp("delay-500")}`}>
                <span className="text-white/30 hover:text-white/60 transition-colors duration-300 text-xs cursor-default">© 2026</span>
                <span className="text-white/30 hover:text-white/60 transition-colors duration-300 text-xs cursor-default">Andrie Elbambuena.</span>
            </div>
        </div>
    );
}