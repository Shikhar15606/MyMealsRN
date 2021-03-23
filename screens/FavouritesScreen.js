import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';

const FavouritesScreen = props => {
  const displayedMeals = useSelector(state => state.favoriteMeals);
  return <MealList data={displayedMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navData => {
  return {
    title: 'Your Favourites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};
export default FavouritesScreen;
