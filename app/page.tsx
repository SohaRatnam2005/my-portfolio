"use client";

import { type ReactElement } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import FadeInSection from "./components/FadeInSection";

const techStack = [
  "c",
  "Java",
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "node",
  "tailwind",
  "MongoDB",
  "python",
  "git",
  "github",
];

const socials: { label: string; href: string; icon: ReactElement }[] = [
  {
    label: "GitHub",
    href: "https://github.com/SohaRatnam2005",
    icon: <FiGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soha-ratnam",
    icon: <FiLinkedin />,
  },
  { label: "Email", href: "mailto:soharatnam12095@gmail.com", icon: <FiMail /> },
];

const featuredProject = {
  title: "AI Resume Analyzer",
  description:
    "A privacy-first cycle intelligence platform that combines Flow, Mood, and Body tracking to generate adaptive insights based on personal health patterns.",
  status: "In Progress",
  techStack: [
    "React.js",
    "Puter.js",
    "TailwindCSS",
    "OpenAI API",
  ],
  github: "",
  live: "",
};

const latestBlog = {
  title: "Who Am I?",
  link: "https://medium.com/@serotoninwave/who-am-i-9d31559bd223",
  description:
    "A personal reflection about how I went from preparing for NEET to exploring coding, design, fashion, and still figuring life out at 18.",
  date: "Feb 28, 2026",
  readTime: "2 min read",
};

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
      {/* ───────── Intro ───────── */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hyy I&apos;m Soha Ratnam{" "}
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-foreground md:text-lg">
          CS Undergraduate
        </p>
      </section>

      {/* ───────── About ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          About
        </h2>
        <p className="text-sm leading-relaxed text-muted lowercase">
          CS undergrad obsessed with making things look clean and feel right.
          Currently digging into Web Dev and Data Structure & algorithms
        </p>
      </FadeInSection>

      {/* ───────── Other than tech ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Beyond Tech
        </h2>
        <p className="text-sm leading-relaxed text-muted lowercase">
          When I’m AFK, you’ll usually find me doing Pilates, reading something
          interesting, or getting lost in art and creative projects. I enjoy
          anything that lets me slow down, think deeply, and create something
          meaningful.
        </p>
      </FadeInSection>

      {/* ───────── Education ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Education
        </h2>

        <p className="text-sm font-medium text-foreground">
          JSS Academy of Technical Education
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          Bachelor of Technology (B.Tech) in Computer Science
        </p>
        <p className="mt-1 text-xs text-muted">2023 – 2027</p>
        <p className="mt-1 text-xs text-muted">Current CGPA: 8.9</p>

        <div className="mt-4">
          <p className="text-sm font-medium text-foreground">
            Meerut Public Girls' School
          </p>
          <p className="mt-1 text-xs text-muted">Class XII – 94%</p>
          <p className="mt-1 text-xs text-muted">Class X – 95%</p>
        </div>
      </FadeInSection>

      {/* ───────── Tech Stack ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Tech Stack
        </h2>
        <div className="marquee-container overflow-hidden">
          <div className="marquee-track flex w-max gap-3">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="whitespace-nowrap rounded-full border border-border px-3 py-1 text-[11px] text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* ───────── Socials ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Socials
        </h2>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label === "Email" ? undefined : "_blank"}
              rel={s.label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              className="text-foreground text-lg transition-all duration-200 hover:scale-125 hover:text-accent-dark hover:drop-shadow-[0_2px_8px_rgba(232,137,158,0.35)]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </FadeInSection>

      {/* ───────── Featured Project ───────── */}
      <FadeInSection className="mb-16">
        <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Featured Project
        </h2>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-6">
          {/* Project Card — matches /experiments card style */}
          <article className="group flex-1 border border-border p-5 transition-all duration-300 ease-out hover:scale-[1.02] hover:border-accent-dark/40 hover:shadow-[0_8px_30px_rgba(232,137,158,0.25)]">
            <div className="flex items-center gap-3">
              <h3 className="text-sm font-semibold text-foreground">
                {featuredProject.title}
              </h3>
              {featuredProject.status && (
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent-dark">
                  {featuredProject.status}
                </span>
              )}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted lowercase">
              {featuredProject.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {featuredProject.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
              >
                GitHub →
              </a>
              {featuredProject.live && (
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>

          {/* Show More button */}
          <Link
            href="/experiments"
            className="shrink-0 rounded-full border border-border px-5 py-2 text-xs font-medium text-foreground transition-all duration-200 hover:border-accent-dark/40 hover:text-accent-dark hover:shadow-[0_4px_16px_rgba(232,137,158,0.2)]"
          >
            Show More →
          </Link>
        </div>
      </FadeInSection>

      {/* ───────── Latest Blog ───────── */}
      
    </main>
  );
}
