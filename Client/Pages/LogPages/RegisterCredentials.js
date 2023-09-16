import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import { icons } from "../../constants/index";

const RegisterCredentials = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>
          Fill your information below or register {" \n"} with your social
          account
        </Text>
      </View>
      <View style={styles.input_container}>
      <CustomInput
          title="First Name"
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <CustomInput
          title="Last Name"
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
          type="text"
        />



      </View>
      <View style={styles.bottom_container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title_container: {
    width: 375,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input_container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  bottom_container: {
    flex: 0.75,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    marginTop: 100,
  },
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    color: COLORS.black,
  },
  subtitle: {
    fontSize: SIZES.medium,
    color: COLORS.black_icons,
    marginBottom: SIZES.xxLarge,
    width: 300,
    marginTop: 10,
    textAlign: "center",
  },
});

export default RegisterCredentials;
