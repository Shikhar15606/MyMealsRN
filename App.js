import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';

enableScreens(); // for performance improvement
LogBox.ignoreAllLogs();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}
