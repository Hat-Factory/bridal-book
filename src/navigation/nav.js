import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux'
// import { Auth } from 'aws-amplify';
import LoginNavigator from './LoginNavigator';

import { Platform, StatusBar, StyleSheet, View } from 'react-native';

class Nav extends Component {
  constructor(props){
    super(props)

    this.state = {
      user:{},
      isLoading: false
    }
  }

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
  let loggedIn = false

  if (this.state.user.username) {
    loggedIn = true
  }
  if(loggedIn) {
    return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
   
    );
  }
  else {
    return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      <LoginNavigator />
    </View>
    )
  }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
