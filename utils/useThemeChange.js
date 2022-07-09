import { useState, useEffect } from "react";
import { initLS, setLS } from "./localStorage";
import toggleTheme from "./theme";

export default function useThemeChange() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    initLS("theme", "dark", setTheme, toggleTheme);
  }, []);

  function handleThemeChange() {
    let newTheme = theme === "light" ? "dark" : "light";
    setLS("theme", newTheme, setTheme, toggleTheme);
  }
  return { theme, handleThemeChange };
}
