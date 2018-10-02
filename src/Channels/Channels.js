// var React = require('react-native'); 
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ListView,
  TouchableHighlight,
}from 'react-native';

// var sendbird = require('sendbird');
import sendbird from 'sendbird'
// const PULLDOWN_INSTANCE = 40; 


class Channels extends Component {
  constructor(props){
    super(props)

    let ds= new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
    let PULLDOWN_DISTANCE = 40
    this.state={
      channelList: [],
      dataSource: ds.cloneWithRows([]),
      page: 0,
      next: 0,
      channelName: '',
    }
  }

  onChannelPress = (url) => {
    console.log(url)
  }

  getChannelList = (page) => {
    if(page === 0) {
      return
    }
  }

  sendbirdChannels = (num) => {
    sendbird.getChannelList({
      page: page,
      limit: 20,
      succesFunc:(data) => {
        this.setState({channelList: this.state.channelList.concat(data.channels)}, ()=> {
          this.setState({
            dataSource: this.state.dataSource({rowHasChanged:(r1,r2)=> r1 !== r2}),
            page:data.page,
            next:data.next
          })
        })
      }
    })
  }

  componentWillMount= () => {
    this.getChannelList(1);
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.listContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.onChannelPress(rowData.channel_url)}>
                <View style={styles.listItem}>
                  <View style={styles.listIcon}>
                    <Image style={styles.channelIcon}  />
                  </View>
                  <View style={styles.listInfo}>
                    <Text style={styles.titleLabel}># {rowData.name}</Text>
                    <Text style={styles.memberLabel}>{rowData.member_count} members</Text>
                  </View>
                </View>
            </TouchableHighlight>}
            onEndReached={() => this.getChannelList(this.state.next)}
            onEndReachedThreshold={40}
          />
        </View>
      </View>
    );
  }
}

export default Channels; 

let styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'stretch',
backgroundColor: '#6E5BAA'
}
});

// sendbird.getChannelList({
//   page: page,
//   limit: 20,
//   succesFunc:(data) => {
//     this.setState({channelList: this.state.channelList.concat(data.channels)}, ()=> {
//       this.setState({
//         dataSource: this.state.dataSource({rowHasChanged:(r1,r2)=> r1 !== r2}),
//         page:data.page,
//         next:data.next
//       })
//     })
//   }
// })