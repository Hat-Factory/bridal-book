import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import ImageButton from '../ImageButton';
import { connect } from 'react-redux';
import { addImage } from '../../actions';
import { RNS3 } from 'react-native-aws3';
import { aws } from '../../keys';

class ImagePick extends Component {

    state = {
        image: null,
        uploading: false
    }


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
        const blob = await this.handleImage(pickerResult)
        await this.props.dispatchImage(blob)
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

      if (!pickerResult.cancelled) {
          this.setState({image: pickerResult.uri});
        }
        const blob = await this.handleImage(pickerResult)
        await this.props.dispatchImage(blob)
      }
    };

    handleImage = (response) => {
      let userId = this.props.auth.user.pool.clientId 
      console.log(userId)
      let file = {
        uri: response.uri,
        name: 'image.png',
        type: 'image/png'
      }

      const config = {
        keyPrefix: `profile/${userId}`,
        bucket: 'bridal-book-users',
        region: 'us-west-2',
        accessKey: aws.accessKeyId,
        secretKey: aws.secretAccessKey,
        successActionStatus: 201
      }

      RNS3.put(file, config)
        .then((response)=>{
          console.log(response)
          console.log(response.body.postResponse.location)
        })
    }

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

const mapDispatchToProps = (dispatch) => ({
  dispatchImage: image => dispatch(addImage(image)),
})

const mapStateToProps = (state) => ({
  auth: state.auth
})
export default connect(mapStateToProps, mapDispatchToProps)(ImagePick);