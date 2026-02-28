import { useState, useEffect } from "react";
import "./themeToggle.sass";

export default function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      <span className="theme-toggle__icon">{isDarkTheme ? "🌙" : "☀️"}</span>
      <span className="theme-toggle__text">
        {isDarkTheme ? "Темная тема" : "Светлая тема"}
      </span>
    </button>
  );
}