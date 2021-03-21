import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';

enableScreens(); // for performance improvement
// LogBox.ignoreAllLogs();

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <MealsNavigator />;
}
