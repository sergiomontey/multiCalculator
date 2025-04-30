/**
 * File: calculatorLogic.ts
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Utility function to safely evaluate arithmetic expressions.
 * Design Pattern: Utility Function.
 * Principles: Single Responsibility, Fail-Fast.
 */

export const evaluateExpression = (input: string): number => {
    try {
      // Sanitize the input to avoid malicious code
      const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
      return eval(sanitizedInput);
    } catch {
      return NaN;
    }
  };
  