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
import { addTask } from '../actions';

class CreateTask extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Create Task',
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });
    constructor(props){
      super(props)

      this.state= {
        taskTitle: '',
        taskDesc: '',
      }
    }


  onChangeText = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async(event) => {
    event.preventDefault();

    let task = {
      taskTitle: this.state.taskTitle,
      taskDesc: this.state.taskDesc,
      id: Date.now()
    }

    await this.props.dispatchTask(task)
    this.props.navigation.navigate('TaskHome')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create A Task</Text>
        </View>
        <View>
        <TextInput
          style={styles.taskTitle}
          placeholder={'Task Title'}
          placeholderTextColor="#a0a0a0"
          onChangeText={(taskTitle) => this.setState({taskTitle})}
          value={this.state.taskTitle}
          underlineColorAndroid='transparent'
          name='taskTitle'
        />
        <TextInput
          style={styles.taskNote}
          placeholder={'Task Note'}
          placeholderTextColor="#a0a0a0"
          onChangeText={(taskDesc) => this.setState({taskDesc})}
          value={this.state.taskDesc}
          underlineColorAndroid='transparent'
          multiline = {true}
          numberOfLines = {4}
          name='taskDesc'
        />
        </View>
        <TouchableHighlight
          style={styles.submitTask}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Create Task</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cancelTask}
          // onPress={this.signIn.bind(this)}
        >
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatchTask: task => dispatch(addTask(task))
})

export default connect(null, mapDispatchToProps)(CreateTask)



const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  titleContainer: {
    width: 350,
    marginLeft: 27,
    marginBottom: 15
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
    marginTop: 35,
    textAlign: 'left'
  },
  taskTitle: {
    height: 50,
    width: 310,
    backgroundColor: '#fff',
    paddingLeft: 20,
    borderColor: '#f1f1f1',
    borderWidth: 1
  },
  taskNote: {
    height: 150,
    width: 310,
    backgroundColor: '#fff',
    paddingLeft: 20,
    marginTop: 20,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    textAlign: 'justify',
    paddingTop: 10,
    paddingRight: 10,
  },
  submitTask: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    height: 50,
    backgroundColor: '#ed7766',
    marginTop: 150,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cancelTask: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 310,
    height: 50,
    backgroundColor: '#adacad',
    marginTop: 20
  }
})