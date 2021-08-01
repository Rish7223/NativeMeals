import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const CustomSwitch = ({ value, setValue, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{children}</Text>
      <Switch
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        trackColor={{ true: Colors.secondaryColor, false: Colors.gray }}
        thumbColor="#dddddd"
      />
    </View>
  );
};

const FiltersScreen = ({ navigation }) => {
  const [glutenFree, setGlutenFree] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isLactoseFree, setLactoseFree] = useState(false);
  const [isVegan, setVegan] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: glutenFree,
      lactoseFree: isLactoseFree,
      vegetarian: isVegetarian,
      vegan: isVegan,
    };

    console.log(appliedFilters);
  }, [glutenFree, isLactoseFree, isVegetarian, isVegan]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Available Filters</Text>

      <CustomSwitch value={glutenFree} setValue={setGlutenFree}>
        Gluten-Free
      </CustomSwitch>

      <CustomSwitch value={isVegetarian} setValue={setVegetarian}>
        Vegetarian
      </CustomSwitch>

      <CustomSwitch value={isVegan} setValue={setVegan}>
        Vegan
      </CustomSwitch>

      <CustomSwitch value={isLactoseFree} setValue={setLactoseFree}>
        Lactose-Free
      </CustomSwitch>
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Filter Meals',
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
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        iconName="ios-save"
        title="save"
        onPress={navigation.getParam('save')}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    margin: 20,
    textAlign: 'center',
  },

  container: {
    marginVertical: 20,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 18,
    fontFamily: 'open-sans-semi-bold',
  },
});

export default FiltersScreen;
