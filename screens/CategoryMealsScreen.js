import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummyData';
import Colors from '../constants/colors';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );
  return (
    <View style={styles.screen}>
      <Text>CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title='Go to Meal Details'
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }}
      />
    </View>
  );
};

// Object for static configuration
// Function for dynamic configuration
CategoryMealsScreen.navigationOptions = navigationData => {
  const categoryId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );
  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoryMealsScreen;
