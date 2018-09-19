import React, {Component} from 'react';
import {Text, 
  View, 
  StyleSheet, 
  TextInput, 
  Button, 
  TouchableHighlight, 
  TouchableOpacity,
  Modal,
  Image} from 'react-native';

import { Storage } from 'aws-amplify';
import { CheckBox } from 'react-native-elements';

class CreateAccount extends Component {
  static navigationOptions = {
    title: 'Create Account',
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal'
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First name',
      lastName: 'Last name',
      hashTag: '#WeddingHashtag',
      pickerSelection: "I'm the bride",
      pickerDisplayed: false,
      checked: false
    };
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    let file = {
      first: this.state.firstName,
      last: this.state.lastName, 
      hashTag: this.state.hashTag,
      role: this.state.pickerSelection
    };

    let jsonFile = JSON.stringify(file)
    let name = 'userAccountInfo.json';
    const access = { level: "public" }; // note the access path
    Storage.configure({
      bucket: 'bridalbook-userfiles-mobilehub-1144877802'
  });
    Storage.put(name, jsonFile, access);
  }

  setPickerValue(newValue) {
    this.setState({
      pickerSelection: newValue
    })

    this.togglePicker();
  }

  togglePicker() {
    this.setState({
      pickerDisplayed: !this.state.pickerDisplayed
    })
  }

  render() {

    const pickerValues = [
      {
        title: "I'm the bride",
        value: "I'm the bride"
      },
      {
        title: "I'm a bridesmaid",
        value: "I'm a bridesmaid"
      }
    ]
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.profile}>
            <Image style={styles.profilePic} source={require('../assets/user.png')}/>
            <Text style={styles.title}>Upload a profile picture</Text>
          </View>
          <View style={styles.nameForm}>
            <TextInput style={styles.inputs}
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}
            />
            <TextInput style={styles.inputs}
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}
            />
          </View>
          <View style={styles.container}>
            <TouchableOpacity 
              onPress={() => this.togglePicker()} 
              style={styles.dropDown}
              >
              <Text style={{color:'#4a4a4a', fontSize: 12}}>{ this.state.pickerSelection }</Text>
              <Image style={styles.dropDownImg} source={require("../assets/down-arrow.png")}/>
            </TouchableOpacity>

            <Modal visible={this.state.pickerDisplayed}  transparent={true}>
              <View style={{ padding: 20,
                position: 'absolute',
                top: 292,
                marginLeft: 26,
                borderTopWidth: .5,
                borderTopColor: '#f1f1f1',
                width: 323,
                backgroundColor: '#fff',
                alignItems: 'center',
                 }}>
              { pickerValues.map((value, index) => {
              return <TouchableHighlight key={index} onPress={() => this.setPickerValue(value.value)} style={{ paddingTop: 4, paddingBottom: 4 }}>
                  <Text>{ value.title }</Text>
                </TouchableHighlight>
            })}
            <TouchableHighlight onPress={() => this.togglePicker()} style={{ paddingTop: 4, paddingBottom: 4 }}>
              <Text style={{ color: '#999' }}>Cancel</Text>
            </TouchableHighlight>
            </View>
          </Modal>
        </View>
            <Text style={styles.hashTagTitle}>Choose Your Wedding Hashtag!</Text>
          <TextInput 
            style={styles.hashtagInput}
            onChangeText={(hashTag) => this.setState({hashTag})}
            value={this.state.hashTag}
          />
          <View style={styles.checkView}>
          <CheckBox
          containerStyle={styles.checkContainer}
          textStyle={styles.checkText}
          title="Choose my hashtag later"
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
            {/* <Text style={styles.checkTitle}>Choose my hashtag later</Text> */}
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
          >
          <Text style={styles.buttonText}>Next</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8',
    height: 100,
    flex: 1,
  },
  form: {
    flex: 1
  },
  inputs: {
    marginLeft: 25,
    height: 50,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: 150,
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: 12,
    color: '#4a4a4a'
  },
  hashtagInput: {
    backgroundColor: '#fff',
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: 325,
    height: 50,
    marginLeft: 25,
    position: 'absolute',
    top: 290,
    fontSize: 12,
    color: '#4a4a4a',
    paddingLeft: 20,
  },
  hashTagTitle: {
    fontSize: 12,
    color: '#4a4a4a',
    left: 100,
    right: 25,
    position: 'absolute',
    top: 250
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 25,
    width: 325,
    height: 50,
    backgroundColor: '#ed7766',
    marginTop: 20,
    position: 'absolute',
    top: 415
  },
  title: {
    fontSize: 12,
    color: '#4a4a4a',
    // marginTop: 50,
    // marginBottom: 40,
    marginLeft: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  nameForm: {
    flexDirection: 'row'
  },
  dropDown: {
    backgroundColor: '#fff',
    padding: 10,
    paddingTop: 10,
    paddingRight: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    width: 325,
    marginLeft: 25,
    paddingLeft: 20,
    borderColor: '#f1f1f1',
    borderWidth: 1,
  },
  dropDownImg: {
    marginRight: 8,
    marginTop: 2,
    height: 13,
    width: 13,
  },
  checkbox: {
    backgroundColor: '#fff'
  },
  checkView: {
    position: 'absolute',
    top: 350,
    flexDirection: 'row',
    marginLeft: 9
  },
  checkTitle: {
    color: '#4a4a4a',
    fontSize: 12,
    marginLeft: 10
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    width: 400,
    marginLeft: 25,
    marginBottom: 10
  },
  profilePic: {
    height: 75,
    width: 75
  },
  checkContainer: {
    backgroundColor: '#f8f8f8',
    borderColor: '#f8f8f8',
    // position: 'absolute',
    // right: 10
  },
  checkText: {
    fontWeight: 'normal',
    color: '#4a4a4a',
    fontSize: 12,
  }
});

export default CreateAccount;