export const portfolioData = {
    personal: {
        name: "Gabriel Castro Cavalcante",
        title: "Desenvolvedor FullStack",
        email: "gabriel.cavalcante@hotmail.com",
        phone: "(83) 98751-4931",
        location: "João Pessoa, PB",
    },

    summary: `Desenvolvedor FullStack com formação em Ciência da Computação e pós-graduação em Arquitetura de Software e IA. Experiência prática com tecnologias como React, Next.js, Python, Node.js, e projetos que envolvem IA generativa, dashboards financeiros e plataformas web.`,

    education: [
        {
            degree: "Bacharelado em Ciência da Computação",
            institution: "Unipê",
            year: "2024",
            status: "Concluído",
        },
        {
            degree: "Tecnólogo em Sistemas para Internet",
            institution: "Uniesp",
            year: "Em andamento",
            status: "Cursando",
        },
        {
            degree: "Pós-graduação em Arquitetura de Software e IA",
            institution: "XP Educação",
            year: "2025",
            status: "Em andamento",
        },
        {
            degree: "Intercâmbio Acadêmico",
            institution: "Canadá",
            year: "2019-2020",
            status: "Concluído",
        },
    ],

    experience: [
        {
            company: "Consultoria UM",
            location: "João Pessoa, PB",
            period: "Dezembro/2024 - Maio/2025",
            description: "Prestação de consultoria a prefeituras auxiliando na aplicação de recursos e acompanhamento de contratos e convênios.",
        },
        {
            company: "Fábrica de Software da Unipê",
            location: "João Pessoa, PB",
            period: "Fevereiro/2022 - Junho/2022",
            description: "Desenvolvimento de aplicação web com mapa interativo em Python e Django.",
        },
    ],

    projects: [
        {
            title: "Dashboard Financeiro Inteligente",
            description: "Dashboard para finanças com NextJS e Node.js, banco PostgreSQL e Claude 3.7 com extended thinking. Gera insights sobre saúde financeira e sugestões para metas de orçamento.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Claude AI"],
            highlights: ["Clean Code", "SOLID"],
        },
        {
            title: "Sistema de Recomendação de Currículos com IA",
            description: "Sistema que analisa currículos com vagas usando NextJS, Flask e API Anthropic. Gera insights e feedback sobre compatibilidade.",
            technologies: ["Next.js", "Flask", "Anthropic API"],
            highlights: ["Clean Code", "SOLID", "Design Patterns"],
        },
        {
            title: "Plataforma de Gerenciamento de Convênios",
            description: "Plataforma de gerenciamento com NextJS, Flask e MongoDB. Usa ShadcnUI e IA generativa para cadastro automatizado.",
            technologies: ["Next.js", "Flask", "MongoDB", "ShadcnUI"],
            highlights: ["Clean Code", "SOLID", "Design Patterns"],
        },
        {
            title: "Plataforma de Análise Psicológica",
            description: "Plataforma automatizada para correção e análise de avaliações psicológicas com NextJS, Flask e PostgreSQL.",
            technologies: ["Next.js", "Flask", "PostgreSQL", "react-charts"],
            highlights: ["UI Intuitiva", "Automação"],
        },
        {
            title: "Dashboard Analytics para Restaurante",
            description: "Plataforma fullstack estilo Power BI com arquitetura limpa. Integração com Gemini para geração de insights e chatbot.",
            technologies: ["TypeScript", "Express", "Next.js", "Gemini AI"],
            highlights: ["Clean Architecture", "Analytics"],
        },
        {
            title: "Sistema PDV Mobile",
            description: "API e aplicativo PDV mobile para loja de biscoitos artesanais. Agiliza atendimento e gerenciamento de vendas.",
            technologies: ["TypeScript", "Express", "React Native", "Expo"],
            highlights: ["Clean Architecture", "Mobile"],
        },
    ],

    skills: {
        frontend: {
            title: "Front-End",
            color: "yellow",
            items: ["HTML5", "CSS", "JavaScript (ES6+)", "TypeScript", "ReactJS", "React Native", "Next.js"],
        },
        backend: {
            title: "Back-End",
            color: "pink",
            items: ["Node.js", "Python", "Flask", "Express", "APIs RESTful", "Testes Unitários"],
        },
        database: {
            title: "Banco de Dados",
            color: "green",
            items: ["PostgreSQL", "MongoDB", "Modelagem de Dados", "Otimização de Consultas"],
        },
        devops: {
            title: "DevOps & Ferramentas",
            color: "blue",
            items: ["Git", "GitHub", "GitLab", "Docker", "Metodologias Ágeis"],
        },
    },

    certifications: [
        { name: "Arquiteto(a) de Soluções", year: "2025", hours: "148h", institution: "XP Educação" },
        { name: "React JS com TypeScript", year: "2024", institution: "Udemy" },
        { name: "Python e JavaScript para Big Data", year: "2024", hours: "32h", institution: "Unipê" },
        { name: "Python", year: "2023", institution: "Udemy" },
        { name: "Node.js", year: "2022", institution: "Udemy" },
        { name: "React Native", year: "2021", institution: "Udemy" },
    ],

    languages: [
        { name: "Português", level: "Nativo" },
        { name: "Inglês", level: "Proficiente" },
    ],

    softSkills: [
        "Aprendizado contínuo",
        "Comunicação eficiente",
        "Proatividade e autonomia",
    ],
};

export type PortfolioData = typeof portfolioData;
