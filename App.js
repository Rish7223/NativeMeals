import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
  const [loaded] = Font.useFonts({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-semi-bold': require('./assets/Fonts/OpenSans-SemiBold.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return (
      <View>
        <Text>Loading assets...</Text>
      </View>
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: 'open-sans',
    fontSize: 25,
  },
});
