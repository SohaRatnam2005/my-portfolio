import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Tanushree RD",
    description:
        "Personal reflections, musings, and thoughts on life — published on Medium.",
};

const blogs = [
    {
        title: "Who Am I?",
        link: "https://medium.com/@serotoninwave/who-am-i-9d31559bd223",
        description:
            "A personal reflection about how I went from preparing for NEET to exploring coding, design, fashion, and still figuring life out at 18.",
        date: "Feb 28, 2026",
        readTime: "2 min read",
    },
    {
        title: "No One Will Remember, So Why Take Life So Seriously?",
        link: "https://medium.com/@serotoninwave/no-one-will-remember-so-why-take-life-so-seriously-5b7dfb646b43",
        description:
            "A short reflection on why overthinking mistakes is pointless when most things won't matter in the long run.",
        date: "Aug 24, 2025",
        readTime: "2 min read",
    },
];

export default function BlogsPage() {
    return (
        <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
            {/* Header */}
            <header className="mb-12">
                <h1 className="text-lg font-semibold tracking-tight text-foreground">
                    Blog
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                    Personal reflections and musings — published on Medium.
                </p>
            </header>

            {/* Blog List */}
            <section aria-label="Blog posts" className="flex flex-col gap-4">
                {blogs.map((blog) => (
                    <a
                        key={blog.title}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border border-border p-5 no-underline transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]"
                    >
                        <article>
                            <div className="flex items-center gap-2 text-[11px] text-muted">
                                <time>{blog.date}</time>
                                <span>·</span>
                                <span>{blog.readTime}</span>
                            </div>

                            <h2 className="mt-2 text-sm font-semibold text-foreground">
                                {blog.title}
                            </h2>
                            <p className="mt-2 text-xs leading-relaxed text-muted">
                                {blog.description}
                            </p>

                            <span className="mt-3 inline-block text-xs text-accent-dark underline decoration-border underline-offset-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                                Read on Medium →
                            </span>
                        </article>
                    </a>
                ))}
            </section>
        </main>
    );
}

