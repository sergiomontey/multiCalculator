/**
 * File: CalculatorButton.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   A hybrid calculator button component that supports dynamic theming (light/dark)
 *   and fixed iOS-style types ('dark', 'light', 'accent', 'clear', 'default').
 *   This balances aesthetic consistency with dynamic adaptability.
 * Design Pattern:
 *   - Strategy Pattern via `type` mapping
 *   - Presentational Component Pattern
 * Principles:
 *   - Open/Closed Principle
 *   - Separation of Concerns
 *   - DRY (Don't Repeat Yourself)
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/buttonStyles';
import { colors } from '../styles/theme';
import { useTheme } from '../context/ThemeContext';

// Supported button types
type ButtonType = 'default' | 'clear' | 'dark' | 'light' | 'accent' | 'utility';

interface Props {
  label: string;
  onPress: () => void;
  type?: ButtonType;
}

export default function CalculatorButton({ label, onPress, type = 'default' }: Props) {
  const { isDark } = useTheme();
  const themeColors = isDark ? colors.dark : colors.light;

  // Style mapping strategy
  const styleMap: Record<ButtonType, any> = {
    default: [styles.button, { backgroundColor: themeColors.primary }],
    clear: [styles.clearButton],
    dark: [styles.button, styles.dark],
    light: [styles.button, styles.light],
    accent: [styles.button, styles.accent],
    utility: [styles.button, styles.utility],
  // Add more styles as needed
  };

  const textStyleMap: Record<ButtonType, any> = {
    default: [styles.text, { color: themeColors.text }],
    clear: styles.clearText,
    dark: styles.text,
    light: styles.text,
    accent: styles.text,
    utility: styles.text, // ✅ reuse default text style
  };

  return (
    <TouchableOpacity style={styleMap[type]} onPress={onPress}>
      <Text style={textStyleMap[type]}>{label}</Text>
    </TouchableOpacity>
  );
}
