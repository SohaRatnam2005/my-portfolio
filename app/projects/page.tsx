import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Portfolio",
    description: "A showcase of my featured projects and work.",
};

const projects = [
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

export default function ProjectsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
            {/* Header */}
            <header className="mb-10 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Projects
                </h1>
                <p className="mt-3 max-w-2xl text-base text-muted">
                    A collection of things I&apos;ve built — from full-stack apps to fun
                    experiments. Each project reflects my curiosity and love for clean
                    code.
                </p>
            </header>

            {/* Project Grid */}
            <section aria-label="Project list" className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group rounded-xl border border-border bg-card p-6 shadow-md shadow-shadow transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-lg hover:shadow-shadow"
                    >
                        <h2 className="text-xl font-semibold text-foreground group-hover:text-accent-dark transition-colors duration-200">
                            {project.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {project.description}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
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
