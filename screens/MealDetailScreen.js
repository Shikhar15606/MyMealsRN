import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummyData';

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{meal.title}</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);
  return {
    title: meal.title,
  };
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealDetailScreen;
