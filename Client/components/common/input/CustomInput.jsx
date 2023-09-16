import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/index";

const CustomInput = ({ placeholder, title, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    marginBottom: SIZES.large,
  },

});


export default CustomInput;