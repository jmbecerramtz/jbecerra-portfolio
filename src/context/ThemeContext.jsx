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
    // Check localStorage first
    const saved = localStorage.getItem('theme-mode');
    const savedAutomatic = localStorage.getItem('theme-automatic');
    
    if (saved === 'dark' || saved === 'light') {
      setIsDark(saved === 'dark');
      setIsAutomatic(false);
    } else if (savedAutomatic === 'true') {
      setIsAutomatic(true);
      setIsDark(shouldBeDark());
    } else {
      // Default: auto mode
      setIsAutomatic(true);
      setIsDark(shouldBeDark());
    }
  }, []);

  // Update theme based on time every minute (only in automatic mode)
  useEffect(() => {
    if (!isAutomatic) return;

    const interval = setInterval(() => {
      setIsDark(shouldBeDark());
    }, 60000);

    return () => clearInterval(interval);
  }, [isAutomatic]);

  // Apply theme to HTML element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
    
    // Save to localStorage
    localStorage.setItem('theme-mode', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Save automatic mode preference
  useEffect(() => {
    localStorage.setItem('theme-automatic', isAutomatic);
  }, [isAutomatic]);

  const toggleTheme = () => {
    setIsAutomatic(false);
    setIsDark(!isDark);
  };

  const toggleAutomatic = () => {
    setIsAutomatic(!isAutomatic);
    if (!isAutomatic) {
      // Switching to automatic
      setIsDark(shouldBeDark());
    }
  };

  return (
    <ThemeContext.Provider value={{ isDark, isAutomatic, toggleTheme, toggleAutomatic }}>
      {children}
    </ThemeContext.Provider>
  );
}
