import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterCredentials = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>RegisterCredentials</Text>
      <Button
        title="Go to Email Screen"
        onPress={() => navigation.navigate("Email")}
      />
    </SafeAreaView>
    
  )
}

export default RegisterCredentials

const styles = StyleSheet.create({})