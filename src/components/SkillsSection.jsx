import { techStack } from "../lib/techStack";
import { User, Database, Cpu } from "lucide-react"; // Icons for categories

export const SkillsSection = () => {
  const categorizedStack = {
    "Frontend": {
      icon: <User className="h-6 w-6 text-primary" />,
      description: "Building interactive UIs with modern frameworks and libraries.",
      items: techStack.filter((tech) => tech.category === "frontend"),
    },
    "Backend": {
      icon: <Database className="h-6 w-6 text-primary" />,
      description: "Designing APIs, databases, and scalable server-side logic.",
      items: techStack.filter((tech) => tech.category === "backend"),
    },
    "AI / ML & Data": {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      description: "Solving problems using data, ML models, and analytical libraries.",
      items: techStack.filter((tech) => tech.category === "ai-ml"),
    },
  };

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills <span className="text-primary">...</span>
        </h2>

        {/* === Categorized Tech Stack Cards === */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(categorizedStack).map(([category, data]) => (
            <div key={category} className="gradient-border p-6 card-hover rounded-xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  {data.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{category}</h4>
                  <p className="text-muted-foreground">{data.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {data.items.map((tech) => (
                  <div
                    key={tech.name}
                  className="group w-20 h-20 flex items-center justify-center hover:animate-bounce transition-transform duration-300"
                    title={tech.name}
                  >
                    <img
                       src={tech.logo}
                      alt={tech.name}
                     className="w-19 h-19 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-sm text-primary bg-black/80 px-2 py-0.5 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    {tech.proficiency}%
  </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
