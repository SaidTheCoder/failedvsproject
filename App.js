import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import BookTransaction from './screens/BookTransaction'
import SearchScreen from './screens/SearchScreen'

export default class App extends React.Component {
  render(){
  return (
<AppContainer/>
  )
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction:{screen:BookTransaction},
  Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)
