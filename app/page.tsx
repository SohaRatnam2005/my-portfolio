"use client";

import { type ReactElement } from "react";
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
  "c++",
  "html",
  "css",
  "javascript",
  "react",
  "nextjs",
  "node",
  "tailwind",
  "firebase",
  "python",
  "git",
  "github",
];

const socials: { label: string; href: string; icon: ReactElement }[] = [
  { label: "GitHub", href: "https://github.com/Tanushree-RD", icon: <FiGithub /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tanushree-r-5a250a370",
    icon: <FiLinkedin />,
  },
  { label: "Twitter", href: "https://x.com/serotoninwave", icon: <FiTwitter /> },
  { label: "Instagram", href: "https://www.instagram.com/tanu_shree_rd", icon: <FiInstagram /> },
  { label: "Email", href: "mailto:tanushreer021@gmail.com", icon: <FiMail /> },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
      {/* ───────── Intro ───────── */}
      <section className="mb-14">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hyy I&apos;m Tanushree{" "}
          <span className="text-muted">aka sero</span>
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
        <p className="text-sm leading-relaxed text-muted">
          CS undergraduate who enjoys making websites look clean and feel good
          to use. Currently learning backend + web3 mostly with Next.js, Node
          and Tailwind. Also working with Python, DSA and exploring AI/ML.
        </p>
      </FadeInSection>

      {/* ───────── Other than tech ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Other than tech
        </h2>
        <p className="text-sm leading-relaxed text-muted">
          Other than tech, I&apos;m also into fashion designing and upcycling
          clothes. I enjoy makeup as a creative skill, and spend my free time
          reading, playing football, or a game of chess.
        </p>
      </FadeInSection>

      {/* ───────── Education ───────── */}
      <FadeInSection className="mb-14">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Education
        </h2>
        <p className="text-sm font-medium text-foreground">
          St Joseph Engineering College
        </p>
        <p className="mt-1 text-sm leading-relaxed text-muted">
          B.Tech in Computer Science and Business Systems
        </p>
        <p className="mt-1 text-xs text-muted">2025 – 2029</p>
        <p className="mt-1 text-xs text-muted">CGPA: Yet to be announced</p>
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
      <section className="mb-10">
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
      </section>
    </main>
  );
}
