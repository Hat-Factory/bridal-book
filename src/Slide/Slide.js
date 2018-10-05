import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Slide extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Text style={styles.month}>{this.props.month}</Text>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.paragraph}>{this.props.title}</Text>
        </View>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>{this.props.desc}</Text>
        </View>
        <View style={styles.organizedContainer}>
            <Text style={styles.organized}>Oraganized by</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 300,
    marginRight: 30,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    shadowColor: '#000'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  logo: {
    backgroundColor: "#056ecf",
    height: 128,
    width: 128,
  }
});
