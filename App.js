import React, { Component } from 'react';
import { AppRegistry, Text,View, StyleSheet } from 'react-native';


export default class StartingPage extends Component {
  render() {
  return (
    <View style={{flex: 1}}>
        <View style={styles.background} />
        <Text style={styles.settleText}>Settle </Text>
      </View>
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
AppRegistry.registerComponent('StartingPage', () => StartingPage);
