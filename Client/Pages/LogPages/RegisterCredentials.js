import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterCredentials = ({navigation}) => {
  return (
    <View>
      <Text>RegisterCredentials</Text>
      <Button
        title="Go to Email Screen"
        onPress={() => navigation.navigate("Email")}
      />
    </View>
    
  )
}

export default RegisterCredentials

const styles = StyleSheet.create({})