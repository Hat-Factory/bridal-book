const presetTaskList = 
  [
    { 
      taskTitle:'Plan Engagement Party', 
      taskDesc:"It's time to party!!! Let's get a date on the calender for your engagement party.",
      id:'preset1'
    }, 
    {
      taskTitle:'Start Building Your Guest List', 
      taskDesc:"So many people to invite. Don't forget to invite that crazy uncle.",
      id:'preset2'
    }, 
    {
      taskTitle:'Create a wedding specific email', 
      taskDesc:"You're going to have a lot of correspondence. It might be a good idea to create an email!",
      id:'preset3'
    },
  ];


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
import { addTask } from '../actions';

import PresetTask from '../PresetTask/PresetTask';

const PresetTasks = (props) => {
  let displayTasks = presetTaskList.map(task => {
    return (
    <PresetTask {...task}/>
  )
  })
  return (
    <View>
      {displayTasks}
    </View>
  )
}

export default PresetTasks;

// const DisplayTask = (props) => {
//   console.log(props)
//   let displayTasks = props.tasks.map((task, index) => {
//     return (
//       <Task {...task} key={index}/>
//     )
//   })
//    return (
//      <View>
//        {displayTasks}
//      </View>
//    )
//  }