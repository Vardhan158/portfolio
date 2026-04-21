import React, { useState, useEffect } from "react";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        width: 44,
        height: 44,
        borderRadius: 12,
        background: "linear-gradient(135deg, var(--acc), var(--acc2))",
        color: "#fff",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: 18,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.3s, transform 0.3s",
        zIndex: 999,
        pointerEvents: visible ? "auto" : "none",
        boxShadow: "0 4px 20px rgba(124,109,250,0.3)",
      }}
    >
      ↑
    </button>
  );
};

export default ScrollTop;
