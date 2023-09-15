import { StyleSheet, Text, View, Button , SafeAreaView } from 'react-native'
import React from 'react'

const Notifications = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Notifications</Text>

      <Button
        title="Go to Statistics Screen"
        onPress={() => navigation.navigate("Statistics")}
      />
    </SafeAreaView>
  )
}

export default Notifications

const styles = StyleSheet.create({})