import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Button
} from 'react-native'


export default AppDrop = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
        >
        <Text style={styles.button}>HOME</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
        >
        <Text style={styles.button}>PROFILE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUp')
        }
      >
        <Text style={styles.button}>WEDDINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignIn')
        }
      >
        <Text style={styles.button}>SETTINGS</Text>
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
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUp')
          }
        >
          <Text style={styles.button}>LOG OUT</Text>
        </TouchableOpacity> 
      </View>      
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