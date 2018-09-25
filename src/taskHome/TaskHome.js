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


  class TaskHome extends Component {
    static navigationOptions = ({navigation}) => ({
      title: 'Tasks',
      headerRight: 
        <TouchableOpacity onPress={() => navigation.navigate('SignInDrop')}>
          <Image source={require('../assets/pencil.png')} 
            style={{marginRight: 15, height: 20, width: 20}}/>
        </TouchableOpacity>
      ,
      headerTitleStyle: {
        color: '#67769a',
        fontWeight: 'normal'
      }
    });

    render(){
      return (
        <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My To-Do List</Text>
        </View>
          <View style={styles.newTask}>
            <View style={styles.redBar}></View>
            <TouchableOpacity style={styles.NewTaskTouch}>
              <Text style={styles.newTaskText}>Click here to add a task!</Text>
              <Image source={require('../assets/pencil.png')} 
            style={{marginRight: 15, height: 20, width: 20}}/>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

  export default TaskHome;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      // textAlign: 'left'
      // justifyContent: 'center'
    },
    titleContainer: {
      width: 350,
      textAlign: 'left',
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
      width: 5,
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