import React from "react";
import { personalInfo } from "../data/portfolioData";

const About = ({ darkMode }) => {
  const bg = darkMode ? "#13131a" : "#ffffff";
  const cardBg = darkMode ? "#1c1c28" : "#f8f8fc";
  const border = "var(--border)";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";
  const textFaint = darkMode ? "#5a5a70" : "#9ca3af";

  return (
    <section id="about" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <p className="section-label fade-in text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--acc2)" }}>
          About Me
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start mt-12">
          {/* Avatar Column */}
          <div className="fade-in flex flex-col items-center md:items-start gap-8">
            {/* Initials avatar */}
            <div className="relative">
              <div
                className="w-48 h-48 rounded-3xl flex items-center justify-center font-head font-extrabold text-6xl text-white"
                style={{
                  background: "linear-gradient(135deg, var(--acc), var(--acc3))",
                }}
              >
                H
              </div>
              {/* Outer border ring */}
              <div
                className="absolute -inset-1.5 rounded-[28px] border"
                style={{ borderColor: border }}
              />
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {personalInfo.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-head font-bold text-3xl"
                    style={{ color: "var(--acc2)" }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs uppercase tracking-widest mt-1"
                    style={{ color: textFaint }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text Column */}
          <div className="fade-in">
            <h2
              className="font-head font-bold text-3xl sm:text-4xl tracking-tight leading-tight mb-6"
              style={{ color: text }}
            >
              Full-Stack Developer
              <br />
              based in Bangalore
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: textMuted }}>
              I'm a passionate MERN Stack Developer with hands-on experience designing
              and developing scalable web applications. I thrive at the intersection of
              clean code and compelling user experiences.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: textMuted }}>
              When I'm not building apps, I'm exploring new technologies and refining my
              craft in modern web development. I believe in writing maintainable code
              that solves real problems — and delivers results.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: "Location", value: personalInfo.location, icon: "📍" },
                { label: "Email", value: personalInfo.email, icon: "✉️" },
                { label: "Phone", value: personalInfo.phone, icon: "📞" },
                { label: "Stack", value: "MERN + REST APIs", icon: "⚡" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 p-3.5 rounded-xl border"
                  style={{ background: cardBg, borderColor: border }}
                >
                  <span className="text-base">{item.icon}</span>
                  <div>
                    <div className="text-xs uppercase tracking-wider" style={{ color: textFaint }}>
                      {item.label}
                    </div>
                    <div className="text-sm font-medium truncate" style={{ color: text, maxWidth: 180 }}>
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
