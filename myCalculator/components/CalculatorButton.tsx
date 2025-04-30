/**
 * File: CalculatorButton.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   A reusable calculator button that supports both standard and clear-button styling,
 *   dynamically themed for dark and light modes.
 * Design Pattern:
 *   - Presentational Component Pattern
 *   - Strategy Pattern via conditional props
 * Principles Applied:
 *   - Separation of Concerns
 *   - Open/Closed Principle
 *   - DRY (Don't Repeat Yourself)
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../styles/buttonStyles';
import { colors } from '../styles/theme';
import { useTheme } from '../context/ThemeContext';

interface Props {
  label: string;
  onPress: () => void;
  type?: 'clear' | 'default';
}

export default function CalculatorButton({ label, onPress, type = 'default' }: Props) {
  const { isDark } = useTheme();
  const themeColors = isDark ? colors.dark : colors.light;

  const isClear = type === 'clear';

  const buttonStyle = isClear
    ? [styles.clearButton]
    : [styles.button, { backgroundColor: themeColors.primary }];

  const textStyle = isClear
    ? styles.clearText
    : [styles.text, { color: themeColors.text }];

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
}
