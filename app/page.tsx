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

const socials = [
  { label: "github", href: "https://github.com/Tanushree-RD" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/tanushree-r-5a250a370",
  },
  { label: "twitter", href: "https://x.com/serotoninwave" },
  { label: "instagram", href: "https://www.instagram.com/tanu_shree_rd" },
  { label: "email", href: "mailto:tanushreer021@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 py-16 font-[family-name:var(--font-jetbrains)]">
      {/* ───────── Intro ───────── */}
      <section className="mb-16">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Hyy I&apos;m Tanushree
        </h1>
        <p className="mt-4 text-base font-medium leading-relaxed text-foreground md:text-lg">
          cs undergraduate.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          learning backend + web3 mostly with nextjs, node and tailwind.
          <br />
          also doing python, dsa and exploring ai/ml.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          currently trying to figure out whether i like frontend or just making
          things look pretty.
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted">
          i also like playing football, throwball and chess when i&apos;m not
          coding.
          <br />
          sometimes i read, sing or try fashion design and makeup stuff too.
        </p>
      </section>

      {/* ───────── Tech Stack ───────── */}
      <section className="mb-16">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="border border-border px-2.5 py-1 text-[11px] text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ───────── Socials ───────── */}
      <section className="mb-10">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent-dark">
          Socials
        </h2>
        <ul className="space-y-2">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.label === "email" ? undefined : "_blank"}
                rel={s.label === "email" ? undefined : "noopener noreferrer"}
                className="text-xs text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent-dark hover:decoration-accent-dark"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
