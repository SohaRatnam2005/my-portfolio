import Link from "next/link";

const experiments = [
  {
    title: "AI Wellness Hub",
    description: "A full-stack wellness platform powered by AI.",
  },
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio built with Next.js App Router.",
  },
  {
    title: "E-Commerce Dashboard",
    description: "An analytics dashboard for e-commerce with real-time data visualization.",
  },
];

const techStack = [
  "C",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Firebase",
  "Python",
];

export default function Home() {
  return (
    <main className="w-full">
      {/* ───────── Hero ───────── */}
      <section className="md:snap-start relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
        {/* Subtle background blob */}
        <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent opacity-40 blur-[100px] sm:h-[400px] sm:w-[400px] md:h-[600px] md:w-[600px]" />

        <p className="mb-6 z-10 text-sm font-semibold uppercase tracking-widest text-accent-dark md:text-lg">
          Welcome to my corner of the internet
        </p>
        <h1 className="z-10 text-6xl font-extrabold leading-tight tracking-tight text-foreground sm:text-7xl md:text-9xl">
          Tanushree <span className="text-accent-dark">RD</span>
        </h1>
        <p className="z-10 mt-8 max-w-2xl text-2xl font-light text-foreground md:text-5xl">
          Computer Science Undergrad
        </p>

        <div className="z-10 mt-12 flex flex-col gap-6 sm:flex-row md:mt-16">
          <Link
            href="/experiments"
            className="rounded-full bg-accent px-10 py-4 text-lg font-bold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-accent-dark hover:text-white hover:shadow-lg"
          >
            View Experiments
          </Link>
          <Link
            href="/contact"
            className="rounded-full border-2 border-accent-soft px-10 py-4 text-lg font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-card/50"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* ───────── About ───────── */}
      <section className="md:snap-start flex min-h-[100dvh] w-full flex-col items-center justify-center bg-card px-6 text-center">
        <h2 className="mb-12 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
          About Me
        </h2>
        <div className="max-w-5xl text-xl font-light leading-relaxed text-muted md:text-4xl md:leading-snug">
          <p className="mb-8">
            I&apos;m a developer who cares deeply about the details — the whitespace,
            the interactions, and the overall flow.
          </p>
          <p>
            When I&apos;m not coding, you can find me playing football,
            throwball, reading, or exploring fashion design.
          </p>
        </div>
      </section>

      {/* ───────── Experiments ───────── */}
      <section className="md:snap-start flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-16 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Experiments
        </h2>
        <div className="flex w-full max-w-4xl flex-col gap-16 md:gap-24">
          {experiments.map((exp) => (
            <Link
              href="/experiments"
              key={exp.title}
              className="group flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
            >
              <h3 className="text-4xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent-dark md:text-6xl">
                {exp.title}
              </h3>
              <p className="mt-6 max-w-2xl text-lg font-light text-muted md:text-3xl">
                {exp.description}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/experiments"
          className="mt-20 text-xl font-medium tracking-wide text-accent-dark transition-colors hover:text-accent md:text-2xl"
        >
          View all experiments →
        </Link>
      </section>

      {/* ───────── Tech Stack ───────── */}
      <section className="md:snap-start flex min-h-[100dvh] w-full flex-col items-center justify-center bg-card px-6 text-center">
        <h2 className="mb-16 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Tech Stack
        </h2>
        <div className="flex max-w-6xl flex-wrap justify-center gap-6 md:gap-10 lg:gap-14">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="cursor-default text-4xl font-black tracking-tight text-muted transition-colors hover:text-accent-dark md:text-6xl lg:text-8xl"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* ───────── Contact ───────── */}
      <section className="md:snap-start flex min-h-[100dvh] w-full flex-col items-center justify-center px-6 text-center">
        <h2 className="mb-12 text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
          Let&apos;s Connect
        </h2>
        <p className="mb-20 max-w-3xl text-2xl font-light text-muted md:text-4xl">
          Have an idea or just want to chat?
        </p>
        <div className="flex flex-col gap-10 sm:flex-row sm:gap-20">
          <a
            href="mailto:tanushreer021@gmail.com"
            className="text-4xl font-bold text-accent-dark decoration-accent-soft decoration-4 underline-offset-8 transition-transform hover:-translate-y-2 hover:text-accent hover:underline md:text-6xl"
          >
            Email
          </a>
          <a
            href="https://github.com/Tanushree-RD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold text-accent-dark decoration-accent-soft decoration-4 underline-offset-8 transition-transform hover:-translate-y-2 hover:text-accent hover:underline md:text-6xl"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tanushree-r-5a250a370"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl font-bold text-accent-dark decoration-accent-soft decoration-4 underline-offset-8 transition-transform hover:-translate-y-2 hover:text-accent hover:underline md:text-6xl"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}
