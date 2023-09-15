import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RegisterVerify = ({navigation}) => {
  return (
    <View>
      <Text>RegisterVerify</Text>
      <Button
        title="Go to Main Page Screen"
        onPress={() => navigation.navigate("Main")}
      />
    </View>
  )
}

export default RegisterVerify

const styles = StyleSheet.create({})