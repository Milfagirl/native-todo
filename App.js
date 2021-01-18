import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './src/components/Weather'
import WeatherImage from './src/components/WeatherImage'
import TodoList from './src/components/TodoList'
import BootstrapStyleSheet from 'react-native-bootstrap-styles'

const { s, c } = new BootstrapStyleSheet();


import { Provider } from 'react-redux'
import store from './src/redux/store'
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={styles.weatherContainer}>
          <Weather />
          <WeatherImage />
        </View>
        <View style={styles.todoListContainer}>
          <TodoList />
        </View>
      </View>

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    paddingHorizontal: 0,
    justifyContent: 'flex-start',
    paddingTop: 80,
    // borderWidth: 1
  },

  weatherContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: 20,
    paddingHorizontal: 20,
    // borderWidth: 1
  },

  todoListContainer: {
    flex: 3,
    // borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    justifyContent: 'flex-start',
  }

});
