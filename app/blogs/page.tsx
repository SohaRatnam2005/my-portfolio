import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blogs | Portfolio",
    description: "Thoughts, tutorials, and insights on web development and tech.",
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
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
            {/* Header */}
            <header className="mb-10 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Blogs
                </h1>
                <p className="mt-3 max-w-2xl text-base text-muted">
                    I write about web development, design patterns, and the tools I use
                    day-to-day. Here are some of my latest posts.
                </p>
            </header>

            {/* Blog List */}
            <section aria-label="Blog posts" className="flex flex-col gap-6">
                {blogs.map((blog) => (
                    <article
                        key={blog.title}
                        className="group cursor-pointer rounded-xl border border-border bg-card p-6 shadow-md shadow-shadow transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-lg hover:shadow-shadow"
                    >
                        <div className="flex items-center gap-3 text-xs text-muted">
                            <time>{blog.date}</time>
                            <span className="h-1 w-1 rounded-full bg-accent" />
                            <span>{blog.readTime}</span>
                        </div>
                        <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:text-accent-dark transition-colors duration-200">
                            {blog.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                            {blog.excerpt}
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-accent-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Read more →
                        </span>
                    </article>
                ))}
            </section>
        </main>
    );
}
