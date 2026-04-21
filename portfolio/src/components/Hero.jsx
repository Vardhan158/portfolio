import React from "react";
import { personalInfo, typingRoles } from "../data/portfolioData";
import useTyping from "../hooks/useTyping";
import resumePdf from "../HARSHAVARDHAN M V-1 (1).pdf";
import profilePlaceholder from "../assets/IMG-20250301-WA0000.jpg";

const Hero = ({ darkMode }) => {
  const typed = useTyping(typingRoles);

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex items-center pt-28 pb-20 px-6 overflow-hidden ${darkMode ? "bg-dark-900" : "bg-gray-50"
        }`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(ellipse 60% 50% at 70% 32%, rgba(124,109,250,0.16), transparent), radial-gradient(ellipse 40% 40% at 18% 78%, rgba(6,214,160,0.08), transparent)"
            : "radial-gradient(ellipse 60% 50% at 70% 32%, rgba(91,78,232,0.09), transparent), radial-gradient(ellipse 40% 40% at 18% 78%, rgba(5,150,105,0.05), transparent)",
        }}
      />

      <div className="absolute inset-0 hero-grid pointer-events-none opacity-100" />

      <div className="relative max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-20 items-center">
          <div>
            <div
              className="animate-fadeUp inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-sm font-medium mb-7"
              style={{
                borderColor: "var(--border)",
                background: "var(--glow)",
                color: "var(--acc2)",
                animationDelay: "0s",
              }}
            >
              <span className="badge-dot" />
              Available for new opportunities
            </div>

            <h1
              className="font-head font-extrabold tracking-tighter leading-none mb-5"
              style={{
                fontSize: "clamp(44px, 7vw, 96px)",
                color: darkMode ? "#e8e8f0" : "#0a0a1a",
                animation: "fadeUp 0.7s ease 0.1s both",
              }}
            >
              {personalInfo.name.split(" ").slice(0, 1).join(" ")}
              <span className="gradient-text block sm:inline">
                {" "}
                {personalInfo.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            <div
              className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 min-h-[2.5rem]"
              style={{
                color: darkMode ? "rgba(144,144,168,1)" : "#6b7280",
                animation: "fadeUp 0.7s ease 0.2s both",
              }}
            >
              <span>{typed}</span>
              <span className="cursor ml-0.5">|</span>
            </div>

            <p
              className="text-base sm:text-lg max-w-xl leading-relaxed mb-10"
              style={{
                color: darkMode ? "rgba(144,144,168,0.9)" : "#6b7280",
                animation: "fadeUp 0.7s ease 0.3s both",
              }}
            >
              {personalInfo.description}
            </p>

            <div
              className="flex flex-wrap gap-3"
              style={{ animation: "fadeUp 0.7s ease 0.4s both" }}
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, var(--acc), var(--acc2))",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "0.5px solid var(--border)",
                  color: darkMode ? "#e8e8f0" : "#0a0a1a",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--glow)";
                  e.currentTarget.style.borderColor = "var(--acc)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                Contact Me
              </a>
              <a
                href={resumePdf}
                download="Harshavardhan-MV-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  border: "0.5px solid var(--border)",
                  color: darkMode ? "#e8e8f0" : "#0a0a1a",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--glow)";
                  e.currentTarget.style.borderColor = "var(--acc)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            className="relative flex justify-center lg:justify-end"
            style={{ animation: "fadeUp 0.8s ease 0.25s both" }}
          >
            <div
              className="w-full max-w-[580px] flex items-center justify-center"
              style={{
                minHeight: "460px",
              }}
            >
              <img
                src={profilePlaceholder}
                alt={`${personalInfo.name} professional portrait`}
                className="block w-full max-h-[460px] sm:max-h-[620px] h-auto object-contain object-center rounded-[32px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
