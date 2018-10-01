import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-navigation';
import {withNavigation} from 'react-navigation'

import InviteScreen from '../InviteScreen/InviteScreen'

class WeddingsHome extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Create Party',
    // headerRight: 
    //   <TouchableOpacity onPress={() => navigation.navigate('AppDrop')}>
    //     <Image source={require('../assets/menu.png')} 
    //       style={{marginRight: 15}}/>
    //   </TouchableOpacity>
    // ,
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });
  constructor(props){
    super(props)
    this.state={
      weddings: []
    }
  }

  render(){
    if(!this.state.weddings.length){
      return(
        <InviteScreen />
      )
    }
    else{
      return(
        <View>
          <Text>this text is a placeholder</Text>
        </View>
      )
    }
  }
}

export default withNavigation(WeddingsHome);