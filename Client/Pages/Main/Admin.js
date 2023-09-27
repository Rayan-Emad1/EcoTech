import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { BackButton } from "../../components";


const Admin = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
       <BackButton navigation={navigation} />
      <Text>Admin</Text>
    </SafeAreaView>
  )
}

export default Admin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
      },
})