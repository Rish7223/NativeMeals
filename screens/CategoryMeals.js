import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MealList from '../components/MealList';
import { CATEGORIES } from '../data/dummy-data';
import { getMealsUsingCategory } from '../utilityFunctions/getMealUsingCategory';
import { useSelector } from 'react-redux';

const CategoriesMeals = ({ navigation }) => {
  const [loading, setLoading] = useState(null);
  const [meals, setMeals] = useState([]);
  const CatId = navigation.getParam('categoryId');
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  useEffect(() => {
    if (CatId) {
      let list = getMealsUsingCategory(CatId, availableMeals, setLoading);
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
              favList={favMeals}
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
