/**
 * File: buttonStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Styles for calculator buttons with tighter column spacing and centered layout.
 *   Supports iOS-style circular buttons and a rectangular "Clear History" button.
 * Design Principles:
 *   - Tight Grid Spacing
 *   - Visual Consistency
 *   - Modular Styling
 */

import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from './theme';

const buttonSize = 65;
const buttonBorderRadius = buttonSize / 2;

export default StyleSheet.create({
  button: {
    width: buttonSize,
    height: buttonSize,
    marginHorizontal: 2,       // tightened column spacing
    marginVertical: 4,         // optional tighter row spacing
    borderRadius: buttonBorderRadius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  dark: {
    backgroundColor: '#505050',
  },
  light: {
    backgroundColor: '#D4D4D2',
  },
  accent: {
    backgroundColor: '#FF9500',
  },
  clearButton: {
    width: 200,
    height: 45,
    backgroundColor: '#EF4444',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  clearText: {
    color: '#fff',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  utility: {
    backgroundColor: '#6B728E', // slate gray-blue
  },
    utilityText: {
        color: '#fff',
    },  
});
