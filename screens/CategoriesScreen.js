import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { CATEGORIES } from '../data/dummy-data.js';

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderGridItems = (itemData) => {
    const { id, title, color } = itemData.item;
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: id,
            },
          });
        }}
        style={{ backgroundColor: color, ...styles.gridItem }}
      >
        <Text style={styles.gridItemName}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItems} />
    </View>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
};

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 20,
  },
  list: {},
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    elevation: 2,
  },
  gridItemName: {
    fontFamily: 'open-sans-semi-bold',
    fontSize: 15,
    paddingVertical: 10,
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontFamily: 'open-sans',
    fontSize: 20,
    marginBottom: 20,
  },
});

export default CategoriesScreen;
