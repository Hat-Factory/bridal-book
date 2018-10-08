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

import {connect} from 'react-redux';

// import Task from '../Task/Task';
import DisplayTasks from '../displayTasks/displayTasks';
import PresetTasks from '../PresetTasks/PresetTasks';
import HomeTasks from '../HomeTasks/HomeTasks';


  class UpdateContainer extends Component {


    displayTasks = () => {
      let tasks= this.props.tasks

      let renderTasks= tasks.map(task => {
        return (<Task {...props} />)
      })
    }

    render(){
      return (
        <View style={styles.container}>
          <HomeTasks />
        </View>
      )
    }
  }

  const mapStateToProps = state => ({
    tasks: state.tasks
  })
  export default connect(mapStateToProps, null)(UpdateContainer);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    titleContainer: {
      width: 350,
      marginLeft: 27,
      marginBottom: 10
    },
    title: {
      fontSize: 12,
      color: '#4a4a4a',
      marginTop: 35,
      textAlign: 'left'
    },
    newTask: {
      height: 50,
      width: 330,
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    newTaskText: {
      color: '#4a4a4a',
      fontSize: 14,
      marginTop: 2,
      marginRight: 50
    },
    redBar: {
      height: 50,
      width: 3,
      backgroundColor: '#ed7766'
    },
    NewTaskTouch:{
      flexDirection: 'row',
      justifyContent: 'center',
      height: 50,
      marginTop: 15,
      marginRight: 10
    },
    noNewTask: {
      display: 'none'
    }
  })