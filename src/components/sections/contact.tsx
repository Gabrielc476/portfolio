"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio-data";
import { NeoButton } from "@/components/ui/neo-button";
import { NeoCard } from "@/components/ui/neo-card";

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create mailto link with form data
        const mailtoSubject = encodeURIComponent(formData.subject || `Contato de ${formData.name}`);
        const mailtoBody = encodeURIComponent(
            `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
        );
        const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Open email client
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container-neo">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <span className="neo-border neo-shadow bg-neo-orange mb-6 inline-block text-xl md:text-2xl font-bold px-12 py-4">
                        Contato
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl">Vamos Conversar!</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* Email Card */}
                        <NeoCard color="yellow" hover={false}>
                            <h3 className="text-xl font-bold mb-4">📧 Email</h3>
                            <a
                                href={`mailto:${portfolioData.personal.email}`}
                                className="text-lg hover:text-neo-pink transition-colors"
                            >
                                {portfolioData.personal.email}
                            </a>
                        </NeoCard>

                        {/* Phone Card */}
                        <NeoCard color="pink" hover={false}>
                            <h3 className="text-xl font-bold mb-4">📱 Telefone</h3>
                            <a
                                href={`tel:${portfolioData.personal.phone.replace(/\D/g, '')}`}
                                className="text-lg hover:text-neo-blue transition-colors"
                            >
                                {portfolioData.personal.phone}
                            </a>
                        </NeoCard>

                        {/* Location Card */}
                        <NeoCard color="green" hover={false}>
                            <h3 className="text-xl font-bold mb-4">📍 Localização</h3>
                            <p className="text-lg">{portfolioData.personal.location}</p>
                        </NeoCard>

                        {/* Social Links */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* GitHub Card */}
                            <a
                                href="https://github.com/Gabrielc476"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <NeoCard color="white" hover={true} className="h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="neo-border bg-neo-black p-3">
                                            <svg className="w-8 h-8 text-neo-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">GitHub</h4>
                                            <p className="text-sm text-muted-foreground">@Gabrielc476</p>
                                        </div>
                                    </div>
                                </NeoCard>
                            </a>

                            {/* LinkedIn Card */}
                            <a
                                href="https://www.linkedin.com/in/gabriel-castro-298154209/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <NeoCard color="blue" hover={true} className="h-full">
                                    <div className="flex items-center gap-4">
                                        <div className="neo-border bg-neo-black p-3">
                                            <svg className="w-8 h-8 text-neo-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold">LinkedIn</h4>
                                            <p className="text-sm text-muted-foreground">Gabriel Castro</p>
                                        </div>
                                    </div>
                                </NeoCard>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <NeoCard color="white" hover={false} className="h-fit">
                        <h3 className="text-2xl font-bold mb-6">💬 Envie uma Mensagem</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block font-bold uppercase tracking-wide mb-2"
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="neo-input w-full"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block font-bold uppercase tracking-wide mb-2"
                                >
                                    Seu Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="neo-input w-full"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block font-bold uppercase tracking-wide mb-2"
                                >
                                    Assunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="neo-input w-full"
                                    placeholder="Assunto do email"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block font-bold uppercase tracking-wide mb-2"
                                >
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="neo-input w-full resize-none"
                                    placeholder="Como posso ajudar?"
                                />
                            </div>

                            <NeoButton
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full"
                            >
                                📨 Abrir no Email
                            </NeoButton>

                            <p className="text-sm text-center text-muted-foreground">
                                Ao clicar, seu cliente de email será aberto com a mensagem preenchida.
                            </p>
                        </form>
                    </NeoCard>
                </div>
            </div>
        </section>
    );
}
