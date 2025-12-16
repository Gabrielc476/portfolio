import { portfolioData } from "@/data/portfolio-data";
import { NeoCard, NeoCardContent, NeoCardHeader, NeoCardTitle } from "@/components/ui/neo-card";

export function AboutSection() {
    return (
        <section id="about" className="section-padding bg-neo-white neo-border border-l-0 border-r-0">
            <div className="container-neo">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="neo-border neo-shadow bg-neo-pink mb-6 inline-block text-xl md:text-2xl font-bold px-12 py-4">
                        Sobre Mim
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl">Conheça minha jornada</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Bio Card */}
                    <NeoCard color="yellow" className="h-full">
                        <NeoCardHeader>
                            <NeoCardTitle className="text-2xl">
                                👨‍💻 Resumo Profissional
                            </NeoCardTitle>
                        </NeoCardHeader>
                        <NeoCardContent>
                            <p className="text-lg leading-relaxed">
                                {portfolioData.summary}
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {portfolioData.softSkills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="neo-tag bg-neo-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </NeoCardContent>
                    </NeoCard>

                    {/* Education & Languages */}
                    <div className="flex flex-col gap-8">
                        {/* Education */}
                        <NeoCard color="green">
                            <NeoCardHeader>
                                <NeoCardTitle className="text-2xl">
                                    🎓 Formação Acadêmica
                                </NeoCardTitle>
                            </NeoCardHeader>
                            <NeoCardContent>
                                <ul className="space-y-4">
                                    {portfolioData.education.slice(0, 3).map((edu, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="neo-border bg-neo-white px-2 py-1 text-sm font-bold shrink-0">
                                                {edu.year}
                                            </span>
                                            <div>
                                                <p className="font-bold">{edu.degree}</p>
                                                <p className="text-sm">{edu.institution}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </NeoCardContent>
                        </NeoCard>

                        {/* Languages */}
                        <NeoCard color="blue">
                            <NeoCardHeader>
                                <NeoCardTitle className="text-2xl">
                                    🌍 Idiomas
                                </NeoCardTitle>
                            </NeoCardHeader>
                            <NeoCardContent>
                                <div className="flex flex-wrap gap-4">
                                    {portfolioData.languages.map((lang, index) => (
                                        <div
                                            key={index}
                                            className="neo-border bg-neo-white px-4 py-2"
                                        >
                                            <p className="font-bold">{lang.name}</p>
                                            <p className="text-sm">{lang.level}</p>
                                        </div>
                                    ))}
                                </div>
                            </NeoCardContent>
                        </NeoCard>
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold text-center mb-8">
                        💼 Experiência Profissional
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.experience.map((exp, index) => (
                            <NeoCard key={index} color="white">
                                <NeoCardHeader>
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <span className="neo-tag bg-neo-orange">
                                            {exp.period}
                                        </span>
                                        <span className="text-sm">{exp.location}</span>
                                    </div>
                                    <NeoCardTitle>{exp.company}</NeoCardTitle>
                                </NeoCardHeader>
                                <NeoCardContent>
                                    <p>{exp.description}</p>
                                </NeoCardContent>
                            </NeoCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
