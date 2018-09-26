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
import DisplayedTaskForm from '../DisplayedTaskForm/DisplayedTaskForm';

 const DisplayedTask = ({tasks}) => {
  console.log(tasks)
    let taskArray = tasks.map(task => {
      return <DisplayedTaskForm  {...task}/>
    })
    return (
      <View>
        {taskArray}
      </View>
    )
  }

const mapStateToProps = state => ({
  tasks: state.tasks,
  viewedTask: state.viewedTask
})

  export default connect(mapStateToProps,null)(DisplayedTask);