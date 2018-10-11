
import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Slide from '../Slide/Slide';

const { width } = Dimensions.get('window');
const height = width * .9;

class HomeCarousel extends Component {
  constructor(props){
    super(props)

    this.state = {
      slides: [
        {
          title: "Katie's Bridal Shower", 
          desc: "Hey guys! Katie’s Bridal Shower is coming up in the next month and I wantd to get the event on our…", 
          month:'May 20 2018', 
          time:'6:00pm EST'
        }, 
        {
          title: "Katie's Bridal Shower", 
          desc: "Hey guys! Katie’s Bridal Shower is coming up in the next month and I wantd to get the event on our…", 
          month:'May 20 2018', 
          time:'6:00pm EST'
        }, 
        {
          title: "Katie's Bridal Shower", 
          desc: "Hey guys! Katie’s Bridal Shower is coming up in the next month and I wantd to get the event on our…", 
          month:'May 20 2018', 
          time:'6:00pm EST'
        }
      ]
    }
  }
  render() {
    // const { images } = this.props;
    if (this.state.slides.length) {
      return (
        <View
          style={styles.scrollContainer}
        >
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.scroller}
          >
            {this.state.slides.map(slide => (
              <Slide {...slide}/>
            ))}
          </ScrollView>
          <Text style={styles.update}>Updates</Text>
        </View>
      );
    }
    console.log('Please provide images');
    return null;    
  }
}


export default HomeCarousel

const styles = StyleSheet.create({
  scrollContainer: {
    height,
    backgroundColor: '#f8f8f8',
    width,
    paddingTop: 50,
    // paddingLeft: 30,
    paddingBottom: 10
  },
  update: {
    fontSize: 14,
    color: '#9b9b9b'
  },
  scroller: {
    // width: 350
    paddingLeft: 30
  }
});