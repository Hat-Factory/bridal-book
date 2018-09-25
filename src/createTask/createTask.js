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

class CreateTask extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Create Task',
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create A Task</Text>
        </View>
      </View>
    )
  }
}

export default CreateTask;

const styles= StyleSheet.create({
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
})