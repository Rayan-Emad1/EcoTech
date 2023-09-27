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

import { resetPassword } from "../../constants/request";

const ResetPassword = ({ navigation, route }) => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { email } = route.params;

  const handleReset = async () => {
    try {
      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters long");
        return;
      }

      if (password !== confirmPassword) {
        setErrorMessage("Passwords do not match");
        return;
      }

      const response = await resetPassword(email, code, password);

      if (response === "Password reset successful") {
        setErrorMessage("Password Reset Successful");
        setTimeout(() => {
          navigation.navigate("Login");
        }, 3000);
      } else {
        setErrorMessage(response);
      }
    } catch (error) {
      setErrorMessage(error.response ? error.message : error.response.data);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <BackButton navigation={navigation} />
        <CustomTitle
          title="Reset Password"
          subtitle={`A verification code has been sent to ${email}. Please enter the code and reset your password.`}
        />

        <View style={styles.input_container}>
          <CustomInput
            title="Verification Code"
            placeholder="Enter Your Verification Code"
            value={code}
            onChangeText={(text) => setCode(text)}
            secureTextEntry={!showPassword}
          />
          <CustomInput
            title="New Password"
            placeholder="Enter Your New Password"
            value={password}
            keyboardType="password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
          />
          <CustomInput
            title="Confirm New Password"
            placeholder="Confirm Your new Password"
            value={confirmPassword}
            keyboardType="password"
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

          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <SubmitButton text="Reset" onPress={handleReset} set_color="green" />
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
  bold_text: {
    fontWeight: "bold",
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
});

export default ResetPassword;
