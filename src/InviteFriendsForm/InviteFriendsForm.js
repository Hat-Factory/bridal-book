import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Modal,
  TouchableHighlight,
  ScrollView,
  Button
} from 'react-native';

import Input from '../components/Input'

class InviteFriendsForm extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Invite Your Party</Text>
          <Text style={styles.desc}>Now that you've set up your profile, let's invite your bridal party!</Text>
        </View>
        <TouchableOpacity 
          style={styles.contactsBtn}
        >
          <Text style={styles.btntext}>INVITE FROM CONTACTS</Text>
        </TouchableOpacity>
        <View style={styles.orContainer}>
          <Text style={styles.or}>Or</Text>
        </View>
        <View style={styles.manualInput}>
          <TextInput style={styles.inputs}
            onChangeText={(firstName) => this.setState({firstName})}
            placeholder={'Name'}
          />
          <TextInput style={styles.inputs}
            onChangeText={(lastName) => this.setState({lastName})}
            placeholder={'Phone Number'}
          />
        </View>
        <TouchableOpacity
          style={styles.addManual}
        >
        <Text style={styles.manualText} >Add Contact</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendBtn}
        >
          <Text style={styles.btntext}>SEND INVITATIONS</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default InviteFriendsForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f8f8f8',
  },
  titleContainer: {
      marginBottom: 10,
      marginTop: 40,
      width: 300,
      paddingLeft: 5,
      alignItems: 'center',
      marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 15,
    color: '#4a4a4a'
  },
  desc: {
    color: '#4a4a4a',
    textAlign: 'center',
    lineHeight: 23
  },
  contactsBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 50,
    backgroundColor: '#adacad',
    marginTop: 20,
    marginBottom: 25
  },
  btntext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  orContainer: {
    width: 325
  },
  or: {
    textAlign:'left',
    color: '#4a4a4a',
    marginBottom: 25
  },
  manualInput: {
    flexDirection: 'row',
    paddingRight: 30,
    marginBottom: 20
  },
  inputs: {
    marginLeft: 25,
    height: 50,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 12,
    color: '#4a4a4a'
  },
  addManual: {
    marginBottom: 20
  },
  manualText: {
    color: '#ed7766'
  },
  sendBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 50,
    backgroundColor: '#ed7766',
    marginTop: 125,
    marginBottom: 25
  }
})