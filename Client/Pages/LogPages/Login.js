import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Credentials Screen"
        onPress={() => navigation.navigate("Credentials")}
      />
  
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})