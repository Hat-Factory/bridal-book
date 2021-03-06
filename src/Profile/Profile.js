// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { connect } from 'react-redux';
// import { initProfile, getCurrentUserInfo, updateProfile } from '../sendbirdActions'
// import { 
//     Button, 
//     Avatar, 
//     FormLabel, 
//     FormInput, 
//     FormValidationMessage
// } from 'react-native-elements';

// class Profile extends Component {
//     static navigationOptions = ({ navigation }) => {
//         const { params } = navigation.state;
//         return {
//             title: 'PROFILE',
//             headerRight: (
//                 <Button 
//                     containerViewStyle={{marginLeft: 0, marginRight: 0}}
//                     buttonStyle={{paddingRight: 14}}
//                     color={'#7d62d9'}
//                     title='save'
//                     backgroundColor='transparent'
//                     onPress={ () => { params.handleSave() } }
//                 />
//             )
//         }
//     };

//     constructor(props) {
//         super(props);
//         this.state = {
//             profileUrl: '',
//             username: ''
//         }
//     }

//     componentDidMount() {
//         this.props.navigation.setParams({ handleSave: this._onSaveButtonPress })
//         this.props.dispatchInitProfile();
//         this.props.dispatchGetCurrentUserInfo();
//     }

//     componentWillReceiveProps(props) {
//         // const { userInfo, isSaved } = props;
//         let userInfo = this.props.profile.userInfo;
//         let isSaved = this.props.profile.isSaved;
//         if (userInfo) {
//             const { profileUrl, username } = userInfo;
//             this.setState({ profileUrl, username });
//         }
//         if (isSaved) {
//             this.props.navigation.goBack();
//         }
//     }

//     _onNicknameChanged = (username) => {
//         this.setState({ username });
//     }

//     _onSaveButtonPress = () => {
//         this.props.dispatchUpdateProfile(this.state.username);
//     }

//     render() {
//         return (
//             <View style={styles.containerStyle}>
//                 <View style={{justifyContent: 'center', flexDirection: 'row', marginTop: 50, marginBottom: 50}}>
//                     <Avatar 
//                         large
//                         rounded
//                         source={{uri: this.state.profileUrl}}
//                     />
//                 </View>

//                 <FormLabel labelStyle={[styles.defaultMargin, {marginTop: 20, fontSize: 13, fontWeight: '400'}]}>
//                     Nickname
//                 </FormLabel>
//                 <FormInput 
//                     containerStyle={styles.defaultMargin}
//                     selectionColor = { '#000' }
//                     inputStyle={{color: '#000'}}
//                     value={this.state.nickname}
//                     maxLength={12}
//                     onChangeText={this._onNicknameChanged} 
//                 />
//                 <FormValidationMessage labelStyle={{marginLeft: 14}}>
//                     {this.props.error}
//                 </FormValidationMessage>
//             </View>
//         )
//     }
// }

// const styles = {
//     containerStyle: {
//         backgroundColor: '#fff', 
//         flex: 1
//     },
//     defaultMargin: {
//         marginLeft: 14, 
//         marginRight: 14
//     }
// };

// // function mapStateToProps({ profile }) {
// //     const { userInfo, error, isSaved } = profile;
// //     return { userInfo, error, isSaved };
// // };

// const mapStateToProps = state => ({
//   profile: state.profile
// })

// const mapDispatchToProps = dispatch => ({
//   dispatchInitProfile: () => dispatch(initProfile()),
//   dispatchGetCurrentUserInfo: () => dispatch(getCurrentUserInfo()),
//   dispatchUpdateProfile: (username) => dispatch(updateProfile(username))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);