import { Button, StyleSheet, Text, View , SafeAreaView} from 'react-native'
import React from 'react'

const RegisterEmail = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>RegisterEmail</Text>
      <Button
        title="Go to Password Screen"
        onPress={() => navigation.navigate("Password")}
      />
    </SafeAreaView>
  )
}

export default RegisterEmail

const styles = StyleSheet.create({})