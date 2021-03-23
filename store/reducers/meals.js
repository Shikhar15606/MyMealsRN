import { MEALS } from '../../data/dummyData';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const filteredMeals = state.meals.filter(meal => {
        if (
          ((appliedFilters.glutenFree && meal.isGlutenFree) ||
            !appliedFilters.glutenFree) &&
          ((appliedFilters.lactoseFree && meal.isLactoseFree) ||
            !appliedFilters.lactoseFree) &&
          ((appliedFilters.vegan && meal.isVegan) || !appliedFilters.vegan) &&
          ((appliedFilters.vegetarian && meal.isVegetarian) ||
            !appliedFilters.vegetarian)
        ) {
          return true;
        }
        return false;
      });
      return { ...state, filteredMeals: filteredMeals };

    default:
      return state;
  }
};

export default mealsReducer;
