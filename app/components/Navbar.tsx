"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    { href: "/", label: "home" },
    { href: "/experiments", label: "projects" },
    { href: "/blogs", label: "blogs" },
    { href: "/contact", label: "contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm font-[family-name:var(--font-jetbrains)]">
            <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-3">
                {/* Logo */}
                <Link
                    href="/"
                    className="text-sm tracking-tight text-foreground transition-colors hover:text-accent-dark"
                >
                    tanushree rd
                </Link>

                {/* Navigation Links */}
                <ul className="flex items-center gap-5">
                    {navLinks.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`text-xs tracking-tight transition-colors ${isActive
                                            ? "text-foreground underline decoration-foreground underline-offset-4"
                                            : "text-muted hover:text-foreground"
                                        }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
