import { WebBrowser } from 'expo';
import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';

import { logOut } from '../actions';
import { colors } from '../theme';


class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props)

    this.state = {
      username: ''
    }
  }


  componentDidMount() {
  
  }


  logout() {
    Auth.signOut()
      .then(() => {
        this.props.dispatchLogout()
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }

  navigate() {
    this.props.navigation.navigate('Route1')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text onPress={this.logout.bind(this)} style={styles.welcome}>Logout</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeContainer: {
    alignItems: 'center'
  },
  welcome: {
    // fontFamily: fonts.light,
    color: 'rgba(0, 0, 0, .85)',
    marginBottom: 26,
    fontSize: 22,
    textAlign: 'center'
  },
  registration: {
    // fontFamily: fonts.base,
    color: 'rgba(0, 0, 0, .5)',
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = {
  dispatchLogout: () => logOut()
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
