import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import db from './config';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <View>
      <AppContainer/>
    </View>
    )
  }

var AppNavigator = createSwitchNavigator({
   HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
 
  
});

const AppContainer = createAppContainer(AppNavigator);