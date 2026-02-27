"use client";

import { useEffect, useRef, useState } from "react";

export default function FadeInSection({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const currentRef = domRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px 0px -40px 0px",
                threshold: 0.1,
            }
        );

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={domRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition:
                    "opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
        >
            {children}
        </section>
    );
}
