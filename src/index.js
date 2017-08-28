
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Button
} from 'react-native';
import MapView from 'react-native-maps';
import Modal from 'react-native-modalbox';
import Map from '../component/map'

var screen = Dimensions.get('window');
export default class nav extends React.Component {
  constructor() {
    super()
    this.state = {
      region: {
        latitude: 28.5086939,
        longitude: 77.0918937,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers: [
        {
          coordinates: { longitude: 77.0962894, latitude: 28.50499626 },
          image: require('./map-marker.png'),
          title: "Ambience", description: "Mall",
          details:{
            name: "Dr.Anil",
            type: "Physician",
            exp: "5 years"
          }
        },
        {
          coordinates: { longitude: 77.0918937, latitude: 28.5086939 },
          image: require('./map-marker.png'),
          title: "Kellton Tech", description: "Company",
          details:{
            name: "Dr.Swapnil",
            type: "Physician",
            exp: "5 years"
          }
        },
        {
          coordinates: { longitude: 77.08648324, latitude: 28.51131299 },
          image: require('./map-marker.png'),
          title: "Rolta", description: "Tower",
          details:{
            name: "Dr.Mahesh",
            type: "Physician",
            exp: "5 years"
          }
        },
        {
          coordinates: { longitude: 77.08912253, latitude: 28.50031975 },
          image: require('./map-marker.png'),
          title: "Ambience", description: "Mall",
          details:{
            name: "Dr.Shashank",
            type: "Physician",
            exp: "5 years"
          }
        }
      ]
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
       <Map data={this.state}>
        </Map>
      </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});