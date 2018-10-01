import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  Image
} from 'react-native'

import {withNavigation} from 'react-navigation';

const AppDrop = (props) => {
  return (
    <View style={styles.container}>
                  <Image style={styles.profilePic} source={require('../assets/user.png')}/>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')
        }
        >
        <Text style={styles.boldButton}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Home')
        }
        >
        <Text style={styles.boldButton}>PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('WeddingsHome')
        }
      >
        <Text style={styles.boldButton}>WEDDINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('WeddingsHome')
        }
      >
        <Text style={styles.boldButton}>SETTINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>MESSAGES</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>CALENDAR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>BOARDS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>TASKS</Text>
      </TouchableOpacity>
      <View style={styles.logOut}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')
          }
        >
          <Text style={styles.logOutText}>LOG OUT</Text>
        </TouchableOpacity> 
      </View>      
    </View>
    
  )
}

export default withNavigation(AppDrop);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  button: {
    color: '#292929',
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 20
  },
  boldButton: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 25
  },
  title: {
    color: '#ed7766',
    fontSize: 21,
    marginTop: 10,
    marginBottom: 30,
    fontWeight:'normal'
  },
  profilePic: {
    height: 75,
    width: 75,
    marginTop: 30,
    marginBottom: 30
  },
  logOut: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    backgroundColor: '#ed7766',
  },
  logOutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})