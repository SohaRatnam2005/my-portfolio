import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Tanushree RD",
    description: "A collection of things I've built and explored.",
};

const experiments = [
    {
        title: "Lunara",
        description:
            "Currently working on Lunara as an ongoing personal project.",
        status: "In Progress",
        github: "https://github.com/Tanushree-RD/lunara",
    },
    {
        title: "AI Job Checker",
        description:
            "A basic project exploring AI-based resume and job description comparison.",
        github: "https://github.com/Tanushree-RD/ai-job-checker",
    },
    {
        title: "Particle Playground",
        description:
            "A simple interactive particle simulation built for visual experimentation.",
        github: "https://github.com/Tanushree-RD/particle-playground",
    },
    {
        title: "Vibe Quiz",
        description:
            "A fun quiz-based web app built as a learning project.",
        github: "https://github.com/Tanushree-RD/vibe-quiz",
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
            <section aria-label="Projects list" className="flex flex-col gap-4">
                {experiments.map((experiment) => (
                    <article
                        key={experiment.title}
                        className="border border-border p-5 transition-all duration-200 hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-lg hover:shadow-shadow"
                    >
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
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                            {experiment.description}
                        </p>

                        <div className="mt-3">
                            <Link
                                href={experiment.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                            >
                                GitHub
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}

