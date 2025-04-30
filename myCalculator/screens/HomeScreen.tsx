/**
 * File: HomeScreen.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description: Main calculator interface. Displays current expression, buttons, dark mode toggle, and history.
 * Design Pattern: Container Component Pattern.
 * Principles: Separation of Concerns, SRP, High Cohesion.
 */

import React, { useState } from 'react';
import { View, Text, Switch, ScrollView } from 'react-native';
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

  const handleClearHistory = () => setHistory([]);

  const buttonLabels = [
    ['M+', 'MR', 'MC', '%'],
    ['√', 'x²', '+/-', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['C', '0', '.', '='],
  ];

  return (
    <ScrollView style={[globalStyles.screen, { backgroundColor: themeColors.background }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: themeColors.text, fontSize: 32, fontWeight: 'bold' }}>Home</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Switch value={isDark} onValueChange={toggleTheme} />
          <Text style={{ color: themeColors.text, marginLeft: 8 }}>Dark Mode</Text>
        </View>
      </View>

      <View style={displayStyles.container}>
        <Text style={[displayStyles.displayText, { color: themeColors.text }]}>
          {display || '0'}
        </Text>
      </View>

      {buttonLabels.map((row, rowIndex) => (
        <View key={rowIndex} style={globalStyles.row}>
          {row.map(label => (
            <CalculatorButton key={label} label={label} onPress={() => handlePress(label)} />
          ))}
        </View>
      ))}

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <CalculatorButton label="Clear History" onPress={handleClearHistory} />
      </View>

      <View style={[historyStyles.container, { borderColor: themeColors.primary }]}>
        {history.map((item, idx) => (
          <Text key={idx} style={[historyStyles.entry, { color: themeColors.text }]}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}
