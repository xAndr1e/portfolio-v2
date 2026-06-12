interface Tech {
  icon: string;
  name: string;
}

export default function TechCards({ tech }: { tech: Tech }) {
    return (
        <div className="tech-card w-48 h-18 border border-white/30 rounded-lg flex items-center gap-4 p-2 justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-white hover:bg-white/5 cursor-default">
            <img className="w-12 h-12 rounded-lg transition-transform duration-300 group-hover:rotate-6" src={tech.icon} alt={tech.name} />
            <p className="font-bold text-sm text-white mt-2">{tech.name}</p>
        </div>
    );
}