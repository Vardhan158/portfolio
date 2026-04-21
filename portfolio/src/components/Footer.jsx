import React from "react";
import { personalInfo } from "../data/portfolioData";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icons = {
  linkedin: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  email: (
    <svg {...iconProps} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  github: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 4.8 4.9 4.9 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 4.8a5.3 5.3 0 0 0-1.3 3.9c0 5.2 3.2 6.4 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  ),
};

const Footer = ({ darkMode }) => {
  const bg = darkMode ? "#0a0a0f" : "#f8f8fc";
  const border = "var(--border)";
  const textFaint = darkMode ? "#5a5a70" : "#9ca3af";
  const socialBg = darkMode ? "#1c1c28" : "#ffffff";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";

  const socials = [
    { icon: icons.linkedin, href: personalInfo.linkedin, title: "LinkedIn" },
    { icon: icons.email, href: `mailto:${personalInfo.email}`, title: "Email" },
    { icon: icons.github, href: personalInfo.github, title: "GitHub" },
  ];

  return (
    <footer
      className="px-6 py-8 border-t"
      style={{ background: bg, borderColor: border }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div
          className="font-head font-bold text-lg gradient-text"
          style={{ letterSpacing: "-0.5px" }}
        >
          {personalInfo.shortName} · Portfolio
        </div>

        <p
          className="text-xs text-center order-3 sm:order-2"
          style={{ color: textFaint }}
        >
          © {new Date().getFullYear()} {personalInfo.name} · MERN Stack
          Developer · <span style={{ color: "var(--acc)" }}>Bangalore, India</span>
        </p>

        <div className="flex gap-2 order-2 sm:order-3">
          {socials.map((s) => (
            <a
              key={s.title}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={s.title}
              className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200"
              style={{
                background: socialBg,
                borderColor: border,
                color: textMuted,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--acc)";
                e.currentTarget.style.color = "var(--acc2)";
                e.currentTarget.style.background = "var(--glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = border;
                e.currentTarget.style.color = textMuted;
                e.currentTarget.style.background = socialBg;
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
