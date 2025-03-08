import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"; // Load from storage
  });

  useEffect(() => {
    document.body.style.backgroundColor = theme === "dark" ? "#333" : "#fff";
    document.body.style.color = theme === "dark" ? "#fff" : "#000";
    localStorage.setItem("theme", theme); // Save to storage
  }, [theme]); // Runs ONLY when `theme` changes

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Current Theme: {theme.toUpperCase()}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}
