/**
 * File: displayStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Styles specific to the calculator's display section where the result or input is shown.
 * Design Principle: Single Responsibility.
 */

import { StyleSheet } from 'react-native';
import { spacing, fontSizes } from './theme';

export default StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    padding: spacing.md,
    marginBottom: spacing.md,
    minHeight: 100,
    justifyContent: 'center',
  },
  displayText: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
  },
});
/**
 * This file contains styles specifically for the calculator's display component.
 * It ensures that the display is visually distinct and easy to read, with appropriate padding and font size.
 * The styles are defined using React Native's StyleSheet API for better performance.
 * 
 * * The display container is aligned to the end, with padding and margin for spacing.
 * The display text is styled with a larger font size and weight for better visibility
 */

 