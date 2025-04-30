/**
 * File: buttonStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Style definitions for calculator buttons, including sizing, spacing, and font.
 * Design Principle: DRY, Separation of Concerns.
 */

import { StyleSheet } from 'react-native';
import { spacing, fontSizes } from './theme';

export default StyleSheet.create({
  button: {
    padding: spacing.md,
    margin: spacing.sm,
    borderRadius: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    minHeight: 70,
  },
  text: {
    fontSize: fontSizes.lg,
    fontWeight: 'bold',
  },
});
