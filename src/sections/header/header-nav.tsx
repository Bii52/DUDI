"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navItems } from "./nav-items";
import { useLang } from "@/hooks/lang-context";

export default function HeaderNav({ className = "" }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);
  const { t } = useLang();
  return (
    <nav className={`flex items-center gap-10 ${className}`}>
      {navItems.map((item) => {
        const isActive = activeSection === item.href.replace("/#", "");
        return (
          <Link
            key={item.name}
            href={item.href}
            className={`text-base font-medium transition-colors ${
              isActive 
                ? "text-primary" 
                : "text-sub-text hover:text-primary"
            }`}
          >
            {t(item.name)}
          </Link>
        );
      })}
    </nav>
  );
}
