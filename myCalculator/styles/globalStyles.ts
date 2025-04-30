/**
 * File: globalStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: General layout styles used globally across screens.
 * Design Pattern: Global Style Module.
 * Principles: Single Responsibility, Reuse.
 */

import { StyleSheet } from 'react-native';
import { spacing } from './theme';

export default StyleSheet.create({
    screen: {
      flex: 1,
      paddingTop: spacing.xl,        // add top space
      paddingBottom: spacing.lg,     // add bottom space
      paddingHorizontal: spacing.md, // left/right padding
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: spacing.sm,
    },
});
/**
 * This file contains global styles that can be reused across different components and screens.
 * It helps maintain a consistent layout and spacing throughout the application.
 * The styles are defined using React Native's StyleSheet API for better performance.
 */