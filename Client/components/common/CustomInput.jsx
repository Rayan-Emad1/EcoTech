import React from "react";
import { ScrollView, View, TextInput, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const CustomInput = ({ placeholder, title, value, onChangeText, secureTextEntry, keyboardType ="default" }) => {
  return (
    <View style={styles.input_container}>
      <Text style={styles.input_title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={title==="Date"?99:20}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  input_container: {
    marginBottom: SIZES.large,
    width: "80%",
  },
  input_title: {
    fontSize: SIZES.medium,
    color: COLORS.black_icons,
    marginBottom: 5,
  },
  input: {
    width: "100%",
    backgroundColor: COLORS.white,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "grey",
    padding: SIZES.medium,
  },
});

export default CustomInput;
