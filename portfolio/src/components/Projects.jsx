import React, { useState } from "react";
import { projects, projectFilters } from "../data/portfolioData";

const ProjectCard = ({ project, darkMode }) => {
  const cardBg = darkMode ? "#1c1c28" : "#f8f8fc";
  const border = "var(--border)";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";

  return (
    <div
      className="project-card relative flex flex-col gap-4 p-7 rounded-2xl border transition-all duration-250 cursor-default"
      style={{ background: cardBg, borderColor: border }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "rgba(124,109,250,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = border;
      }}
    >
      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
        style={{ background: "linear-gradient(135deg, var(--acc), var(--acc2))" }}
      >
        {project.icon}
      </div>

      {/* Title */}
      <h3 className="font-head font-semibold text-lg" style={{ color: text }}>
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed flex-1" style={{ color: textMuted }}>
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full border"
            style={{
              background: "var(--glow)",
              borderColor: border,
              color: "var(--acc2)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-auto pt-1">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all duration-200"
            style={{ borderColor: border, color: textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--acc)";
              e.currentTarget.style.background = "var(--glow)";
              e.currentTarget.style.color = "var(--acc2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = border;
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = textMuted;
            }}
          >
            ⬡ GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-lg border transition-all duration-200"
            style={{ borderColor: border, color: textMuted }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--acc)";
              e.currentTarget.style.background = "var(--glow)";
              e.currentTarget.style.color = "var(--acc2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = border;
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = textMuted;
            }}
          >
            ↗ Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = ({ darkMode }) => {
  const [active, setActive] = useState("all");

  const bg = darkMode ? "#13131a" : "#ffffff";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";
  const border = "var(--border)";

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <p className="fade-in text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--acc2)" }}>
          Work
        </p>
        <h2
          className="fade-in font-head font-bold tracking-tight mb-3"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: text }}
        >
          Featured Projects
        </h2>
        <p className="fade-in text-base mb-8" style={{ color: textMuted }}>
          A selection of projects that showcase my full-stack capabilities and problem-solving approach.
        </p>

        {/* Filter buttons */}
        <div className="fade-in flex flex-wrap gap-2 mb-10">
          {projectFilters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className="text-sm px-4 py-2 rounded-lg border transition-all duration-200 font-medium"
              style={{
                borderColor: active === f.key ? "var(--acc)" : border,
                background: active === f.key ? "var(--glow)" : "transparent",
                color: active === f.key ? "var(--acc2)" : textMuted,
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
