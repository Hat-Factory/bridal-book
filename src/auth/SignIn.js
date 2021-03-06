import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Modal
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
// import { Storage } from 'aws-amplify';
// import xmlToJson from '../xmlCleaner';

import { authenticate, confirmUserLogin } from '../actions';
import { sendbirdLogin } from '../../sendbird/sendBirdActions';
// let sendbird = require('sendbird')
import SendBird from 'sendbird';
const sb = new SendBird({appId: '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23'})


import Input from '../components/Input';
import Button from '../components/Button';

class SignIn extends Component {
    static navigationOptions = ({navigation}) => ({
      title: 'Sign In',
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
  
    this.state = {
      username: '',
      password: '',
      accessCode: '',
      userId: 15,
      error: '',
    }
  }

  componentWillReceiveProps(props) {
    let error = this.props.login.error
    let user = this.props.login.user
    // const { user, error } = props;
    if (user) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Menu' })
            ]
        })
        this.setState({ userId: '', nickname: '' }, () => {
            this.props.navigation.dispatch(resetAction);
        })
    }
  }

  userIdChanged = (userId) => {
    this.setState({ userId })
  }

  nicknameChanged = (nickname) => {
    this.setState({ nickname })
  }

  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    this.props.dispatchAuthenticate(username, password)
    // this.sendbirdInit()
  }

  sendbirdInit = () => {
    const { userId, username} = this.state;
    const sb = new SendBird({ 'appId': '9DA1B1F4-0BE6-4DA8-82C5-2E81DAB56F23' });
    sb.connect(userId, (user, error) => {
        if (error) {
            this.setState({ error });
        } else {
            sb.updateCurrentUserInfo(username, null, (user, error) => {
                if (error) {
                    this.setState({ error });
                } else {
                    this.setState({
                        userId: '',
                        username: '',
                        error: ''
                    }, () => {
                        console.log('hey');
                    });
                }
            })
        }
    })
  }

  async confirm() {
    const { authCode } = this.state
    let sendbirdInfo= {
      userId: this.state.userId,
      username: this.state.username
    }
    await this.props.dispatchConfirmUserLogin(authCode)
    this.props.dispatchsendbirdLogin(sendbirdInfo.userId, sendbirdInfo.username)
    this.sendbirdInit()

  }
  
  render() {
    const { fontsLoaded } = this.state
    const { auth: {
      signInErrorMessage,
      isAuthenticating,
      signInError,
      showSignInConfirmationModal
    }} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={[styles.greeting2]}>
            Enter your username and password to log in below
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            placeholder="User Name"
            type='username'
            onChangeText={this.onChangeText}
            value={this.state.username}
          />
          <Input
            placeholder="Password"
            type='password'
            onChangeText={this.onChangeText}
            value={this.state.password}
            secureTextEntry
          />
        </View>

        <TouchableHighlight
          style={styles.signIn}
          onPress={this.signIn.bind(this)}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableHighlight>
          <Button
                onPress={() => this.props.navigation.navigate('SignUp')
                }
            title='Create New Account'
          />
        <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>Error logging in. Please try again.</Text>
        <Text style={[styles.errorMessage, signInError && { color: 'black' }]}>{signInErrorMessage}</Text>
        {
          showSignInConfirmationModal && (
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

const mapDispatchToProps = {
  dispatchConfirmUserLogin: authCode => confirmUserLogin(authCode),
  dispatchAuthenticate: (username, password) => authenticate(username, password),
  dispatchsendbirdLogin: (userId, username) => sendbirdLogin(userId, username)
}

const mapStateToProps = state => ({
  auth: state.auth,
  new: state.new,
  login: state.login
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    marginBottom: 30,
    marginTop: 40,
    // textAlign: 'left',
    width: 325,
    paddingLeft: 5
  },
  errorMessage: {
    fontSize: 12,
    marginTop: 10,
    color: 'transparent',
  },
  inputContainer: {
    marginTop: 5
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#f8f8f8'
  },
  greeting2: {
    color: '#4a4a4a',
    fontSize: 12,
  },
  signIn: {
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
  modalText: {
    color: '#4a4a4a',
    fontSize: 16,
    marginBottom: 20
  }
});
