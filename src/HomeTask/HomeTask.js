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
import { withNavigation } from 'react-navigation';


import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { addTaskID } from '../actions';

class Task extends Component {
  constructor(props){
    super(props)

    this.state= {
      checked: false
    }
  }

  handlePress = (event) => {
    event.preventDefault()
    let id= this.props.id
    // console.log(id)
    this.props.dispatchTaskID(id)
    this.props.navigation.navigate('ViewTaskContainer')
    // this.props.navigation.navigate('SignUp')
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <TouchableHighlight
            onPress={this.handlePress}
          >
            <View styles={styles.titleContainer}>
              <Text style={styles.title}>{this.props.taskTitle}</Text>
            </View>
          </TouchableHighlight>
          <View>
            <Text style={styles.desc}>{this.props.taskDesc}</Text>
          </View>
        </View>
        <View style={styles.clearButtonContainer}>
              <Image style={styles.clearButton} source={require('../assets/clear-button.png')}/>
          </View>
      </View>
    )
  }
}

const mapDispatchToProps= dispatch => ({
  dispatchTaskID: (id) => dispatch(addTaskID(id))
})

export default withNavigation(connect(null, mapDispatchToProps)(Task));

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 360,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#eeeeee',
    paddingLeft: 20 ,
    justifyContent: 'space-between'
  },
  title: {
    color: '#4a4a4a',
    fontSize: 14,
    marginBottom: 7
  },
  titleContainer: {
    overflow: 'hidden',
    width: 290,
    height: 30,
    justifyContent: 'flex-start'
  },
  clearButtonContainer: {
    paddingRight: 20,
    paddingTop: 15,
  },
  clearButton: {
    height: 10,
    width: 10
  },
  textContainer: {
    flexDirection: 'column',
    width: 270,
    paddingTop: 10
  },
  desc: {
    color: '#9b9b9b',
    fontSize: 12
  }

})