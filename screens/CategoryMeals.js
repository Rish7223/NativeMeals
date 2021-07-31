import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import MealList from '../components/MealList';
import { CATEGORIES, RECIPES } from '../data/dummy-data';
import { getMealsUsingCategory } from '../utilityFunctions/getMealUsingCategory';

const CategoriesMeals = ({ navigation }) => {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);
  const CatId = navigation.getParam('categoryId');
  useEffect(() => {
    if (CatId) {
      let list = getMealsUsingCategory(CatId, RECIPES, setLoading);
      setMeals(list);
    }
  }, [CatId]);

  return loading == false ? (
    meals.length && (
      <View style={styles.screen}>
        <Text style={styles.text}>Meals List</Text>
        <FlatList
          data={meals}
          renderItem={(mealData) => (
            <MealList
              mealData={mealData}
              navigation={navigation}
              list={RECIPES}
            />
          )}
          style={{ width: '100%', paddingHorizontal: 20 }}
        />
      </View>
    )
  ) : (
    <View>
      <Text>Loading...</Text>
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
    marginTop: 10,
    paddingHorizontal: 0,
    paddingBottom: 40,
  },
  text: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
});

export default CategoriesMeals;
