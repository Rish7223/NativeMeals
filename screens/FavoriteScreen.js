import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { DrawerActions } from 'react-navigation-drawer';
import { useSelector } from 'react-redux';
const FavoriteScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  return (
    <View style={styles.screen}>
      <View style={styles.head}>
        <Text style={styles.heading}>You Favorite Meals</Text>
      </View>
      {favMeals.length > 0 ? (
        <FlatList
          style={styles.list}
          data={favMeals}
          renderItem={(mealData) => (
            <MealList
              mealData={mealData}
              navigation={navigation}
              favList={favMeals}
            />
          )}
        />
      ) : (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>Oop's! No favorite meal</Text>
        </View>
      )}
    </View>
  );
};

FavoriteScreen.navigationOptions = ({ navigation }) => ({
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="ios-menu"
        title="menu"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 10,
    height: '100%',
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: Colors.black,
  },
  list: {
    marginTop: 20,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 16,
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 16,
    fontFamily: 'open-sans-semi-bold',
  },
});

export default FavoriteScreen;
