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
          <Text style={styles.headerText}>{this.props.month}</Text>
          <Text style={styles.headerText}>{this.props.time}</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
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
    height: 200,
    width: 300,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
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
  },
  headerBar: {
    height: 30,
    width: 300,
    backgroundColor: '#67769a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  headerText: {
    color: '#fff'
  },
  title: {
    color: '#687799',
    fontWeight: 'bold',
    fontSize: 16
  },
  titleContainer: {
    marginTop: 20,
    paddingLeft: 10,
    marginBottom: 10
  },
  descContainer: {
    paddingLeft: 10,
    paddingRight: 10
  },
  desc: {
    color: '#9b9b9b'
  },
  organizedContainer: {
    marginTop: 20,
    paddingLeft: 10
  },
  organized: {
    fontSize: 8,
    color: '#7c7c7c'
  }
});
