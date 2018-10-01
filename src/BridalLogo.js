import React, {Component} from 'react';
import {Image} from 'react-native';

class BridalLogo extends Component {
  render() {
    return (
      <Image
        source={require('./assets/bridal-logo.png')}
        style={{ width: 165, height: 30, marginBottom:10 }}
      />
    );
  }
}

export default BridalLogo