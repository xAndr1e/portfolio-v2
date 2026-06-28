"use client";

import TechCards from "@/components/TechCards";
import { useEffect, useRef, useState } from "react";

export default function About() {
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

    const techs = [
        { name: "React",       icon: "/icons/react.png" },
        { name: "JavaScript",  icon: "/icons/javascript.png" },
        { name: "TypeScript",  icon: "/icons/typescript.png" },
        { name: "PHP",         icon: "/icons/php.png" },
        { name: "MySQL",       icon: "/icons/mysql.png" },
        { name: "Git",         icon: "/icons/git.png" },
        { name: "Tailwind CSS",icon: "/icons/tailwind.png" },
        { name: "Node.js",     icon: "/icons/node.js.png" },
        { name: "Supabase",    icon: "/icons/supabase.png" },
        { name: "Vercel",      icon: "/icons/vercel.png" },
        { name: "Next.js",     icon: "/icons/next.js.png" },
        { name: "PostgreSQL",  icon: "/icons/postgres.png" },
    ];

    return (
        <>
            <div ref={ref} className="about w-full h-128 pb-8 flex items-center mt-8 flex-col border-b-1 border-white">
                <h2 className={`font-bold text-7xl text-white ${fadeUp("delay-0")}`}>
                    Tech Stack
                </h2>
                <p className={`font-bold text-md text-gray-400 mt-4 ${fadeUp("delay-150")}`}>
                    Here are some of the technologies I've been working with recently.
                </p>

                <div className="tech-cards-container w-8xl h-auto mt-8 grid grid-cols-6 justify-items-center gap-6 px-8">
                    {techs.map((tech, i) => (
                        <div
                            key={tech.name}
                            className={`group transition-all duration-700 ease-out ${
                                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                            }`}
                            style={{ transitionDelay: `${200 + i * 60}ms` }}
                        >
                            <TechCards tech={tech} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}