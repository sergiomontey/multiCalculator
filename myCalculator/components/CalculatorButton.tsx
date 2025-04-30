/**
 * File: CalculatorButton.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Reusable button component for the calculator. Accepts a label and click handler.
 * Design Pattern: Presentational Component Pattern.
 * Principles: DRY, Separation of Concerns.
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonStyles from '../styles/buttonStyles';
import { colors } from '../styles/theme';
import { useTheme } from '../context/ThemeContext';

interface Props {
  label: string;
  onPress: () => void;
}

export default function CalculatorButton({ label, onPress }: Props) {
  const { isDark } = useTheme();
  const themeColors = isDark ? colors.dark : colors.light;

  return (
    <TouchableOpacity
      style={[buttonStyles.button, { backgroundColor: themeColors.primary }]}
      onPress={onPress}
    >
      <Text style={[buttonStyles.text, { color: themeColors.text }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
