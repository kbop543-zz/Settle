import React, { Component } from 'react';
import { AppRegistry, Text,View, StyleSheet, Button } from 'react-native';

import {StackNavigator} from 'react-navigation';


export default class Home extends Component {

  constructor(props){
   super(props);
 }

  render() {
    return (
    <View style={{flex: 1}}>
        <View style={styles.background} />
        <Text style={styles.settleText}>Settle </Text>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            this.props.navigation.navigate('ChatTest')
          }
        />
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
