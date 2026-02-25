"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight text-foreground transition-colors hover:text-accent-dark"
                >
                    &lt;Portfolio /&gt;
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-1">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                            ? "bg-accent-soft text-accent-dark"
                                            : "text-muted hover:bg-card-hover hover:text-foreground"
                                        }`}
                                >
                                    {label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-accent-dark" />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
