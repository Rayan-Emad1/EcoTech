import { Button, StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'

const RegisterVerify = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>RegisterVerify</Text>
      <Button
        title="Go to Main Page Screen"
        onPress={() => navigation.replace("Main")}
      />
    </SafeAreaView>
  )
}

export default RegisterVerify

const styles = StyleSheet.create({})