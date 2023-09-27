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

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <BackButton navigation={navigation} />
        <CustomTitle
          title="Reset Password"
          subtitle={`A verification code has been sent to ${email}. Please enter the code and reset your password.`}
        />



    
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
