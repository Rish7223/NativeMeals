import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';
import { RECIPES } from '../data/dummy-data';
import { getMealData } from '../utilityFunctions/getMealUsingCategory';

const MealDetailScreen = ({ navigation }) => {
  const [mealData, setMealData] = useState(null);
  const [loading, setLoading] = useState(false);
  const mealId = navigation.getParam('mealId');
  useEffect(() => {
    if (mealId) {
      const data = getMealData(mealId, RECIPES, setLoading);
      setMealData(data);
    }
  }, [mealId]);

  return loading != true ? (
    mealData && (
      <ScrollView style={styles.screen}>
        <Text
          style={{
            fontSize: mealData.title.length >= 25 ? 20 : 25,
            ...styles.heading,
          }}
        >
          {mealData.title}
        </Text>
        <View style={styles.imageSec}>
          <Image source={{ uri: mealData.img }} style={styles.image} />
        </View>
        <View style={styles.tagList}>
          {mealData.isVegan && <Text style={styles.tag}>Vegan</Text>}
          {mealData.isGlutenFree && <Text style={styles.tag}>GlutenFree</Text>}
          {mealData.isVegetarian && <Text style={styles.tag}>Vegetarian</Text>}
          {mealData.isLactoseFree && (
            <Text style={styles.tag}>LactoseFree</Text>
          )}
        </View>
        <View style={styles.info}>
          <View style={styles.ingredients}>
            <Text style={styles.subHeading}>Ingredients</Text>
            {mealData.ingredients.map((ingredients) => (
              <Text key={ingredients} style={styles.ingredientText}>
                * {ingredients}
              </Text>
            ))}
          </View>
          <View style={styles.steps}>
            <Text style={styles.subHeading}>Steps to cook</Text>
            {mealData.steps.map((step) => (
              <Text key={step} style={styles.ingredientText}>
                * {step}
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.empty}></View>
      </ScrollView>
    )
  ) : (
    <View>
      <Text>Loading...</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
  const mealId = navigation.getParam('mealId');

  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-star"
          title="Fav"
          onPress={() => {
            console.log('header button pressed');
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {},
  heading: {
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.white,
    paddingVertical: 10,
  },
  imageSec: {
    maxHeight: 250,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
  },

  tagList: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },

  tag: {
    backgroundColor: Colors.white,
    fontSize: 12,
    fontFamily: 'open-sans',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 100,
    textAlign: 'center',
    marginHorizontal: 5,
    elevation: 1,
  },
  info: {
    paddingHorizontal: 10,
  },
  subHeading: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    paddingVertical: 10,
  },
  ingredientText: {
    fontFamily: 'open-sans',
    fontSize: 16,
    fontStyle: 'italic',
    paddingBottom: 5,
    paddingLeft: 5,
  },
  empty: {
    minHeight: 40,
  },
});

export default MealDetailScreen;
