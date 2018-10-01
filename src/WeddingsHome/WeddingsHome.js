import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-navigation';


class WeddingsHome extends Component {
  constructor(props){
    super(props)
    this.state={
      weddings: null
    }
  }

  render(){
    if(!this.state.weddings.length){
      return(
   
      )
    }
    else{
      return(

      )
    }
  }
}

export default WeddingsHome;