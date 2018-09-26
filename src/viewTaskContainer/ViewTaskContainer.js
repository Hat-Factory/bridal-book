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

import DisplayedTask from '../displayedTask/DisplayedTask';

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
      checked: false,
      tasks: {}
    }
  }

  handleTask = () => {
    let taskId = this.props.viewedTask

    let taskToDisplay = this.props.tasks.filter(task => {
      // console.log(task)
      return task.id === taskId
    })

    this.setState({tasks: taskToDisplay})
  }

  async componentDidMount(){
    const tasks= await this.handleTask()
      console.log(tasks)
    // await this.setState({task})
  }

  render(){
    return (
      <View style={styles.container}>
        <DisplayedTask tasks={this.state.tasks}/>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  viewedTask: state.viewedTask
})

export default connect(mapStateToProps, null)(ViewTaskContainer);

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  }
})