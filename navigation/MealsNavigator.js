import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#ffffff',
    },
  },
  CategoryMeals: {
    screen: CategoryMeals,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#ffffff',
    },
  },
  MealDetail: {
    screen: MealDetailScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primary,
      },
      headerTintColor: '#ffffff',
    },
  },
});

export default createAppContainer(MealsNavigator);
