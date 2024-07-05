"use client";
import { BsSun, BsMoon } from "react-icons/bs";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button onClick={toggleTheme} className="text-iconHeader transition-all duration-200 hover:text-sky-500">
      {theme === "light" ? <BsMoon className="text-orange-500 duration-300 hover:-rotate-[10deg]" /> : <BsSun className="text-sky-500 duration-300 hover:rotate-[30deg]" />}
    </button>
  );
};

export default ToggleTheme;
