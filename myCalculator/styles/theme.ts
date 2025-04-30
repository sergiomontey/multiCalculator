/**
 * File: theme.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Defines the shared design tokens used throughout the app, including colors, spacing, and font sizes.
 * Design Pattern: Centralized Theme Configuration (Token Pattern).
 * Principles: DRY, Scalability, Reusability.
 */

export const colors = {
    light: {
      background: '#FFFFFF',
      primary: '#673AB7',
      text: '#000000',
      accent: '#B71C1C',
      inputBackground: '#F5F5F5',
    },
    dark: {
      background: '#121212',
      primary: '#9575CD',
      text: '#FFFFFF',
      accent: '#FF5252',
      inputBackground: '#2C2C2C',
    },
  };
  
  export const spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  };
  
  export const fontSizes = {
    sm: 14,
    md: 18,
    lg: 24,
    xl: 36,
    xxl: 48,
  };
  