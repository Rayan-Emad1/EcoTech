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

import { checkEmail } from "../../constants/request";

const RegisterEmail = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const { firstName, lastName, date } = route.params;
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleNext = async () => {
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    try {
      const response = await checkEmail(email);

      if (!response.isUnique) {
        setErrorMessage(
          "Email is already taken. Please use a different email."
        );
      } else {
        setErrorMessage("");
        navigation.navigate("Password", {
          email,
          firstName,
          lastName,
          date,
        });
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error checking email uniqueness");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <BackButton navigation={navigation} />

        <CustomTitle
          title="What is your email?"
          subtitle="Please provide your email address in the field below"
        />

        <View style={styles.input_container}>
          <CustomInput
            title="Email"
            placeholder="Enter your Email"
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />

          <Text style={styles.progressText}>1 of 3</Text>
          <View style={styles.progressContainer}>
            <View style={styles.complete} />
          </View>

          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <SubmitButton text="Next" onPress={handleNext} set_color="green" />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input_container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
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
    maxWidth: "33.33%",
  },
  progressText: {
    position: "relative",
    left: "30%",
    marginBottom: 10,
    marginLeft: SIZES.medium,
    fontSize: SIZES.small,
    color: COLORS.black_icons,
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
});

export default RegisterEmail;
