
import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import ImageButton from '../ImageButton';

class ImagePick extends Component {

    state = {
        image: null
    }

    // _takePhoto = async () => {
    //     let result = await ImagePicker.launchCameraAsync({
    //         allowsEditing: false
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         this.setState({image: result.uri});
    //     }
    // }

    _takePhoto = async () => {
      const {
        status: cameraPerm
      } = await Permissions.askAsync(Permissions.CAMERA);
  
      const {
        status: cameraRollPerm
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
      // only if user allows permission to camera AND camera roll
      if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
        let pickerResult = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        if (!pickerResult.cancelled) {
          this.setState({image: pickerResult.uri});
        }
        // this._handleImagePicked(pickerResult);
      }
    };

    _pickImage = async () => {
      const {
        status: cameraRollPerm
      } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  
      // only if user allows permission to camera roll
      if (cameraRollPerm === 'granted') {
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
  
        // this._handleImagePicked(pickerResult);
      if (!pickerResult.cancelled) {
          this.setState({image: pickerResult.uri});
        }
      }
    };

    render() {
        let { image } = this.state;

        return(
            <View style={styles.containerStyle}>
              <Image style={[styles.profilePic, this.state.image && styles.profilePicActive]} source={require('../../assets/user.png')}/>
              { image &&
                  <Image
                    source={{uri: image}}
                    style={{width: 75, height: 75, borderRadius: 37.5, overflow: 'hidden' }}
                  />
              }
              <View style={styles.imageBtn}>
                <ImageButton
                  style={styles.button}
                  onPress={this._pickImage}
                  title="Upload Your Profile Picture"
                />
                <ImageButton
                  onPress={this._takePhoto}
                  title="Take a Picture"
                  />
              </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 100,
        alignItems: 'center',
        marginLeft: 25,
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
        marginHorizontal: 15
    },
    profilePic: {
      height: 75,
      width: 75
    },
    profilePicActive: {
      display: 'none'
    },
    title: {
      fontSize: 12,
      color: '#4a4a4a',
      marginLeft: 25
  },
  imageBtn: {
    flexDirection: 'column',
    marginLeft: 20
  }
}

export default ImagePick;