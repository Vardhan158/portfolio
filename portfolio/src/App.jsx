import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";
import useScrollFade from "./hooks/useScrollFade";

const App = () => {
  // Initialize theme from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Apply theme class to <html> for Tailwind dark mode
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (darkMode) {
      root.classList.add("dark");
      body.classList.remove("light-mode");
    } else {
      root.classList.remove("dark");
      body.classList.add("light-mode");
    }
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  // Register scroll-based fade-in animations
  useScrollFade();

  return (
    <div
      className={`min-h-screen transition-colors duration-400 ${
        darkMode ? "bg-dark-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Experience darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
      <ScrollTop />
    </div>
  );
};

export default App;