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
  ScrollView
} from 'react-native';

import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'

// import { colors } from '../theme'
import { createUser, confirmUserSignUp, createAccount, confirmUserLogin } from '../actions';

import Input from '../components/Input'
import Button from '../components/Button'

const initialState = {
  username: '',
  password: '',
  email: '',
  phone_number: '',
  authCode: ''
}

class SignUp extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Sign Up',
    headerRight: 
      <TouchableOpacity onPress={() => navigation.navigate('SignInDrop')}>
        <Image source={require('../assets/menu.png')} 
          style={{marginRight: 15}}/>
      </TouchableOpacity>
    ,
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  });

  constructor(props){
    super(props)
    
    this.state = initialState
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signUp() {
    const { username, password, email, phone_number } = this.state
    this.props.dispatchCreateUser(username, password, email, phone_number)
    
  }

  confirm() {
    const { authCode, username } = this.state
    // let signIn = {
    //   username: this.state.username,
    //   password: this.state.password,
    //   accessCode: this.state.authCode
    // }

    this.props.dispatchConfirmUser(username, authCode)
    // this.props.navigation.navigate('CreateAccount')
    // this.props.dispatchConfirmUserLogin(signIn)
  }

  componentWillReceiveProps(nextProps) {
    const { auth: { showSignUpConfirmationModal }} = nextProps
    if (!showSignUpConfirmationModal && this.props.auth.showSignUpConfirmationModal) {
      this.setState(initialState)
    }
  }

  render() {
    const { auth: {
      showSignUpConfirmationModal,
      isAuthenticating,
      signUpError,
      signUpErrorMessage
    }} = this.props
    return (
      
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.greeting2}>
            Sign up to continue
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={this.state.username}
            placeholder="User Name"
            type='username'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.email}
            placeholder="Email"
            type='email'
            onChangeText={this.onChangeText}
          />
          <Input
            value={this.state.password}
            placeholder="Password"
            secureTextEntry
            type='password'
            onChangeText={this.onChangeText}
          />
          {/* <Text style={styles.passwordText}>Password must contain uppercase and lowercase letters, 8 characters, a number, and a special character(!@#)</Text> */}
          <Input
            placeholder="Phone Number"
            type='phone_number'
            keyboardType='numeric'
            onChangeText={this.onChangeText}
            value={this.state.phone_number}
          />
        </View>
          <TouchableOpacity onPress={this.signUp.bind(this)}>
            <View style={styles.signUp}>
              <Text style={styles.buttonText}>Next</Text>
            </View>
          </TouchableOpacity>
          <Button
                onPress={() => this.props.navigation.navigate('SignIn')
                }
            title='Already have an account? Sign in'
          />
        <Text style={[styles.errorMessage, signUpError && { color: 'black' }]}>Error logging in. Please try again.</Text>
        <Text style={[styles.errorMessage, signUpError && { color: 'black' }]}>{signUpErrorMessage}</Text>
        {
          showSignUpConfirmationModal && (
            <Modal>
              <View style={styles.modal}>
                <Text style={styles.modalText}>Please enter the verification code</Text>
                <Input
                  placeholder="Authorization Code"
                  type='authCode'
                  keyboardType='numeric'
                  onChangeText={this.onChangeText}
                  value={this.state.authCode}
                  keyboardType='numeric'
                />
                <Button
                  title='Confirm'
                  onPress={this.confirm.bind(this)}
                  isLoading={isAuthenticating}
                />
              </View>
            </Modal>
          )
        }
      </View>
 
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchConfirmUser: (username, authCode) => confirmUserSignUp(username, authCode),
  dispatchCreateUser: (username, password, email, phone_number) => createUser(username, password, email, phone_number),
  dispatchCreateAccount: () => createAccount(),
  dispatchConfirmUserLogin: signIn => confirmUserLogin(signIn),
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 20
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f8f8f8',
  },
  greeting2: {
    color: '#4a4a4a',
    fontSize: 12,
  },
  heading: {
    marginBottom: 10,
    marginTop: 40,
    width: 325,
    paddingLeft: 5
  },
  headingImage: {
    width: 38,
    height: 38
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent'   
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 50,
    backgroundColor: '#ed7766',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 325,
    height: 50,
    backgroundColor: '#ed7766',
    marginTop: 20,
  },
  modalText: {
    color: '#4a4a4a',
    fontSize: 16,
    marginBottom: 20
  },
  passwordText: {
    fontSize: 8
  }
});