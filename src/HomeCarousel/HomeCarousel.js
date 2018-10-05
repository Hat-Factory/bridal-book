
import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import Slide from '../Slide/Slide';

const { width } = Dimensions.get('window');
const height = width * .9;

class HomeCarousel extends Component {
  constructor(props){
    super(props)

    this.state = {
      slides: [{name:'alan'}, {name:'bj'}, {name:'becci'}]
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
          >
            {this.state.slides.map(slide => (
              <Slide {...slide}/>
            ))}
          </ScrollView>
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
    width
  },
  image: {
    width,
    height,
  },
});