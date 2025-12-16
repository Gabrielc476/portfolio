import { portfolioData } from "@/data/portfolio-data";
import { NeoCard, NeoCardContent, NeoCardHeader, NeoCardTitle, NeoCardDescription } from "@/components/ui/neo-card";

const projectColors: Array<"yellow" | "pink" | "green" | "blue" | "orange" | "purple"> = [
    "yellow", "pink", "green", "blue", "orange", "purple"
];

export function ProjectsSection() {
    return (
        <section id="projects" className="section-padding bg-neo-white neo-border border-l-0 border-r-0">
            <div className="container-neo">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="neo-border neo-shadow bg-neo-blue mb-6 inline-block text-xl md:text-2xl font-bold px-12 py-4">
                        Portfólio
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl">Projetos em Destaque</h2>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <NeoCard
                            key={index}
                            color={projectColors[index % projectColors.length]}
                            className="flex flex-col h-full"
                        >
                            <NeoCardHeader>
                                <NeoCardTitle className="text-xl mb-2">
                                    {project.title}
                                </NeoCardTitle>
                                <NeoCardDescription className="text-neo-black/80">
                                    {project.description}
                                </NeoCardDescription>
                            </NeoCardHeader>
                            <NeoCardContent className="mt-auto">
                                {/* Technologies */}
                                <div className="mb-4">
                                    <p className="text-xs font-bold uppercase tracking-wide mb-2">
                                        Tecnologias
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="neo-border bg-neo-white px-2 py-1 text-xs font-bold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-1">
                                    {project.highlights.map((highlight, highlightIndex) => (
                                        <span
                                            key={highlightIndex}
                                            className="bg-neo-black text-neo-white px-2 py-1 text-xs font-bold uppercase"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>
                            </NeoCardContent>
                        </NeoCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
