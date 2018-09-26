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

class ViewTask extends Component {
  constructor(props){
    super(props)

    this.state= {
      checked: false
    }
  }

  render(){
    return (
      <View>

      </View>
    )
  }
}

const mapStateToProps = dispatch => ({
  tasks: state.tasks
})

export default connect(mapStateToProps, null)(ViewTask);