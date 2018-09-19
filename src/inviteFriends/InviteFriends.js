import React, {Component} from 'react';
import {Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableHighlight, 
  TouchableOpacity,
  Modal,
  Image} from 'react-native';

  class InviteFriends extends Component {
    constructor(props){
      super(props)

    }

    render(){
      return (
        <View style={styles.container}>
          <Image style={styles.profilePic} source={require('../assets/user.png')}/>
          <Text style={styles.title}>Welcome Katie</Text>
          <View style={styles.descContainer}>
            <Text style={styles.desc}>Now that you've made you're profile, let's invite your bridal party</Text>
          </View>
          <TouchableOpacity style={styles.inviteButton}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.laterButton}>
            <Text style={styles.buttonText}>I'LL INVITE THEM LATER</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  export default InviteFriends;

  styles= StyleSheet.create({
    profilePic: {
      height: 100,
      width: 100,
      marginBottom: 20,
      marginTop: 60
    },
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      flexDirection: 'column',
      alignItems: 'center'
    },
    title:{
      fontSize: 21,
      fontWeight: 'bold',
      color: '#4a4a4a',
      marginBottom: 20
    },
    desc: {
      fontSize: 14,
      fontWeight:'normal',
      color: '#4a4a4a',
      textAlign: 'center',
      lineHeight: 21.5
    }, 
    descContainer: {
      padding: 15,
    },
    inviteButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 325,
      height: 50,
      backgroundColor: '#ed7766',
      marginTop: 20,
    },
    laterButton: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 325,
      height: 50,
      backgroundColor: '#adacad',
      marginTop: 20,
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight:'bold'
    }
  })