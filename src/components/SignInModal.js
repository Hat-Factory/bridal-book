import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';

class SignInModal extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Sign Up',
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });


  render(){
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Your account has been created!
          </Text>
          <Text style={styles.titleDesc}>
            Please sign in to continue. 
          </Text>
        </View>
        <Text style={styles.desc}>
          We care a lot about keeping your personal data safe. 
          That's why we use two-factor authentication every step of the way. 
          Don't worry, you'll only have to sign in this one time. 
        </Text>
        <TouchableHighlight 
        style={styles.button}
        onPress={() => this.props.navigation.navigate('SignIn')}
        >
          <Text style={styles.buttonDesc}>Sign In</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default SignInModal;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30
  },
  titleContainer: {
    height: 100,
  },
  title: {
    fontSize: 21,
    textAlign: 'center',
    color: '#ed7766'
  },
  titleDesc: {
    textAlign: 'center',
    marginTop: 10,
    color: '#4a4a4a'
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    color: '#4a4a4a',
    lineHeight: 20,
    marginBottom: 100
  },
  button: {
    width: 325,
    height: 50,
    backgroundColor: '#ed7766',
    justifyContent: 'center'
  },
  buttonDesc: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})