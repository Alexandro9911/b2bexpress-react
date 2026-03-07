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
        {/* Верхний — тёмный кружок */}
        <div className="theme-toggle__option">
          <div className="theme-toggle__circle theme-toggle__circle--dark"></div>
        </div>
        {/* Нижний — светлый кружок */}
        <div className="theme-toggle__option">
          <div className="theme-toggle__circle theme-toggle__circle--light"></div>
        </div>
        {/* Прозрачное кольцо-индикатор */}
        <div className="theme-toggle__indicator"></div>
      </div>
      <span className="theme-toggle__text">
        {isDarkTheme ? "Темная тема" : "Светлая тема"}
      </span>
    </button>
  );
}