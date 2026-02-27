import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Tanushree RD",
    description:
        "Thoughts, tutorials, and insights on web development and tech.",
};

const blogs = [
    {
        title: "Getting Started with Next.js App Router",
        excerpt:
            "An in-depth guide to understanding the new App Router in Next.js — layouts, loading states, and server components explained.",
        date: "Jan 15, 2026",
        readTime: "6 min read",
    },
    {
        title: "Why TypeScript Is Worth the Learning Curve",
        excerpt:
            "Exploring the benefits of TypeScript in large codebases and how it improves developer experience and code reliability.",
        date: "Dec 28, 2025",
        readTime: "4 min read",
    },
    {
        title: "Building Responsive UIs with Tailwind CSS",
        excerpt:
            "Tips and patterns for creating beautiful, mobile-first layouts using utility-first CSS with Tailwind.",
        date: "Nov 10, 2025",
        readTime: "5 min read",
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
                    Thoughts on web development, design patterns, and the tools I use
                    day-to-day.
                </p>
            </header>

            {/* Blog List */}
            <section aria-label="Blog posts" className="flex flex-col gap-4">
                {blogs.map((blog) => (
                    <article
                        key={blog.title}
                        className="group cursor-pointer border border-border p-5 transition-all duration-200 hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-lg hover:shadow-shadow"
                    >
                        <div className="flex items-center gap-2 text-[11px] text-muted">
                            <time>{blog.date}</time>
                            <span>·</span>
                            <span>{blog.readTime}</span>
                        </div>

                        <h2 className="mt-2 text-sm font-semibold text-foreground">
                            {blog.title}
                        </h2>
                        <p className="mt-2 text-xs leading-relaxed text-muted">
                            {blog.excerpt}
                        </p>

                        <span className="mt-3 inline-block text-xs text-accent-dark underline decoration-border underline-offset-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Read more →
                        </span>
                    </article>
                ))}
            </section>
        </main>
    );
}
