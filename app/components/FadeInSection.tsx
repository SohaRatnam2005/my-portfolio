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

        // Animate when the section comes into view
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        // Optionally unobserve if you only want it to animate once
                        // observer.unobserve(entry.target);
                    } else {
                        // Re-hide it when it leaves the viewport (optional, for repeatable scroll animations)
                        // Commenting this out makes it only animate once, which is usually preferred for a smooth experience
                        // setVisible(false);
                    }
                });
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.2, // Trigger when 20% of the section is visible
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
            className={`transition-all duration-1000 ease-out will-change-transform will-change-opacity ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </section>
    );
}
