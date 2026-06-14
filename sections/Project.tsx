"use client";

import ProjectCards from "@/components/ProjectCards";
import { projects } from "@/lib/projects";
import { useEffect, useRef, useState } from "react";

export default function Project() {
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

    return (
        <div ref={ref} className="w-full h-full flex items-center flex-col mt-8 border-b border-white">
            <h1
                className={`font-bold text-7xl text-white transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
            >
                Projects
            </h1>
            <p className="text-lg font-bold text-gray-400 mt-6 max-w-2xl leading-relaxed">
                Here are some of my recent projects.
            </p>
            <div className="w-8xl h-auto mt-8 mb-12 grid grid-cols-2 gap-6 px-8">
                {projects.map((project, i) => (
                    <div
                        key={project.title}
                        className={`transition-all duration-700 ease-out ${
                            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                        style={{ transitionDelay: `${150 + i * 100}ms` }}
                    >
                        <ProjectCards project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
}