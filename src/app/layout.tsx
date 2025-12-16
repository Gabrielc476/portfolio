import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gabriel Castro Cavalcante | Desenvolvedor FullStack",
  description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e IA Generativa. Transformando ideias em experiências digitais incríveis.",
  keywords: ["desenvolvedor", "fullstack", "react", "nextjs", "nodejs", "python", "ia", "inteligência artificial", "joão pessoa", "paraiba"],
  authors: [{ name: "Gabriel Castro Cavalcante" }],
  creator: "Gabriel Castro Cavalcante",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Gabriel Castro Cavalcante",
    title: "Gabriel Castro Cavalcante | Desenvolvedor FullStack",
    description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e IA Generativa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Castro Cavalcante | Desenvolvedor FullStack",
    description: "Desenvolvedor FullStack especializado em React, Next.js, Node.js e IA Generativa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
