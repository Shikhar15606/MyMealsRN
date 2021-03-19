import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>CategoriesScreen</Text>
      <Button
        title='Go to Meals'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryMeals' });
        }}
      ></Button>
      <Button
        title='Replace with Meals'
        onPress={() => {
          props.navigation.replace('CategoryMeals');
        }}
      ></Button>
      <Button
        title='Stay here using Push'
        onPress={() => {
          props.navigation.push('Categories');
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default CategoriesScreen;
