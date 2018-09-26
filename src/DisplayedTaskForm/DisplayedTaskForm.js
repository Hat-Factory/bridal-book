import React from 'react';
import {Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Button, 
  TouchableHighlight, 
  TouchableOpacity,
  Modal,
  Image} from 'react-native';

  import { connect } from 'react-redux';
  // import Task from '../Task/Task';

 const DisplayedTaskForm = ({taskTitle, taskDesc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{taskTitle}</Text>
      </View>
      <View style={styles.descContainer}>
        <Text style={styles.desc}>{taskDesc}</Text>
      </View>
    </View>
  )
 }

 export default DisplayedTaskForm;

 const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  titleContainer: {
    height: 50,
    width: 310,
    backgroundColor: '#fff',
    paddingLeft: 20,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    marginTop: 30
  },
  title: {
    fontSize: 14,
    color: '#4a4a4a',
    marginTop: 17,
    textAlign: 'left'
  },
  descContainer: {
    height: 150,
    width: 310,
    backgroundColor: '#fff',
    paddingLeft: 20,
    marginTop: 20,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    // textAlign: 'justify',
    paddingTop: 10,
    paddingRight: 10,
  },
  desc: {
   color: '#4a4a4a'
  }
 })