import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import {
  CustomInput,
  SubmitButton,
  CustomTitle,
  BackButton,
} from "../../components";
import Checkbox from "expo-checkbox";

import { registerUser } from "../../constants/request";

const RegisterPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { email, firstName, lastName, date } = route.params;

  const handleRegister = async () => {
    try {
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters long");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }
      console.log(email, firstName, lastName, date, password);

      const response = await registerUser({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        birthday: date,
      });

      if (
        response.message ===
          "User registered. Check your email for verification." ||
        response.message === "Send verification Code"
      ) {
        setErrorMessage("Send verification Code");
        navigation.navigate("Verify", {email});
      }
    } catch (error) {
      setErrorMessage(
        error.response.data.message ? error.response.data.message : error.data
      );
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <SubmitButton
            text="Sign Up"
            onPress={handleRegister}
            set_color="green"
          />
          <Text style={styles.terms}>
            By signing up, you agree to our
            <Text style={{ fontWeight: "bold" }}> Terms of Service</Text> and
            <Text style={{ fontWeight: "bold" }}> Privacy Policy </Text>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
    borderRadius: 8,
    borderBlockColor: COLORS.black,
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
});

export default RegisterPassword;
