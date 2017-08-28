
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
import style from './style'

var screen = Dimensions.get('window');
export default class Map extends React.Component {
  
  constructor() {
    super()
    this.state = {
      region: {
        latitude: 28.5086939,
        longitude: 77.0918937,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      key: 0
    }
    this.onRegionchange = this.onRegionchange.bind(this)
  }
  onRegionchange(region) {
    this.setState({ region })
  }
  modalPop(key){
  this.setState({key})
    this.refs.modal1.open()
  }
  render() {
    return (
      <View style={styles.container}>
         <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={this.props.data.region}
          onRegionchange={() => this.onRegionchange()}
        >
          {this.props.data.markers.map((marker, i) => (
            <MapView.Marker
              key={i}
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              image={marker.image}
              onPress={() => this.modalPop(i)}
            /> 
          ))} 
          
         </MapView> 
            <Modal style={[styles.modal, styles.modal4]} position={"bottom"} ref={"modal1"} swipeArea={20}>
            <ScrollView>
              <View style={{ width: screen.width, paddingLeft: 10 }}>
                 <Text>Name:{this.props.data.markers[this.state.key].details.name}</Text>
                <Text>Type:{this.props.data.markers[this.state.key].details.type}</Text>
                <Text>Experience:{this.props.data.markers[this.state.key].details.exp}</Text> 
                <Button onPress={() => this.refs.modal1.close()} title="Close" />
              </View >
            </ScrollView>
          </Modal>
      </View>
    );
  }
}



