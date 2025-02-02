import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import {
  CustomInput,
  SubmitButton,
  CustomTitle,
  BackButton,
} from "../../components";

const RegisterCredentials = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(null);
  const [showPicker, setShowPicker] = useState(false); // Controls visibility of the picker
  const [errorMessage, setErrorMessage] = useState("");

  // Format the date as "dd/mm/yyyy"
  const formatDate = (date) => {
    if (!date) return ""; // Return empty string if no date is selected
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };


  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  // Handle the "Next" button press
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
          {/* First Name Input */}
          <CustomInput
            title="First Name"
            placeholder="Enter your first name"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />

          {/* Last Name Input */}
          <CustomInput
            title="Last Name"
            placeholder="Enter your last name"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <CustomInput
            title="Date of Birth"
            placeholder="dd/mm/yyyy"
            value={formatDate(date)} // Display formatted date or placeholder
            editable={false}
            onPress={toggleDatePicker}
          />

          {showPicker && (
            <DateTimePicker
              value={date || new Date(2002, 5, 18)} // Default to today's date if no date is selected
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={(_, date) => {setDate(date)} }
              minimumDate={new Date(1950, 0, 1)} 
              maximumDate={new Date()}
            />
          )}

          {/* Error Message */}
          <Text style={styles.errorMessage}>{errorMessage}</Text>

          {/* Submit Button */}
          <SubmitButton
            text="Next"
            onPress={handleNext}
            set_color="green"
            disabled={!errorMessage}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

// Styles
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
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
});

export default RegisterCredentials;