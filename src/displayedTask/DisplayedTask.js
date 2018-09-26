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

  import { connect } from 'react-redux';
  import Task from '../Task/Task';

 const DisplayTask = (props) => {
   console.log(props)
   let displayTasks = props.tasks.map((task, index) => {
     return (
       <Task {...task} key={index}/>
     )
   })
    return (
      <View>
        {displayTasks}
      </View>
    )
  }
