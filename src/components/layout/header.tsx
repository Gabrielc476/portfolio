"use client";

import { useState } from "react";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio-data";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projetos", href: "#projects" },
    { label: "Contato", href: "#contact" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-neo-cream neo-border border-t-0 border-l-0 border-r-0">
            <div className="container-neo flex items-center justify-between h-20">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl md:text-2xl font-bold tracking-tight hover:text-neo-pink transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                >
                    {portfolioData.personal.name.split(' ')[0]}
                    <span className="text-neo-pink">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="px-4 py-2 font-bold uppercase text-sm tracking-wide hover:bg-neo-yellow transition-colors neo-border bg-neo-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden neo-button bg-neo-yellow p-2"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={3}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            <nav
                className={cn(
                    "md:hidden bg-neo-cream neo-border border-t-0 border-l-0 border-r-0 overflow-hidden transition-all duration-300",
                    isMenuOpen ? "max-h-64 py-4" : "max-h-0"
                )}
            >
                <div className="container-neo flex flex-col gap-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="px-4 py-3 font-bold uppercase text-sm tracking-wide bg-neo-white neo-border hover:bg-neo-yellow transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
