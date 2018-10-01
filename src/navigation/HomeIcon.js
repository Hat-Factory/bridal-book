import React from 'react';
import { Image } from 'react-native';

export default class HomeIcon extends React.Component {
  render() {
    return (
      <Image
        source={require('../assets/home.png')}
        fadeDuration={0}
        style={{width: 20, height: 20}}
      />
    );
  }
}