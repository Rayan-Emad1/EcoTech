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

  </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
})