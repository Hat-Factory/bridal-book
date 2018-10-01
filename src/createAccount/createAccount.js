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
import ImagePick from '../components/imagePicker/ImagePicker';
import { connect } from 'react-redux';
import Input from '../components/Input';


class CreateAccount extends Component {
  static navigationOptions = {
    title: 'Create Account',
    headerTitleStyle: {
      color: '#67769a',
      fontWeight: 'normal',
    }
  };

  constructor(props) {
    super(props);

    this.state = {
      firstName: 'First name',
      lastName: 'Last name',
      weddingDate: '',
      weddingTheme: '',
      weddingLocation: '',
      userID: null,
      image: null
    };
  }

  handleSubmit = async(event) => {
    event.preventDefault();
    await this.setState({image: this.props.image})
    let file = {
      first: this.state.firstName,
      last: this.state.lastName, 
      image: this.state.image
    };

    let jsonFile = JSON.stringify(file)
    let name = 'alan';
    const access = { level: "protected" };

    Storage.configure({
      bucket: 'bridalbook-userfiles-mobilehub-1144877802/users',
  });

    Storage.put(name, jsonFile, access);
    this.props.navigation.navigate('Home');
  }


  async componentDidMount() {
    let userID =   this.props.auth.user.pool.clientId 
   await this.setState({ userID })
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.form}>
            <ImagePick />
          <View style={styles.nameForm}>
            <TextInput style={styles.inputs}
              onChangeText={(firstName) => this.setState({firstName})}
              placeholder={'First name'}
            />
            <TextInput style={styles.inputs}
              onChangeText={(lastName) => this.setState({lastName})}
              placeholder={'Last name'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input 
              placeholder={'Wedding Date'}
              style={styles.inputDetails}
              onChangeText={(weddingDate) => this.setState({weddingDate})}
            />
            <Input 
              placeholder={'Wedding Location'}
              style={styles.inputDetails}
              onChangeText={(weddingLocation) => this.setState({weddingLocation})}
            />
            <Input 
              placeholder={'Wedding Theme'}
              style={styles.inputDetails}
              onChangeText={(weddingTheme) => this.setState({weddingTheme})}
            />
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

  dropDownImg: {
    marginRight: 8,
    marginTop: 2,
    height: 13,
    width: 13,
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
  inputContainer: {
    marginLeft: 25,
    marginTop: 20,
  },
  inputDetails: {
    color: '#4a4a4a',
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 16,
    height: 50,
    borderColor: '#f1f1f1',
    borderWidth: 1,
    width: 325,
    backgroundColor: '#fff',
    fontSize: 12,
  }
});


const mapStateToProps = state => ({
  auth: state.auth,
  image: state.image
})
export default connect(mapStateToProps)(CreateAccount);