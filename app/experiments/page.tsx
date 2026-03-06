import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Soha Ratnam",
    description: "A collection of things I've built and explored.",
};

const experiments = [
    {
        title: "Food Recx",
        description:
            "Built a Food Recipe Web Application using the MERN stack that enables users to browse, add, and manage recipes. Implemented REST APIs with Node.js and Express, stored data in MongoDB, and created an interactive frontend using React",
        techStack: ["MongoDb","React","Tailwind","Node","Express"],
        image: "/projects/Screenshot 2026-03-05 212010.png",
        github: "https://github.com/SohaRatnam2005/Food_Recipe",
        
    },
    {
        title: "Summarizer",
        description:
            "Built an AI Text Summarizer using Next.js and Hugging Face APIs that generates concise summaries from long text or documents. Implemented server-side API routes and a responsive UI for smooth user interaction.",
        techStack: ["HuggingFace", "Tailwind", "Next.js"],
        image: "/projects/Summarizer.png",
        github: "https://github.com/Tanushree-RD/iballbooster",
       
    },
    {
        title: "Puzzle word",
        description:
            "A fun, pastel-themed personality quiz that tells you your Gen Z \"vibe\".",
        techStack: ["HTML", "CSS", "JavaScript" , "React"],
        image: "/projects/Puzzle Word.png",
        github: "https://github.com/Tanushree-RD/vibe-quiz",
    },
    {
        title: "AI Resume Analyzer",
        description:
            "Built an AI Resume Analyzer that allows users to upload PDF resumes and receive AI-generated feedback and resume scores. Implemented PDF text extraction with PDF.js and integrated AI models to provide structured suggestions and improvements.",
        status: "in progress",
        techStack: [ "Tailwind", "Next.js", "puter.js"],
        image: "/projects/particle.png",
        github: " ",
        
    },
    {
        title: "Mini Projects",
        description:
            "Built several mini web applications using React, HTML, CSS, and JavaScript, including a Tic Tac Toe game with dynamic state management and a Weather App that fetches real-time data from external APIs. These projects helped strengthen frontend development skills and understanding of component-based UI design.",
        techStack: ["HTML", "CSS", "JavaScript"],
        image: "/projects/Screenshot 2026-03-05 215443.png",
        github: "https://github.com/SohaRatnam2005/Mini_Games",
        
    },
];

export default function ExperimentsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                    Projects
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                    A collection of things I&apos;ve built — from full-stack apps to fun
                    side projects. Each one taught me something new.
                </p>
            </header>

            {/* Projects List */}
            <section aria-label="Projects list" className="flex flex-col gap-6">
                {experiments.map((experiment) => (
                    <article
                        key={experiment.title}
                        className="group overflow-hidden rounded-lg border border-border transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
                    >
                        {/* Mobile Screenshot (portrait, centered — e.g. iBallBooster) */}
                        {experiment.image && experiment.isMobileScreenshot && (
                            <div className="flex justify-center items-center py-4">
                                <Image
                                    src={experiment.image}
                                    alt={`${experiment.title} UI`}
                                    width={220}
                                    height={420}
                                    className="rounded-xl object-contain shadow-md"
                                />
                            </div>
                        )}

                        {/* Landscape Preview Image (existing projects) */}
                        {experiment.image && !experiment.isMobileScreenshot && (
                            <div className="relative w-full h-48 overflow-hidden rounded-xl">
                                <Image
                                    src={experiment.image}
                                    alt={`${experiment.title} preview`}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                    sizes="(max-width: 672px) 100vw, 672px"
                                />
                            </div>
                        )}

                        {/* Card Content */}
                        <div className="p-5">
                            {/* Title + Status */}
                            <div className="flex items-center gap-3">
                                <h2 className="text-sm font-semibold text-foreground">
                                    {experiment.title}
                                </h2>
                                {experiment.status && (
                                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent-dark">
                                        {experiment.status}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className="mt-2 text-xs leading-relaxed text-muted">
                                {experiment.description}
                            </p>

                            {/* Tech Stack Badges */}
                            {experiment.techStack && experiment.techStack.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {experiment.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full bg-accent-soft/60 px-2.5 py-0.5 text-[10px] font-medium text-accent-dark transition-colors duration-200 hover:bg-accent-soft"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Links */}
                            <div className="mt-4 flex items-center gap-4">
                                <Link
                                    href={experiment.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                >
                                    GitHub →
                                </Link>
                                {experiment.downloadApk && (
                                    <Link
                                        href={experiment.downloadApk}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                    >
                                        Download APK →
                                    </Link>
                                )}
                                {experiment.live && (
                                    <Link
                                        href={experiment.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                    >
                                        Live Demo →
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
