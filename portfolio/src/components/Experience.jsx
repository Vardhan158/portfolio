import React from "react";
import { experience } from "../data/portfolioData";

const TimelineItem = ({ item, darkMode, isLast }) => {
  const cardBg = darkMode ? "#1c1c28" : "#ffffff";
  const border = "var(--border)";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";
  const dotColor = item.color === "green" ? "var(--acc3)" : "var(--acc)";

  return (
    <div className={`fade-in relative pl-8 ${isLast ? "" : "pb-12"}`}>
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2"
        style={{
          background: dotColor,
          borderColor: darkMode ? "#0a0a0f" : "#f8f8fc",
          boxShadow: `0 0 0 3px ${item.color === "green" ? "rgba(6,214,160,0.2)" : "rgba(124,109,250,0.2)"}`,
        }}
      />

      {/* Type label */}
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-2"
        style={{ color: item.color === "green" ? "var(--acc3)" : "var(--acc2)" }}
      >
        {item.type}
      </p>

      {/* Card */}
      <div
        className="p-6 rounded-2xl border"
        style={{ background: cardBg, borderColor: border }}
      >
        <h3
          className="font-head font-bold text-xl mb-1"
          style={{ color: text }}
        >
          {item.title}
        </h3>
        <p
          className="text-sm font-medium mb-1"
          style={{ color: "var(--acc2)" }}
        >
          {item.org}
        </p>
        <p className="text-xs mb-4" style={{ color: darkMode ? "#5a5a70" : "#9ca3af" }}>
          {item.period}
        </p>

        {item.points.length > 0 && (
          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-relaxed"
                style={{ color: textMuted }}
              >
                <span
                  className="mt-0.5 shrink-0 text-xs font-bold"
                  style={{ color: "var(--acc)" }}
                >
                  →
                </span>
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const Experience = ({ darkMode }) => {
  const bg = darkMode ? "#0a0a0f" : "#f8f8fc";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";

  return (
    <section id="experience" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <p className="fade-in text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--acc2)" }}>
          Journey
        </p>
        <h2
          className="fade-in font-head font-bold tracking-tight mb-3"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: text }}
        >
          Experience & Education
        </h2>
        <p className="fade-in text-base max-w-xl mb-12" style={{ color: textMuted }}>
          My professional journey — from education to building real-world products.
        </p>

        {/* Timeline */}
        <div
          className="relative pl-0 timeline-line"
          style={{ paddingLeft: "0" }}
        >
          {/* Vertical line */}
          <div
            className="absolute left-1.5 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--acc), transparent 90%)",
            }}
          />

          <div className="flex flex-col">
            {experience.map((item, i) => (
              <TimelineItem
                key={i}
                item={item}
                darkMode={darkMode}
                isLast={i === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
