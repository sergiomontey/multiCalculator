/**
 * File: buttonStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Styles for calculator buttons. Buttons are fixed size with tighter spacing and rounder appearance.
 *   Includes a distinct "Clear History" button style for emphasis.
 * Design Principles:
 *   - Consistent Grid Layout
 *   - Responsive Spacing
 *   - DRY and Modular Styling
 */

import { StyleSheet } from 'react-native';
import { fontSizes, spacing } from './theme';

export default StyleSheet.create({
  button: {
    width: 65,
    height: 65,
    margin: 4,                    // tighter spacing
    borderRadius: 20,            // rounder buttons
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
  clearButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#EF4444',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.xl,
  },
  clearText: {
    color: '#fff',
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});
/**
 * This file contains styles specifically for the calculator buttons.
 * The button styles are designed to be consistent and modular, ensuring a uniform look and feel across the application.
 * The styles are defined using React Native's StyleSheet API for better performance.
 * 
 * The buttons have a fixed size with tighter spacing and a rounder appearance for a modern look.
 * A distinct "Clear History" button style is provided for emphasis, making it easily identifiable to users.
 */