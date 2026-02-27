import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects | Tanushree RD",
    description: "A collection of things I've built and explored.",
};

const experiments = [
    {
        title: "AI Wellness Hub",
        description:
            "A full-stack wellness platform powered by AI for personalized health recommendations and activity tracking.",
        tags: ["Next.js", "Python", "TailwindCSS", "OpenAI"],
        github: "https://github.com/Tanushree-RD",
        live: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
        github: "https://github.com/Tanushree-RD/my-portfolio",
        live: "#",
    },
    {
        title: "E-Commerce Dashboard",
        description:
            "An analytics dashboard for e-commerce businesses with real-time data visualization and sales tracking.",
        tags: ["React", "Chart.js", "Firebase", "TailwindCSS"],
        github: "https://github.com/Tanushree-RD",
    },
    {
        title: "Chat Application",
        description:
            "A real-time messaging app with WebSocket support, user authentication, and responsive design.",
        tags: ["Node.js", "Socket.io", "MongoDB", "React"],
        github: "https://github.com/Tanushree-RD",
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
                        <h2 className="text-sm font-semibold text-foreground">
                            {experiment.title}
                        </h2>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                            {experiment.description}
                        </p>

                        <div className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
                            {experiment.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[11px] text-muted/70"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-3 flex gap-4">
                            {experiment.github && (
                                <Link
                                    href={experiment.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                >
                                    GitHub
                                </Link>
                            )}
                            {experiment.live && (
                                <Link
                                    href={experiment.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                                >
                                    Live
                                </Link>
                            )}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
