import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import { icons } from "../../constants/index";

const RegisterCredentials = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}></View>
      <View style={styles.input_container}></View>
      <View style={styles.bottom_container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default RegisterCredentials;
