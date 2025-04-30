/**
 * File: App.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Entry point of the myCalculator app. 
 * It wraps the main screen in a ThemeProvider to manage global light/dark mode state.
 * Design Principles: Uses Composition over Inheritance, Single Responsibility Principle.
 */

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}
