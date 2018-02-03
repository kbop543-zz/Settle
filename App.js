import React, { Component } from 'react';
import { AppRegistry, Text,View, StyleSheet, Button } from 'react-native';

import {StackNavigator} from 'react-navigation';

import ChatScreen from './src/screens/chatscreen.js';
import HomeScreen from './src/screens/homescreen.js';

const AppNavigator = StackNavigator({
  Home: {screen: HomeScreen},
  ChatScreen: { screen: ChatScreen},
});

export default class App extends Component {

  constructor(props){
   super(props);
 }

  render() {
    return (
      <AppNavigator/>
  );
}
}


const styles = StyleSheet.create({
  settleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: '#ABC4A1',
    justifyContent: 'center',
    alignItems: 'center',
     flex: 1,
     textAlign: 'center'
  },
  background: {
    flex: 1,
     backgroundColor: '#ABC4A1'
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('App', () => App);
