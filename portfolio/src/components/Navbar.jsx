import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = ({ darkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = darkMode
    ? scrolled
      ? "bg-dark-900/90 backdrop-blur-xl border-b border-white/5"
      : "bg-transparent"
    : scrolled
    ? "bg-white/90 backdrop-blur-xl border-b border-black/5"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}
      style={{ height: 64 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-head font-extrabold text-xl tracking-tight gradient-text"
        >
          {personalInfo.shortName}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 rounded-lg transition-all duration-200 ${
                darkMode
                  ? "text-white/50 hover:text-purple-300 hover:bg-white/5"
                  : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`ml-2 w-9 h-9 rounded-xl border text-base flex items-center justify-center transition-all duration-200 ${
              darkMode
                ? "border-white/10 bg-white/5 text-white/50 hover:border-purple-400 hover:text-purple-300"
                : "border-black/10 bg-black/5 text-gray-500 hover:border-purple-400 hover:text-purple-600"
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-xl border text-sm flex items-center justify-center ${
              darkMode
                ? "border-white/10 bg-white/5 text-white/50"
                : "border-black/10 bg-black/5 text-gray-500"
            }`}
          >
            {darkMode ? "☀" : "☾"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-9 h-9 rounded-xl border flex flex-col items-center justify-center gap-1 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-black/10 bg-black/5"
            }`}
          >
            <span className={`block w-4 h-0.5 transition-all ${darkMode ? "bg-white/60" : "bg-gray-500"} ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block w-4 h-0.5 transition-all ${darkMode ? "bg-white/60" : "bg-gray-500"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-4 h-0.5 transition-all ${darkMode ? "bg-white/60" : "bg-gray-500"} ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden px-6 pb-4 pt-2 flex flex-col gap-1 border-t ${
            darkMode
              ? "bg-dark-900/95 border-white/5"
              : "bg-white/95 border-black/5"
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm px-3 py-2.5 rounded-lg transition-colors ${
                darkMode
                  ? "text-white/60 hover:text-purple-300 hover:bg-white/5"
                  : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
