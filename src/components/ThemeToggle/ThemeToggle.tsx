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
      className={`theme-toggle ${isDarkTheme ? 'theme-toggle--dark' : 'theme-toggle--light'}`}
      onClick={toggleTheme}
      aria-label={isDarkTheme ? "Включить светлую тему" : "Включить тёмную тему"}
      type="button"
    >
      <div className="theme-toggle__switch">
        {/* Луна слева */}
        <div className="theme-toggle__option theme-toggle__option--left">🌙</div>
        {/* Солнце справа */}
        <div className="theme-toggle__option theme-toggle__option--right">☀️</div>
        {/* Активный индикатор — кольцо с прозрачным центром и мягким свечением */}
        <div className="theme-toggle__indicator"></div>
      </div>
      <span className="theme-toggle__text">
        {isDarkTheme ? "Темная тема" : "Светлая тема"}
      </span>
    </button>
  );
}