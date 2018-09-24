import React from 'react'
import {
  StyleSheet,
  TextInput
} from 'react-native'

// import { colors } from '../theme'

export default ({ placeholder, onChangeText, type, ...props }) => (
  <TextInput
    autoCapitalize='none'
    autoCorrect={false}
    style={[styles.input]}
    placeholder={placeholder}
    placeholderTextColor="#a0a0a0"
    onChangeText={value => onChangeText(type, value)}
    underlineColorAndroid='transparent'
    {...props}
  />
)

const styles = StyleSheet.create({
  input: {
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 16,
    height: 50,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: 325,
    backgroundColor: '#fff',
    fontSize: 12,
    // color: '#4a4a4a'
  }
})