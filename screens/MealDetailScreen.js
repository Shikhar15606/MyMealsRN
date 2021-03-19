import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>MealDetailScreen</Text>
      <Button
        title='Go Back 1 Step using GoBack Method'
        onPress={() => {
          props.navigation.goBack();
        }}
      />
      <Button
        title='Go Back 1 Step using Pop Method'
        onPress={() => {
          props.navigation.pop();
        }}
      />
      <Button
        title='Go Back to 1st Screen in Stack '
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
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
export default MealDetailScreen;
