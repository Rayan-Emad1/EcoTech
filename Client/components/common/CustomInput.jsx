import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/index";

const CustomInput = ({
  placeholder,
  title,
  value,
  onChangeText,
  onPress = () => {},
  editable  = true,
  secureTextEntry,
  keyboardType = "default",
  customWidth = "80%",
}) => {
  return (
    <View style={[styles.input_container, { width: customWidth }]}>
      <Text style={styles.input_title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onPress = {onPress}
        editable= {editable}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={title === "Date of Birth" ? 9 : 70}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input_container: {
    marginBottom: SIZES.large,
  },
  input_title: {
    position: "relative",
    top: 12,
    left: 25,
    backgroundColor: "#f2f2f2",
    alignSelf: "flex-start",
    fontSize: SIZES.small,
    color: COLORS.black,
    fontWeight: "bold",
    marginBottom: 5,
    zIndex: 1,
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
