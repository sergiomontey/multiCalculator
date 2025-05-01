/**
 * File: globalStyles.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Global layout styles optimized for compact 4-column calculator layout.
 *   Ensures tight row and column alignment.
 * Design Pattern:
 *   - Global Style Module
 * Principles:
 *   - Visual Balance
 *   - Responsive Grid Spacing
 */

import { StyleSheet } from 'react-native';
import { spacing } from './theme';

export default StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: spacing.sm,  // smaller left/right spacing
    paddingBottom: spacing.md,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',       // aligns buttons evenly
    marginVertical: 4,              // consistent row spacing
  },
});
