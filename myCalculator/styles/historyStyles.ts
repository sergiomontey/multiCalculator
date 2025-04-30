/**
 * File: historyStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Styles for displaying past calculation entries. Limits height and allows scrollable overflow.
 * Design Principle:
 *   - Responsive Layout
 *   - Encapsulation of UI Sections
 */

import { StyleSheet } from 'react-native';
import { spacing, fontSizes } from './theme';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: spacing.sm,
    padding: spacing.md,
    marginVertical: spacing.md,
    maxHeight: 120,
    minHeight: 60,
    overflow: 'scroll',
  },
  entry: {
    fontSize: fontSizes.md,
    marginBottom: spacing.xs,
  },
});
/**
 * This file contains styles specifically for the history section of the calculator.
 * It ensures that past calculation entries are displayed in a scrollable container with appropriate padding and font size.
 * The styles are defined using React Native's StyleSheet API for better performance.
 * 
 * The container has a border, rounded corners, and a maximum height to allow for scrolling when there are many entries.
 * Each entry is styled with a consistent font size and spacing for readability.
 */