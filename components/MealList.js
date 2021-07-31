import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const MealList = ({ mealData, navigation, list }) => {
  const { id, title, img, duration } = mealData.item;
  return (
    <TouchableOpacity
      style={styles.mealCard}
      onPress={() => {
        navigation.navigate({
          routeName: 'MealDetail',
          params: {
            mealId: id,
            list: list,
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

const styles = StyleSheet.create({
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

export default MealList;
