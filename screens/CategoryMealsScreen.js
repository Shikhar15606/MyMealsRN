import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummyData';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>
          No matching meals found for your current filters
        </DefaultText>
      </View>
    );
  }
  return <MealList data={displayedMeals} navigation={props.navigation} />;
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
