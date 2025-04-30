/**
 * File: ThemeContext.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Manages app-wide theme state (light/dark mode) using React Context API.
 * Design Patterns: Context Pattern, State Pattern.
 * Principles: Single Responsibility Principle, Dependency Inversion.
 */

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ThemeContextProps {
  isDark: boolean;
  toggleTheme: () => void;
}

// Create context with default undefined
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Provider component that wraps the app and provides theme state
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
