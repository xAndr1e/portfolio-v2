"use client";

import ProjectCards from "@/components/ProjectCards";
import { useEffect, useRef, useState } from "react";

const projects = [
    { image: "/projects/Coffee-Dev.png", title: "Coffee.Dev", description: "A coffee-themed development blog.", techs: ["Next.js", "Tailwind CSS", "Supabase", "Vercel"] },
    { image: "/projects/project2.jpg", title: "Project 2", description: "A simple todo app.", techs: ["Vue", "Firebase"] },
    { image: "/projects/project3.jpg", title: "Project 3", description: "A social media platform.", techs: ["Next.js", "PostgreSQL"] },
    { image: "/projects/project4.jpg", title: "Project 4", description: "An e-commerce website.", techs: ["React", "Node.js", "MongoDB"] },
];

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
            <div className="w-8xl h-auto mt-8 grid grid-cols-2 gap-6 px-8">
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