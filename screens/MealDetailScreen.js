import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This is All Meal Details Screen!</Text>
      <Button
        title="go home"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default MealDetailScreen;
