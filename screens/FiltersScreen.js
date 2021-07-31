import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is All Filters Screen!</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Filter Meals',
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
