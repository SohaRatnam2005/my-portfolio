import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Tanushree RD",
    description: "Get in touch — I'd love to hear from you.",
};

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Tanushree-RD",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tanushree-r-5a250a370",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/tanu_shree_rd",
    },
    {
        label: "Twitter / X",
        href: "https://x.com/serotoninwave",
    },
    {
        label: "Email",
        href: "mailto:tanushreer021@gmail.com",
    },
];

export default function ContactPage() {
    return (
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-16">
            {/* Header */}
            <header className="mb-10 rounded-xl bg-card p-8 shadow-md shadow-shadow sm:p-12">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Contact
                </h1>
                <p className="mt-3 max-w-2xl text-base text-muted">
                    Want to collaborate on something, chat about web dev, or just say hi?
                    I&apos;d love to connect — feel free to drop a message.
                </p>
            </header>

            <div className="grid gap-8 lg:grid-cols-2">
                {/* Contact Form */}
                <section
                    aria-label="Contact form"
                    className="rounded-xl bg-card p-8 shadow-md shadow-shadow"
                >
                    <form className="flex flex-col gap-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-1.5 block text-sm font-medium text-foreground"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your name"
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="mb-1.5 block text-sm font-medium text-foreground"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="message"
                                className="mb-1.5 block text-sm font-medium text-foreground"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell me about your project or idea..."
                                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder-muted outline-none transition-colors duration-200 focus:border-accent focus:ring-1 focus:ring-accent"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full cursor-pointer rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-accent-dark hover:text-white hover:shadow-lg hover:shadow-shadow active:scale-[0.98] sm:w-auto"
                        >
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Social Links */}
                <aside
                    aria-label="Social links"
                    className="flex flex-col gap-4"
                >
                    <div className="rounded-xl bg-card p-8 shadow-md shadow-shadow">
                        <h2 className="text-lg font-semibold text-foreground">
                            Find me on
                        </h2>
                        <div className="mt-4 flex flex-col gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.label === "Email" ? undefined : "_blank"}
                                    rel={social.label === "Email" ? undefined : "noopener noreferrer"}
                                    className="w-fit text-base font-medium text-accent-dark transition-colors hover:text-accent underline underline-offset-4"
                                >
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}
