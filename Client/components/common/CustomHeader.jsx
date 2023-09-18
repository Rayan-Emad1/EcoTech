import {StyleSheet,View,Image,Platform,TextInput,Pressable} from "react-native";
import React, { useState} from "react";
import { COLORS, icons } from "../../constants/index";



const CustomHeader = () => {



  return (
 <View style={styles.top}>
    <Pressable style={styles.Icon_background}>
      <Image source={icons.profile} />
    </Pressable>
    <View>
    

      
    </View>
  </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({




})