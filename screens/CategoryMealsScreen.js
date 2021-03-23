import React from 'react';
import { CATEGORIES } from '../data/dummyData';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';

const CategoryMealsScreen = props => {
  const categoryId = props.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(
    category => category.id === categoryId
  );
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(categoryId) >= 0
  );
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

export default CategoryMealsScreen;
