import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { NeoButton } from "@/components/ui/neo-button";

export function HeroSection() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 section-padding relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-32 left-10 w-20 h-20 bg-neo-yellow neo-border rotate-12 animate-float hidden lg:block" />
            <div className="absolute top-48 right-20 w-16 h-16 bg-neo-pink neo-border -rotate-6 animate-float stagger-2 hidden lg:block" />
            <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-neo-green neo-border rotate-45 animate-float stagger-3 hidden lg:block" />
            <div className="absolute bottom-48 right-1/3 w-24 h-24 bg-neo-blue neo-border -rotate-12 animate-float stagger-4 hidden lg:block" />

            <div className="container-neo">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greeting Tag */}
                    <div className="inline-block mb-6">
                        <span className="neo-border neo-shadow bg-neo-yellow inline-block text-xl md:text-2xl font-bold px-12 py-4">
                            👋 Olá, eu sou
                        </span>
                    </div>

                    {/* Name */}
                    <h1 className="mb-6 leading-tight text-5xl md:text-6xl lg:text-7xl">
                        <span className="block">{portfolioData.personal.name.split(' ')[0]}</span>
                        <span className="block text-neo-pink">{portfolioData.personal.name.split(' ').slice(1).join(' ')}</span>
                    </h1>

                    {/* Title */}
                    <div className="inline-block neo-border neo-shadow bg-neo-white px-6 py-3 mb-8">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                            {portfolioData.personal.title}
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Especializado em <span className="font-bold bg-neo-yellow px-1">React</span>,
                        {" "}<span className="font-bold bg-neo-pink px-1">Next.js</span>,
                        {" "}<span className="font-bold bg-neo-green px-1">Node.js</span> e
                        {" "}<span className="font-bold bg-neo-blue px-1">IA Generativa</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#projects">
                            <NeoButton variant="primary" size="lg">
                                Ver Projetos
                            </NeoButton>
                        </Link>
                        <Link href="#contact">
                            <NeoButton variant="outline" size="lg">
                                Fale Comigo
                            </NeoButton>
                        </Link>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="mt-16 animate-bounce">
                        <svg
                            className="w-8 h-8 mx-auto"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
