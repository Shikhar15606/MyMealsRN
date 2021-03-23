import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { useSelector } from 'react-redux';
const MealList = props => {
  const favouriteMeals = useSelector(state => state.meals.favoriteMeals);
  // useSelector or any other react hook must be used in the root level component
  // and not inside nested functions
  const renderMealItem = itemData => {
    const isFavourite = favouriteMeals.some(
      favMeal => favMeal.id === itemData.item.id
    );
    // some fxn will iterate over the array and return true
    // if the condition is true for any element in the array
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        imageUrl={itemData.item.imageUrl}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'MealDetail',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
              isFavourite: isFavourite,
            },
          });
        }}
      />
    );
  };
  return (
    <FlatList
      data={props.data}
      keyExtractor={(item, index) => item.id}
      renderItem={renderMealItem}
    />
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default MealList;
