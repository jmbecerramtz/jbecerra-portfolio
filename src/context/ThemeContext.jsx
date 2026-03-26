import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [isAutomatic, setIsAutomatic] = useState(true);

  // Check if current time is between 6 PM and 6 AM
  const shouldBeDark = () => {
    const hour = new Date().getHours();
    return hour >= 18 || hour < 6;
  };

  // Initialize theme on mount
  useEffect(() => {
    if (isAutomatic) {
      setIsDark(shouldBeDark());
    }
  }, [isAutomatic]);

  // Update theme based on time every minute
  useEffect(() => {
    if (!isAutomatic) return;

    const interval = setInterval(() => {
      setIsDark(shouldBeDark());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [isAutomatic]);

  // Apply theme to HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsAutomatic(false);
    setIsDark(!isDark);
  };

  const toggleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
    if (!isAutomatic) {
      setIsDark(shouldBeDark());
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, isAutomatic, toggleTheme, toggleAutomatic }}>
      {children}
    </ThemeContext.Provider>
  );
}
