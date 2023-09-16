import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

const CustomInput = ({ placeholder, title, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>

    </View>
  );
};



export default CustomInput;