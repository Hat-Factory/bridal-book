import React, {Component} from 'react';
import {Text, 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableHighlight, 
  TouchableOpacity,
  Modal,
  Image} from 'react-native';

  class InviteScreen extends Component {
    static navigationOptions = ({navigation}) => ({
      title: 'Create Party',
      headerTitleStyle: {
        color: '#67769a',
        fontWeight: 'normal'
      }
    });
    constructor(props){
    super(props) 

    }

    render(){
      return (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Let's setup your bridal party!</Text>
          </View>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>I'M THE BRIDE</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
          >
            <Text style={styles.buttonText}>I'M NOT THE BRIDE</Text>
          </TouchableHighlight>
        </View>
      )
    }
  }

  export default InviteScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
    },
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 310,
      height: 50,
      backgroundColor: '#ed7766',
      marginBottom:100,
    },
    titleContainer: {
      width: 350,
      marginLeft: 27,
      marginBottom: 100
    },
    title: {
      fontSize: 12,
      color: '#4a4a4a',
      marginTop: 35,
      textAlign: 'left'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
  })