/**
 * File: HomeScreen.tsx
 * Author: Sergio Montecinos
 * Date: April 30, 2025
 * Description:
 *   Main calculator screen with 5-column layout including utility buttons and 'Ans' support.
 *   Clean iOS-style layout with dark/light themes and scrollable history.
 * Design Pattern:
 *   - Container Component Pattern
 * Principles:
 *   - SRP
 *   - Open/Closed Principle
 *   - Strong Typing and Layout Separation
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import globalStyles from '../styles/globalStyles';
import { useTheme } from '../context/ThemeContext';
import { colors } from '../styles/theme';

type ButtonType = 'default' | 'clear' | 'dark' | 'light' | 'accent' | 'utility';

type ButtonConfig = {
  label: string;
  type: ButtonType;
};

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();
  const themeColors = isDark ? colors.dark : colors.light;

  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState<string[]>([]);

  const handlePress = (value: string) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === '=') {
      if (!display.trim()) return;

      try {
        const normalized = display
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**')
          .replace(/÷/g, '/')
          .replace(/×/g, '*')
          .replace(/(\d)\(/g, '$1*(')               // 2(3) → 2*(3)
          .replace(/\)(\d)/g, ')*$1')               // (2)3 → (2)*3
          .replace(/\)(\()/g, ')*(')                // (2)(3) → (2)*(3)
          .replace(/(\d)Math\.sqrt/g, '$1*Math.sqrt'); // 2√9 → 2*Math.sqrt(9)

        const result = eval(normalized);

        if (typeof result === 'function') {
          setDisplay('Error');
          return;
        }

        const entry = `${display} = ${result}`;
        setHistory(prev => [...prev, entry]);
        setDisplay(result.toString());
      } catch {
        setDisplay('Error');
      }
    } else if (value === '⌫') {
      setDisplay(prev => prev.slice(0, -1));
    } else if (value === '√') {
      setDisplay(prev => prev + '√(');
    } else if (value === 'Ans') {
      const last = history.length ? history[history.length - 1].split('=')[1].trim() : '';
      if (last) setDisplay(prev => prev + last);
    } else if (value === '+/-') {
      setDisplay(prev => {
        const match = prev.match(/(-?\d+\.?\d*)$/); // match last number
        if (!match) return prev;

        const number = match[1];
        const toggled = number.startsWith('-')
          ? number.slice(1)
          : `-${number}`;

        return prev.slice(0, prev.length - number.length) + toggled;
      });
    } else {
      setDisplay(prev => prev + value);
    }
  };

  const handleClearHistory = () => setHistory([]);

  const buttonRows: ButtonConfig[][] = [
    [
      { label: 'AC', type: 'light' },
      { label: '+/-', type: 'light' },
      { label: '%', type: 'light' },
      { label: '÷', type: 'accent' },
      { label: '⌫', type: 'utility' },
    ],
    [
      { label: '7', type: 'dark' },
      { label: '8', type: 'dark' },
      { label: '9', type: 'dark' },
      { label: '×', type: 'accent' },
      { label: '^', type: 'utility' },
    ],
    [
      { label: '4', type: 'dark' },
      { label: '5', type: 'dark' },
      { label: '6', type: 'dark' },
      { label: '-', type: 'accent' },
      { label: '√', type: 'utility' },
    ],
    [
      { label: '1', type: 'dark' },
      { label: '2', type: 'dark' },
      { label: '3', type: 'dark' },
      { label: '+', type: 'accent' },
      { label: '(', type: 'utility' },
    ],
    [
      { label: '0', type: 'dark' },
      { label: '.', type: 'dark' },
      { label: '=', type: 'accent' },
      { label: 'Ans', type: 'accent' },
      { label: ')', type: 'utility' },
    ],
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={globalStyles.screen}>
          {/* Theme Toggle */}
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginBottom: 12 }}>
            <Switch value={isDark} onValueChange={toggleTheme} />
            <Text style={{ color: themeColors.text, marginLeft: 6 }}>Dark Mode</Text>
          </View>

          {/* Display */}
          <Text
            style={{
              fontSize: 64,
              color: themeColors.text,
              textAlign: 'right',
              marginBottom: 16,
            }}
          >
            {display || '0'}
          </Text>

          {/* Buttons */}
          {buttonRows.map((row, rowIndex) => (
            <View key={rowIndex} style={globalStyles.row}>
              {row.map(({ label, type }, idx) => (
                <CalculatorButton
                  key={`${rowIndex}-${idx}-${label}`}
                  label={label}
                  onPress={() => handlePress(label)}
                  type={type}
                />
              ))}
            </View>
          ))}

          {/* Clear History */}
          <CalculatorButton label="Clear History" onPress={handleClearHistory} type="clear" />

          {/* Scrollable History */}
          <View
            style={{
              backgroundColor: themeColors.inputBackground,
              borderRadius: 8,
              padding: 10,
              marginTop: 10,
              height: 140,
              width: '100%',
            }}
          >
            <ScrollView>
              {history.length === 0 ? (
                <Text style={{ color: themeColors.text, fontStyle: 'italic' }}>No history yet</Text>
              ) : (
                history.map((entry, idx) => (
                  <Text
                    key={idx}
                    style={{
                      color: themeColors.text,
                      fontSize: 16,
                      marginBottom: 4,
                    }}
                  >
                    {entry}
                  </Text>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
// Note: The eval function is used here for simplicity. In a production app, consider using a safer alternative for expression evaluation.
// Note: The calculator supports basic operations, square root, power, and parentheses.
// Note: The calculator history is stored in memory and can be cleared.
// Note: The calculator supports a dark mode toggle.