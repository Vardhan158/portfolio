import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const icons = {
  phone: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.28a2 2 0 0 1 2.11-.45c.85.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  ),
  email: (
    <svg {...iconProps} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  github: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8A5.3 5.3 0 0 0 19 4.8 4.9 4.9 0 0 0 18.9 1S17.7.7 15 2.5a13.4 13.4 0 0 0-6 0C6.3.7 5.1 1 5.1 1A4.9 4.9 0 0 0 5 4.8a5.3 5.3 0 0 0-1.3 3.9c0 5.2 3.2 6.4 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
    </svg>
  ),
  location: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  ),
};

const Contact = ({ darkMode }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const bg = darkMode ? "#13131a" : "#ffffff";
  const cardBg = darkMode ? "#1c1c28" : "#f8f8fc";
  const inputBg = darkMode ? "#252535" : "#f0f0f8";
  const border = "var(--border)";
  const text = darkMode ? "#e8e8f0" : "#0a0a1a";
  const textMuted = darkMode ? "#9090a8" : "#6b7280";
  const textFaint = darkMode ? "#5a5a70" : "#9ca3af";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: icons.phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: icons.email,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: icons.linkedin,
      label: "LinkedIn",
      value: "harshavardhan-devang1508",
      href: personalInfo.linkedin,
    },
    {
      icon: icons.github,
      label: "GitHub",
      value: "Vardhan158",
      href: personalInfo.github,
    },
    {
      icon: icons.location,
      label: "Location",
      value: personalInfo.location,
      href: null,
    },
  ];

  const inputStyle = {
    background: inputBg,
    border: `0.5px solid var(--border)`,
    borderRadius: 10,
    padding: "12px 14px",
    color: text,
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14.5,
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
  };

  return (
    <section id="contact" className="py-24 px-6" style={{ background: bg }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="fade-in text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--acc2)" }}
        >
          Get in Touch
        </p>
        <h2
          className="fade-in font-head font-bold tracking-tight mb-3"
          style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: text }}
        >
          Let's Build Something
        </h2>
        <p
          className="fade-in text-base max-w-xl mb-12"
          style={{ color: textMuted }}
        >
          Have a project in mind or just want to say hello? My inbox is always
          open.
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="fade-in flex flex-col gap-4">
            {contactItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-200"
                  style={{
                    background: cardBg,
                    borderColor: border,
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--acc)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.borderColor = border)
                  }
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--glow)",
                      border: `0.5px solid ${border}`,
                      color: "var(--acc2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: textFaint }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: text }}
                    >
                      {item.value}
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-5 rounded-2xl border"
                  style={{ background: cardBg, borderColor: border }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "var(--glow)",
                      border: `0.5px solid ${border}`,
                      color: "var(--acc2)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: textFaint }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: text }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          <form className="fade-in flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs uppercase tracking-wider"
                  style={{ color: textFaint }}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  className="form-input"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="text-xs uppercase tracking-wider"
                  style={{ color: textFaint }}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@email.com"
                  required
                  style={inputStyle}
                  className="form-input"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs uppercase tracking-wider"
                style={{ color: textFaint }}
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project collaboration..."
                style={inputStyle}
                className="form-input"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                className="text-xs uppercase tracking-wider"
                style={{ color: textFaint }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={sending || sent}
              className="w-full py-3.5 rounded-xl font-medium text-sm text-white transition-all duration-200"
              style={{
                background: sent
                  ? "linear-gradient(135deg, var(--acc3), #059669)"
                  : "linear-gradient(135deg, var(--acc), var(--acc2))",
                opacity: sending ? 0.7 : 1,
              }}
            >
              {sent ? "Message Sent!" : sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
