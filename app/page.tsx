import Link from "next/link";

const experiments = [
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
      {/* ───────── Hero / Name & Intro ───────── */}
      <section className="relative overflow-hidden rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12 lg:p-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Left Side: Content */}
          <div className="relative z-10 flex flex-col items-start">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent-dark">
              Welcome to my corner of the internet
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-accent-dark">Tanushree RD</span>
            </h1>
            <p className="mt-6 text-xl font-medium text-foreground">
              Computer Science Undergraduate
            </p>
            <p className="mt-2 text-base leading-relaxed text-muted">
              Crafting beautiful and functional web apps.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/experiments"
                className="rounded-xl bg-accent px-8 py-3.5 text-sm font-bold text-foreground shadow-sm shadow-shadow transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:text-white hover:shadow-lg hover:shadow-shadow"
              >
                View Experiments
              </Link>
              <Link
                href="/contact"
                className="rounded-xl border-2 border-accent-soft px-8 py-3.5 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card-hover"
              >
                Say Hello
              </Link>
            </div>
          </div>

          {/* Right Side: Abstract Blob Graphic */}
          <div className="relative hidden w-full justify-center md:flex">
            {/* Subtle glow / blur drop-shadows behind */}
            <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-soft opacity-70 blur-3xl" />
            <div className="absolute top-1/2 left-1/3 h-56 w-56 -translate-y-1/3 rounded-full bg-secondary opacity-50 blur-3xl" />

            {/* Animated Blob */}
            <div className="relative z-10 h-72 w-72 animate-[spin_20s_linear_infinite] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-tr from-accent to-secondary opacity-80 shadow-[0_4px_30px_rgba(248,180,198,0.3)] transition-all duration-500 hover:scale-105 hover:opacity-100" />
          </div>
        </div>
      </section>

      {/* ───────── About ───────── */}
      <section aria-label="About me" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          About Me
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          I&apos;m a CS undergrad who enjoys making websites look clean and feel good to use.
          Currently learning full-stack development and exploring how design and functionality
          come together in real web apps. I care about the little details — the way a button
          feels when you hover over it, the whitespace that gives a layout room to breathe,
          the flow that makes a visitor want to keep scrolling.
        </p>
      </section>

      {/* ───────── Hobbies ───────── */}
      <section aria-label="Hobbies" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          When I&apos;m Not Coding
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          Apart from coding, I spend time playing football and throwball, occasionally playing chess, reading, singing, and also exploring things like fashion designing and makeup as creative interests.
        </p>
      </section>

      {/* ───────── Tech Stack ───────── */}
      <section aria-label="Tech stack" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Tech Stack
        </h2>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
          C, C++, HTML, CSS, JavaScript, React, Next.js, Node.js, Tailwind CSS, Firebase, Python
        </p>
      </section>

      {/* ───────── Experiments Overview ───────── */}
      <section aria-label="Experiments overview" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Experiments
            </h2>
            <p className="mt-2 text-sm text-muted">
              A few highlights from things I&apos;ve been building and exploring.
            </p>
          </div>
          <Link
            href="/experiments"
            className="hidden text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:inline-block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiments.map((experiment) => (
            <article
              key={experiment.title}
              className="group flex flex-col rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent hover:bg-card-hover hover:shadow-md hover:shadow-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-accent-dark">
                {experiment.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
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
        </div>

        <Link
          href="/experiments"
          className="mt-6 inline-block text-sm font-medium text-accent-dark transition-colors hover:text-accent sm:hidden"
        >
          View all experiments →
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
              Thoughts, tutorials, and things I&apos;ve been learning along the way.
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

      {/* ───────── Connect Section ───────── */}
      <section aria-label="Connect" className="mt-12 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-sm text-muted">
          Want to collaborate on something, chat about web dev, or just say hi?
          I&apos;d love to hear from you.
        </p>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
          <a
            href="https://github.com/Tanushree-RD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanushree-r-5a250a370"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/tanu_shree_rd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
          >
            Instagram
          </a>
          <a
            href="https://x.com/serotoninwave"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
          >
            Twitter / X
          </a>
          <a
            href="mailto:tanushreer021@gmail.com"
            className="text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
          >
            Email
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-accent-dark hover:text-white hover:shadow-lg hover:shadow-shadow"
          >
            Contact Page →
          </Link>
        </div>
      </section>
    </main>
  );
}
