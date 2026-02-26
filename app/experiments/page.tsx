import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Experiments | Tanushree RD",
    description: "A collection of things I've built and explored.",
};

const experiments = [
    {
        title: "AI Wellness Hub",
        description:
            "A full-stack wellness platform powered by AI for personalized health recommendations and activity tracking.",
        tags: ["Next.js", "Python", "TailwindCSS", "OpenAI"],
    },
    {
        title: "Portfolio Website",
        description:
            "A modern, responsive developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.",
        tags: ["Next.js", "TypeScript", "TailwindCSS"],
    },
    {
        title: "E-Commerce Dashboard",
        description:
            "An analytics dashboard for e-commerce businesses with real-time data visualization and sales tracking.",
        tags: ["React", "Chart.js", "Firebase", "TailwindCSS"],
    },
    {
        title: "Chat Application",
        description:
            "A real-time messaging app with WebSocket support, user authentication, and responsive design.",
        tags: ["Node.js", "Socket.io", "MongoDB", "React"],
    },
];

export default function ExperimentsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
            {/* Header */}
            <header className="mb-10 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Experiments
                </h1>
                <p className="mt-3 max-w-2xl text-base text-muted">
                    A collection of things I&apos;ve built — from full-stack apps to fun
                    side projects. Each one taught me something new and kept things interesting.
                </p>
            </header>

            {/* Experiments Grid */}
            <section aria-label="Experiments list" className="grid gap-6 sm:grid-cols-2">
                {experiments.map((experiment) => (
                    <article
                        key={experiment.title}
                        className="group rounded-xl border border-border bg-card p-6 shadow-md shadow-shadow transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-lg hover:shadow-shadow"
                    >
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-accent-dark transition-colors duration-200">
                            {experiment.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {experiment.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {experiment.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
