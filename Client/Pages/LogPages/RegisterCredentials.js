import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import { icons } from "../../constants/index";

const RegisterCredentials = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("dd/mm/yyyy");

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
        <CustomInput
          title="Date"
          placeholder="__/__/____"
          keyboardType="numeric"
          value={date}
          onChangeText={(text) => {
            handleDate(text);
          }}
        />
        <SubmitButton
          text="Next"
          onPress={() => {
            if (firstName && lastName && date) {
              navigation.navigate("Email", { firstName, lastName, date });
            }
          }}
          disabled={!firstName || !lastName || !date}
          set_color="green"
        />
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.or_separator}>
          <View style={styles.line} />
          <Text style={styles.or_text}>OR SIGN IN WITH</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.social_buttons}>
          <Button title="FaceBook" />
          <Button title="Google" />
          <Button title="Apple" />
        </View>
      </View>
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
});

export default RegisterCredentials;
