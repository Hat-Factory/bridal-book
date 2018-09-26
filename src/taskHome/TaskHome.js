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

  class TaskHome extends Component {
    static navigationOptions = ({navigation}) => ({
      title: 'Tasks',
      headerRight: 
        <TouchableOpacity onPress={() => navigation.navigate('CreateTask')}>
          <Image source={require('../assets/pencil.png')} 
            style={{marginRight: 15, height: 20, width: 20}}/>
        </TouchableOpacity>
      ,
      headerTitleStyle: {
        color: '#67769a',
        fontWeight: 'normal'
      }
    });

    displayTasks = () => {
      let tasks= this.props.tasks

      let renderTasks= tasks.map(task => {
        return (<Task {...props} />)
      })
    }

    render(){
      return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My To-Do List</Text>
        </View>
          <View style={styles.newTask}>
            <View style={styles.redBar}></View>
            <TouchableOpacity 
              style={styles.NewTaskTouch}
              onPress={() => this.props.navigation.navigate('CreateTask')}  >
              <Text style={styles.newTaskText}>Click here to add a task!</Text>
              <Image source={require('../assets/pencil.png')} 
            style={{marginRight: 15, height: 20, width: 20}}/>
            </TouchableOpacity>
          </View>
          <DisplayTasks />
        </View>
      )
    }
  }

  const mapStateToProps = state => ({
    tasks: state.tasks
  })
  export default connect(mapStateToProps, null)(TaskHome);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
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
    }
  })