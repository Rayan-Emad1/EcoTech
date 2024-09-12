import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/index";

const SubmitButton = ({ text, onPress, disabled, set_color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: set_color == "green" ? COLORS.green : COLORS.red },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.button_text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    opacity: 0.9,
  },
  button_text: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SubmitButton;
