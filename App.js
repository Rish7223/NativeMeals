import React from 'react';
import * as Font from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducer/meals';
import { Provider } from 'react-redux';

enableScreens();

const rootReducers = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducers);

export default function App() {
  const [loaded] = Font.useFonts({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-semi-bold': require('./assets/Fonts/OpenSans-SemiBold.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
