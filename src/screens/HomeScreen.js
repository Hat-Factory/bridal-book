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

import BridalLogo from '../BridalLogo';
import HomeCarousel from '../HomeCarousel/HomeCarousel';
import UpdateContainer from '../UpdateContainer/UpdateContainer';

class Home extends Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: <BridalLogo />,
    headerRight: 
      <TouchableOpacity onPress={() => navigation.navigate('AppDrop')}>
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
      username: ''
    }
  }


  componentDidMount() {

  }

  navigate() {
    this.props.navigation.navigate('Route1')
  }

  render() {
    return (
      <View style={styles.container}>
          <HomeCarousel />
          <UpdateContainer />
        <View style={styles.homeContainer}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
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
