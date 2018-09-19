import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native'

// import Button from './Button';

export default SignInDrop = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
        >
        <Text style={styles.button}>FAQ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>Support</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignIn')
        }
      >
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  button: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 20
  },
  title: {
    color: '#ed7766',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 30,
    fontWeight:'normal'
  }
})