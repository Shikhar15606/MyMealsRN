import React from 'react';
import { MEALS } from '../data/dummyData';
import MealList from '../components/MealList';

const FavouritesScreen = props => {
  const displayedMeals = MEALS.filter(
    meal => meal.id === 'm1' || meal.id === 'm2'
  );
  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = {
  title: 'Your Favourites',
};
export default FavouritesScreen;
