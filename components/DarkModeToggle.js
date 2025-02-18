"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // On every render where isDarkMode changes, update the HTML class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className="dark-mode-button">
    <label className="relative inline-flex items-center cursor-pointer">
    {/* Hidden checkbox for accessibility */}
    <input
      type="checkbox"
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className="sr-only peer"
    />

    {/* Toggle background */}
    <div
      className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-grey-600 
                 dark:bg-gray-700 dark:peer-checked:bg-grey-400 transition-colors"
    ></div>

    {/* Toggle switch (thumb) */}
    <div
      className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full 
                  border border-gray-300 transition-transform 
                  peer-checked:translate-x-5 dark:border-gray-600`}
    ></div>

    {/* Optional label */}
    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      {isDarkMode ? "Dark" : "Light"}
    </span>
  </label>
  </div>
  );
}
