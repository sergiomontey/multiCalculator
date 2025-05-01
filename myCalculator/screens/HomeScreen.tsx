/**
 * File: HomeScreen.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Main calculator interface. Includes input display, theme toggle, responsive button grid,
 *   history viewer, and clear history functionality.
 * Design Pattern:
 *   - Container Component Pattern
 * Principles:
 *   - SRP (Single Responsibility Principle)
 *   - Composition over Inheritance
 *   - Separation of Concerns
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { useTheme } from '../context/ThemeContext';
import globalStyles from '../styles/globalStyles';
import displayStyles from '../styles/displayStyles';
import historyStyles from '../styles/historyStyles';
import { colors } from '../styles/theme';
import { evaluateExpression } from '../utils/calculatorLogic';

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();
  const themeColors = isDark ? colors.dark : colors.light;

  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handlePress = (value: string) => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '=') {
      const result = evaluateExpression(display);
      const entry = `${display} = ${result}`;
      setHistory(prev => [...prev, entry]);
      setDisplay(result.toString());
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
  };

  const buttonRows = [
    ['M+','MR', 'MC', '%'],
    ['√', 'x²', '+/-', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['C', '0', '.', '='],
  ];

  return (
    <SafeAreaView style={[globalStyles.screen, { backgroundColor: themeColors.background }]}>
      <ScrollView keyboardShouldPersistTaps="handled">
        {/* Toggle only (Home label removed) */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 12 }}>
          <Switch value={isDark} onValueChange={toggleTheme} />
          <Text style={{ color: themeColors.text, marginLeft: 6, paddingRight: 4 }}>Dark Mode</Text>
        </View>

        {/* Display */}
        <View style={displayStyles.container}>
          <Text style={[displayStyles.displayText, { color: themeColors.text }]}>
            {display || '0'}
          </Text>
        </View>

        {/* Button Grid */}
        {buttonRows.map((row, rowIndex) => (
          <View key={rowIndex} style={globalStyles.row}>
            {row.map(label => (
              <CalculatorButton key={label} label={label} onPress={() => handlePress(label)} />
            ))}
          </View>
        ))}

        {/* History Viewer (above clear button) */}
        <View style={[historyStyles.container, { backgroundColor: themeColors.inputBackground }]}>
          {history.length === 0 ? (
            <Text style={{ color: themeColors.text, fontStyle: 'italic' }}>No history yet</Text>
          ) : (
            history.map((entry, idx) => (
              <Text key={idx} style={[historyStyles.entry, { color: themeColors.text }]}>
                {entry}
              </Text>
            ))
          )}
        </View>

        {/* Clear History */}
        <CalculatorButton label="Clear History" onPress={handleClearHistory} type="clear" />
      </ScrollView>
    </SafeAreaView>
  );
}
/**
 * This file serves as the main screen of the calculator application.
 * It includes the display, button grid, history viewer, and theme toggle.
 * The layout is responsive and adapts to different screen sizes.
 * The styles are applied conditionally based on the current theme (dark/light).
 */