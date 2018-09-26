import React, {Component} from 'react';
import {Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Button, 
  TouchableHighlight, 
  TouchableOpacity,
  Modal,
  Image} from 'react-native';

 const Task = (props) => {
   console.log(props)
    return (
      <View style={styles.container}>
        <View style={styles.redBar}></View>
        <Text style={styles.title}>{props.taskTitle}</Text>
      </View>
    )
  }

export default Task;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 330,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  redBar: {
    height: 50,
    width: 3,
    backgroundColor: '#ed7766'
  },
  title: {
    color: '#4a4a4a',
    fontSize: 14,
    marginTop: 2,
    marginRight: 50
  },
})