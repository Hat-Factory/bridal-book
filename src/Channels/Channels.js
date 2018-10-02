// var React = require('react-native'); 
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
}from 'react-native';

var sendbird = require('sendbird');

class Channels extends Component{

render() {
  return 
    (
      <View style={styles.container}>
        <Text style={styles.text}>Channels</Text>
      </View>
    );
  }
}


let styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'stretch',
backgroundColor: '#6E5BAA'
}
});

export default Channels; 