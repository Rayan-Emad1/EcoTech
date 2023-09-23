import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants";
import {
  CustomInput,
  SubmitButton,
  CustomTitle,
  BackButton,
} from "../../components";

const RegisterCredentials = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleDate = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    const formattedDate = numericText
      .slice(0, 10)
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

    const [day, month, year] = formattedDate.split("/");
    if (
      day > 31 ||
      day < 1 ||
      month > 12 ||
      month < 1 ||
      year > 2024 ||
      year < 1900
    ) {
      setErrorMessage("Invalid date");
    } else {
      setErrorMessage("");
    }

    setDate(formattedDate);
  };

  const handleNext = () => {
    if (!firstName || !lastName || !date) {
      setErrorMessage("Credentials are Missing");
    } else {
      setErrorMessage("");
      navigation.navigate("Email", { firstName, lastName, date });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <BackButton navigation={navigation} />

        <CustomTitle
          title="Create Account"
          subtitle="Fill your information below or register with your social account"
        />

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
          <CustomInput
            title="Date of Birth"
            placeholder="dd/mm/yyyy"
            keyboardType="numeric"
            value={date}
            onChangeText={(text) => {
              handleDate(text);
            }}
          />
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <SubmitButton
            text="Next"
            onPress={handleNext}
            set_color="green"
            disabled={!!errorMessage}
          />
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
  bottom_container: {
    flex: 0.75,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
    marginTop: 100,
  },
  or_separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.medium,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.green,
  },
  or_text: {
    marginHorizontal: SIZES.medium,
    color: COLORS.black_icons,
  },
  social_buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
    gap: 40,
  },
  social_icon: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
});

export default RegisterCredentials;
