import React from 'react';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import { View, StyleSheet } from 'react-native';

const FavouritesScreen = props => {
  const displayedMeals = useSelector(state => state.meals.favoriteMeals);
  if (displayedMeals.length === 0) {
    return (
      <View style={styles.screen}>
        <DefaultText>No favourite dishes found. Add Some ! </DefaultText>
      </View>
    );
  }
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default FavouritesScreen;
