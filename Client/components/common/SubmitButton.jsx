import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "./theme";

const SubmitButton = ({ text, onPress, disabled , set_color }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: set_color == "green" ? COLORS.green : COLORS.red },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;