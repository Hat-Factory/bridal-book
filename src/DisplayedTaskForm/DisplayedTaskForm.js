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
  import Task from '../Task/Task';

 const DisplayedTaskForm = ({taskTitle, taskDesc}) => {
  return (
    <View>
      <Text>{taskTitle}</Text>
      <Text>{taskDesc}</Text>
    </View>
  )
 }

 export default DisplayedTaskForm;