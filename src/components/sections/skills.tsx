import { portfolioData } from "@/data/portfolio-data";
import { NeoCard, NeoCardContent, NeoCardHeader, NeoCardTitle } from "@/components/ui/neo-card";

const colorMap: Record<string, "yellow" | "pink" | "green" | "blue"> = {
    yellow: "yellow",
    pink: "pink",
    green: "green",
    blue: "blue",
};

export function SkillsSection() {
    const skills = Object.values(portfolioData.skills);

    return (
        <section id="skills" className="section-padding">
            <div className="container-neo">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="neo-border neo-shadow bg-neo-green mb-6 inline-block text-xl md:text-2xl font-bold px-12 py-4">
                        Competências
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl">Minhas Habilidades</h2>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skillCategory, index) => (
                        <NeoCard
                            key={index}
                            color={colorMap[skillCategory.color] || "white"}
                            className={`stagger-${index + 1}`}
                        >
                            <NeoCardHeader>
                                <NeoCardTitle className="text-2xl">
                                    {skillCategory.title}
                                </NeoCardTitle>
                            </NeoCardHeader>
                            <NeoCardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skillCategory.items.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="neo-border bg-neo-white px-3 py-2 font-bold text-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_black] transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </NeoCardContent>
                        </NeoCard>
                    ))}
                </div>

                {/* Certifications */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        📜 Certificações
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {portfolioData.certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="neo-border neo-shadow bg-neo-white px-4 py-3 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_black] transition-all"
                            >
                                <p className="font-bold">{cert.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    {cert.institution} • {cert.year}
                                    {cert.hours && ` • ${cert.hours}`}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
