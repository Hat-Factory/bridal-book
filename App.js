import React from 'react';
import { Platform, AppState, AsyncStorage, PushNotificationIOS, StatusBar, StyleSheet, View } from 'react-native';


// import FCM, {
//   FCMEvent,
//   NotificationType,
//   NotificationActionType,
//   RemoteNotificationResult,
//   WillPresentNotificationResult
// } from "react-native-fcm";
import SendBird from 'sendbird';

import {
  sbRegisterPushToken
} from './sendbird/sendBirdActions';

import { AppLoading, Asset, Font, Icon } from 'expo';
import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/store';
import { connect } from 'react-redux'
import { Auth } from 'aws-amplify';
import { createStackNavigator } from 'react-navigation';

import SignIn from './src/auth/SignIn';
import SignUp from './src/auth/SignUp';

import Nav from './src/navigation/nav';
// import { withAuthenticator } from 'aws-amplify-react-native'
import Amplify from 'aws-amplify' // NEW
import config from './aws-exports' // NEW
Amplify.configure(config)

// const LoginNavigator =  createStackNavigator({
//   SignIn: {
//     screen: SignIn,
//     navigationOptions: () => ({
//       headerBackTitle: null
//     }),
//   },
//   SignUp:  {
//     screen: SignUp,
//     navigationOptions: () => ({
//       headerBackTitle: null
//     }),
//   },
//   // CreateAccount: CreateAccount,
//   // Nav: Nav,
//   // SignInDrop: SignInDrop

// })
class App extends React.Component {
  state = {
    isLoadingComplete: false,
    user: {},
    isLoading: false
  };

  async componentDidMount() {
    StatusBar.setHidden(true)
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.setState({ user, isLoading: false })
    } catch (err) {
      this.setState({ isLoading: false })
    }
  }
  async componentWillReceiveProps(nextProps) {
    try {
      const user = await Auth.currentAuthenticatedUser()
      this.setState({ user })
    } catch (err) {
      this.setState({ user: {} })
    }
  }

  render() {
 
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
      );
    } else {
      return (

      <Provider store={store}>
        <Nav />
      </Provider>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.FontAwesome.font,
        ...Icon.MaterialCommunityIcons.font,
        ...Icon.SimpleLineIcons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

// const mapStateToProps = state => ({
//   auth: state.auth
// })

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
