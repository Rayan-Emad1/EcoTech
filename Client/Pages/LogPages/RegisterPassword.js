import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";
import Checkbox from "expo-checkbox";

const RegisterPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { email, firstName, lastName, date } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <CustomTitle
        title="Create a Password"
        subtitle="Enter your desired password in the field below, and confirm it by re-entering it in the 'Confirm Password' field"
      />

      <View style={styles.input_container}>
        <CustomInput
          title="Password"
          placeholder="Enter your Password"
          value={password}
          keyboardType="email-address"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
        <CustomInput
          title="Confirm Password"
          placeholder="Confirm your Password"
          value={confirmPassword}
          keyboardType="email-address"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={!showPassword}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={showPassword}
            onValueChange={() => setShowPassword(!showPassword)}
          />
          <Text>Show Password</Text>
        </View>

        <Text style={styles.progressText}>2 of 3</Text>
        <View style={styles.progressContainer}>
          <View style={styles.complete} />
        </View>

        <SubmitButton
          text="Sign Up"
          onPress={() => {
            if (firstName && lastName && date) {
              navigation.navigate("Verify", {
                email,
                password,
                firstName,
                lastName,
                date,
              });
            }
          }}
          disabled={confirmPassword !== password}
          set_color="green"
        />
        <Text style={styles.terms}>
          By signing up, you agree to our
          <Text style={{ fontWeight: "bold" }}> Terms of Service</Text> and
          <Text style={{ fontWeight: "bold" }}> Privacy Policy </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input_container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progressContainer: {
    flexDirection: "row",
    width: "75%",
    backgroundColor: "grey",
    borderRadius: 55,
  },
  complete: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.green,
    borderRadius: 55,
    maxWidth: "66.66%",
  },
  progressText: {
    position: "relative",
    left: "30%",
    marginBottom: 10,
    marginLeft: SIZES.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
  bold_text: {
    fontWeight: "bold",
  },
  terms: {
    marginTop: 20,
    width: "80%",
    textAlign: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    marginBottom: 0,
  },
  checkbox: {
    marginRight: 8,
  },
});

export default RegisterPassword;
