import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterEmail = ({navigation}) => {
  return (
    <View>
      <Text>RegisterEmail</Text>
      <Button
        title="Go to Password Screen"
        onPress={() => navigation.navigate("Password")}
      />
    </View>
  )
}

export default RegisterEmail

const styles = StyleSheet.create({})