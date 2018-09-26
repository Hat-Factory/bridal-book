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

class Task extends Component {
  constructor(props){
    super(props)

    this.state= {
      checked: false
    }
  }


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.redBar}></View>
        <View styles={styles.titleContainer}>
          <Text style={styles.title}>{this.props.taskTitle}</Text>
        </View>
        <CheckBox
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked})}
          containerStyle={styles.checkBox}
        />
      </View>
    )
  }
}

export default Task;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 330,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  redBar: {
    height: 50,
    width: 3,
    backgroundColor: '#ed7766'
  },
  title: {
    color: '#4a4a4a',
    fontSize: 14,
    marginTop: 15,
    marginRight: 150
  },
  titleContainer: {
    marginTop: 20
  },
  checkBox: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    height: 45
  }
})