import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { Ionicons } from '@expo/vector-icons';
import { FAVORITES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { DrawerActions } from 'react-navigation-drawer';
const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <View style={styles.head}>
        <Text style={styles.heading}>You Favorite Meals</Text>
        <Ionicons name="refresh" size={25} color={Colors.primaryColor} />
      </View>
      {FAVORITES.length > 0 ? (
        <FlatList
          style={styles.list}
          data={FAVORITES}
          renderItem={(mealData) => (
            <MealList
              mealData={mealData}
              list={FAVORITES}
              navigation={navigation}
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
  headerRight: () => (
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
