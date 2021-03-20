import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from 'react-native';

const MealItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.meal}>
      <TouchableCmp onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              style={styles.bgImage}
              source={{ uri: props.imageUrl }}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  meal: {
    height: 200,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    height: '15%',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
});
export default MealItem;
