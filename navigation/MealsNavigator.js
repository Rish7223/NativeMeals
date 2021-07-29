import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMeals,
    },
    MealDetail: {
      screen: MealDetailScreen,
      navigationOptions: {
        headerTitle: 'Recipe Detail',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#ffffff',
    },
  }
);

const tabScreenConf = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
    },
  },
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConf, {
        activeColor: '#ff7777',
        shifting: true,
        barStyle: {
          backgroundColor: '#fff',
        },
      })
    : createBottomTabNavigator(tabScreenConf, {
        tabBarOptions: {
          activeTintColor: Colors.primary,
        },
      });

export default createAppContainer(MealsFavTabNavigator);
