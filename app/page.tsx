import Link from "next/link";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Django", icon: "🐍" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Firebase", icon: "🔥" },
  { name: "Node.js", icon: "🟢" },
  { name: "MongoDB", icon: "🍃" },
];

const projects = [
  {
    title: "AI Wellness Hub",
    description:
      "A full-stack wellness platform powered by AI for personalized health recommendations and daily activity tracking.",
    tags: ["Next.js", "Python", "TailwindCSS", "OpenAI"],
  },
  {
    title: "Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js App Router, TypeScript, and Tailwind CSS with elegant design.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "An analytics dashboard for e-commerce with real-time data visualization, sales insights, and inventory management.",
    tags: ["React", "Chart.js", "Firebase"],
  },
];

const blogs = [
  {
    title: "Getting Started with Next.js App Router",
    excerpt:
      "A beginner-friendly guide to understanding layouts, loading states, and server components in the new App Router.",
    date: "Jan 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "Why TypeScript Is Worth the Learning Curve",
    excerpt:
      "How TypeScript improves developer experience, catches bugs early, and scales gracefully in large codebases.",
    date: "Dec 28, 2025",
    readTime: "4 min read",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
      {/* ───────── Hero / Name & College ───────── */}
      <section className="rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent-dark">
          Welcome to my portfolio
        </p>
        <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          Hi, I&apos;m{" "}
          <span className="text-accent-dark">Your Name</span>
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          B.Tech Student at{" "}
          <span className="font-semibold text-foreground">Your College Name</span>{" "}
          — passionate about building modern web experiences with clean code and
          thoughtful design.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-accent-dark hover:text-white hover:shadow-lg hover:shadow-shadow"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:border-accent hover:bg-card-hover"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* ───────── Tech Stack ───────── */}
      <section aria-label="Tech stack" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Tech Stack
        </h2>
        <p className="mt-2 text-sm text-muted">
          Technologies &amp; tools I work with on a daily basis.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 transition-all duration-200 hover:border-accent hover:bg-card-hover hover:shadow-sm hover:shadow-shadow"
            >
              <span className="text-lg">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Projects Overview ───────── */}
      <section aria-label="Projects overview" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Projects
            </h2>
            <p className="mt-2 text-sm text-muted">
              A few highlights from my recent work.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:inline-block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
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
        </div>

        <Link
          href="/projects"
          className="mt-6 inline-block text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:hidden"
        >
          View all projects →
        </Link>
      </section>

      {/* ───────── Blog Section Preview ───────── */}
      <section aria-label="Blog preview" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Latest from the Blog
            </h2>
            <p className="mt-2 text-sm text-muted">
              Thoughts, tutorials, and insights on web development.
            </p>
          </div>
          <Link
            href="/blogs"
            className="hidden text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:inline-block"
          >
            Read all →
          </Link>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="group cursor-pointer rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
            >
              <div className="flex items-center gap-3 text-xs text-muted">
                <time>{blog.date}</time>
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span>{blog.readTime}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                {blog.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {blog.excerpt}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-accent-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Read more →
              </span>
            </article>
          ))}
        </div>

        <Link
          href="/blogs"
          className="mt-6 inline-block text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:hidden"
        >
          Read all posts →
        </Link>
      </section>

      {/* ───────── Contact Section ───────── */}
      <section aria-label="Contact" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 max-w-xl text-sm text-muted">
          Have a project idea, want to collaborate, or just want to say hello?
          I&apos;d love to hear from you.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">
              ✉️
            </span>
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="text-sm font-medium text-foreground">
                your.email@example.com
              </p>
            </div>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">
              🔗
            </span>
            <div>
              <p className="text-xs text-muted">GitHub</p>
              <p className="text-sm font-medium text-foreground">@yourusername</p>
            </div>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-lg">
              💼
            </span>
            <div>
              <p className="text-xs text-muted">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">Your Name</p>
            </div>
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-accent-dark hover:text-white hover:shadow-lg hover:shadow-shadow"
          >
            Send a Message →
          </Link>
        </div>
      </section>
    </main>
  );
}
