import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesMeals = ({ navigation }) => {
  const CatId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === CatId);

  return (
    <View style={styles.screen}>
      <Text style={styles.text}>This are {selectedCategory.title} Meals!</Text>
      <Button
        title="meal detail"
        onPress={() => {
          navigation.navigate('MealDetail');
        }}
      />
    </View>
  );
};

CategoriesMeals.navigationOptions = ({ navigation }) => {
  const CatId = navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find((cat) => cat.id === CatId);
  return {
    headerTitle: selectedCategory.title,
  };
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

export default CategoriesMeals;
