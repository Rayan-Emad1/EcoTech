import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import MapView from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} ></MapView>
    </View>
  )
}

export default Map

const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  map:{
    width:"100%",
    height:"100%",
  }
})