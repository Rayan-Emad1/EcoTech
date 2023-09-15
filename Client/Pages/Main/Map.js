import { StyleSheet, Text, View ,SafeAreaView } from 'react-native'
import React from 'react'

const Map = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
      <Text style={{fontSize:20}}>Map</Text>
    </SafeAreaView>
  )
}

export default Map

const styles = StyleSheet.create({

  container: {
    width: '100%',
    height: '100%',
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
})