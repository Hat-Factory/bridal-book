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

import { Auth } from 'aws-amplify';
import { connect } from 'react-redux';
import { Storage } from 'aws-amplify';
import xmlToJson from '../xmlCleaner';

import { authenticate, confirmUserLogin } from '../actions';

let sendbird = require('sendbird')

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
      accessCode: ''
    }
  }
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    this.props.dispatchAuthenticate(username, password)
    this.sendbirdInit()
  }

  sendbirdInit = () => {
    sendbird.init({
      app_id: 'C59A1464-A748-4A9B-808F-794740FD36F3',
      guest_id: this.state.username,
      user_name: this.state.username,
      image_url: "",
      access_token: "",
      successFunc: (data) => {
        console.log('success');
      },
      errorFunc: (status, error) => {
        this.setState({username: ''});
      }
    });
  }

  async confirm() {
    const { authCode } = this.state
    await this.props.dispatchConfirmUserLogin(authCode)

    // let session =  await Auth.currentSession();

    // let loginID= await session.getIdToken()

    let userID =   this.props.auth.user.pool.clientId 


    // let params = {
    //   IdentityPoolId: 'us-east-1:9494a962-e902-4371-b1b3-564d4c36d91b',
    //   AccountId: 835930148152 ,
    //   Logins: {
    //     'cognito-idp.us-east-1.amazonaws.com/us-east-1_9pZdh4UYj': loginID
    //   }
    // };

    //  let user = cognitoidentity.getId(params, function(err, data) {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else     console.log(data);           // successful response
    // });

    // let identityParams = {
    //   IdentityId: user.IdentityId, 
    //   Logins: {
    //     'cognito-idp.us-east-1.amazonaws.com/us-east-1_9pZdh4UYj': loginID
    //   }
    // };
    // let userCreds = cognitoidentity.getCredentialsForIdentity(identityParams, function(err, data) {
    //   if (err) console.log(err, err.stack); // an error occurred
    //   else     console.log(data);           // successful response
    // });

    await Storage.configure({
      bucket: 'bridalbook-userfiles-mobilehub-1144877802/users'
  });

    let info = await Storage.get(`${userID}`, { level: 'protected' })
    await console.log('***',info)

    const data = await fetch(info)
    // const response = await data.json()
    let promiseClean = await Promise.resolve(data)
    console.log(promiseClean)
    // let clean = await xmlToJson(promiseClean)
    // console.log(clean)
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
  dispatchAuthenticate: (username, password) => authenticate(username, password)
}

const mapStateToProps = state => ({
  auth: state.auth,
  new: state.new
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
