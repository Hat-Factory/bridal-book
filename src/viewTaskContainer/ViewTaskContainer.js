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

import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';

class ViewTaskContainer extends Component {
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
      checked: false
    }
  }

  handleTask = () => {
    let taskId = this.props.viewedTask

    let taskToDisplay = this.props.tasks.filter(task => {
      // console.log(task)
      return task.id === taskId
    })
    // console.log(taskId)
    // console.log(taskToDisplay)
  }

  render(){
    return (
      <View>
        <Button
        title='hello'
        onPress={this.handleTask}>

        </Button>

      </View>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  viewedTask: state.viewedTask
})

export default connect(mapStateToProps, null)(ViewTaskContainer);