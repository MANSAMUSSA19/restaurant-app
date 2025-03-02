import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MonetizationDashboard from './src/components/MonetizationDashboard';

export default function App() {
  return (
    <SafeAreaProvider>
      <MonetizationDashboard />
    </SafeAreaProvider>
  );
}