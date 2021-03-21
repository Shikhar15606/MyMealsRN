import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MEALS } from '../data/dummyData';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{meal.duration}m</DefaultText>
        <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map(ingredient => {
        return <ListItem>{ingredient}</ListItem>;
      })}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map(step => {
        return <ListItem>{step}</ListItem>;
      })}
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const meal = MEALS.find(meal => meal.id === mealId);

  return {
    title: meal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Favorite'
          iconName='ios-star'
          onPress={() => {
            console.log('Mark as favorite!');
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
  details: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
