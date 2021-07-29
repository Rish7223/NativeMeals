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
import Colors from '../constants/Colors';
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

  // renderItem
  const mealView = (mealData) => {
    const { id, title, img, duration } = mealData.item;
    return (
      <TouchableOpacity
        style={styles.mealCard}
        onPress={() => {
          navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: id,
            },
          });
        }}
      >
        <View style={styles.imageSec}>
          <Image
            source={{
              uri: img,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoSec}>
          <Text
            style={{ fontSize: title.length > 25 ? 15 : 16, ...styles.heading }}
          >
            {title}
          </Text>
          <Text style={styles.duration}>Duration: {duration}m</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return loading == false ? (
    meals.length && (
      <View style={styles.screen}>
        <Text style={styles.text}>Meals List</Text>
        <FlatList
          data={meals}
          renderItem={mealView}
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

  mealCard: {
    flexDirection: 'row',
    minHeight: 100,
    maxHeight: 100,
    elevation: 1,
    backgroundColor: Colors.white,
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageSec: {
    maxWidth: 130,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  infoSec: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  heading: {
    fontFamily: 'open-sans-bold',
  },

  duration: {
    fontSize: 14,
    fontFamily: 'open-sans',
    color: Colors.gray,
  },
});

export default CategoriesMeals;
