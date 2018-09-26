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
    title: typeof(navigation.state.params)==='undefined' || typeof(navigation.state.params.title) === 'undefined' ? 'Task': navigation.state.params.title,
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });
  constructor(props){
    super(props)

    this.state= {
      checked: false,
      tasks: {},
      title: ''
    }
  }

  handleTask = () => {
    let taskId = this.props.viewedTask

    let taskToDisplay = this.props.tasks.filter(task => {
      return task.id === taskId
    })

    this.setState({tasks: taskToDisplay})
  }

  async componentDidMount(){
    await this.handleTask();   
  }

  async componentWillReceiveProps(nextProps) {
    const {viewedTasks} = nextProps
    let title = viewedTasks[0].taskTitle
    await this.props.navigation.setParams({ title: title })
  }

  render(){
    return (
      <View style={styles.container}>
        <DisplayedTask tasks={this.state.tasks}/>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            checked={this.state.checked}
            onPress={() => this.setState({ checked: !this.state.checked})}
            containerStyle={styles.checkBox}
            title='Complete task'
            fontStyle={styles.checkBoxText}
          />
        </View>
        <TouchableHighlight style={styles.cancelButton}>
          <Text style={styles.cancelText}>Delete Task</Text>
        </TouchableHighlight>
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
  },
  checkBoxContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'flex-start',
    alignItems:'center',
    width: 349,
    marginTop: 30,
    // paddingRight: 10
  },
  checkBox: {
    backgroundColor: '#f8f8f8',
    borderColor: '#f8f8f8',
    height: 45,
    width: 300,
    // justifyContent: 'center',
    alignItems: 'flex-start'
  },
  checkBoxText: {
    color: '#4a4a4a',
    fontWeight: 'normal',
    // marginRight: 270
  },
  cancelButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 50,
    backgroundColor: '#adacad',
    marginTop: 120,
  },
  cancelText: {
    color: '#fff',
    fontSize: 14,
    fontWeight:'bold'
  }
})