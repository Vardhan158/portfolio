import React from "react";
import { skills } from "../data/portfolioData";

const Skills = ({ darkMode }) => {
  const bg = darkMode ? "#0a0a0f" : "#f8f8fc";
  const cardBg = darkMode ? "#1c1c28" : "#ffffff";
  const tagBg = darkMode ? "#252535" : "#f0f0f8";
  const border = "var(--border)";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";

  return (
    <section id="skills" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="fade-in text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--acc2)" }}
        >
          Technical Skills
        </p>
        <h2
          className="fade-in font-head font-bold tracking-tight mb-3"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: text }}
        >
          My Tech Stack
        </h2>
        <p
          className="fade-in text-base max-w-xl mb-12"
          style={{ color: textMuted }}
        >
          A curated set of technologies I work with to build modern,
          performant, full-stack applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((cat, i) => (
            <div
              key={cat.category}
              className="fade-in p-6 rounded-2xl border"
              style={{
                background: cardBg,
                borderColor: border,
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div
                className="text-xs font-semibold tracking-widest uppercase pb-3 mb-5 border-b"
                style={{ color: "var(--acc2)", borderColor: border }}
              >
                {cat.category}
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-lg border cursor-default transition-all duration-200"
                    style={{
                      background: tagBg,
                      borderColor: border,
                      color: text,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--acc)";
                      e.currentTarget.style.background = "var(--glow)";
                      e.currentTarget.style.color = "var(--acc2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = border;
                      e.currentTarget.style.background = tagBg;
                      e.currentTarget.style.color = text;
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
