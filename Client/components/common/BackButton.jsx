import {
    StyleSheet,
    Image,
    TouchableOpacity,
  } from "react-native";
import React from 'react'
import { icons } from "../../constants/index";

const BackButton = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image
      style={styles.back_button}
      source={icons.chevronLeft}
      resizeMode="stretch"
    />
  </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
  back_button: {
    width: 30,
    height: 30,
    top: "100%",
    left:  "-550%",
  },
})