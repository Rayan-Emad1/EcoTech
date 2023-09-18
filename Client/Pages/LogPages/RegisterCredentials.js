import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { COLORS, SIZES, icons } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterCredentials = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const handleDate = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    const formattedDate = numericText
      .slice(0, 8)
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    setDate(formattedDate);
  };

  return (
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
          title="Date"
          placeholder="dd/mm/yyyy"
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
          <Pressable style={styles.social_icon}>
            <Image source={icons.facebook} />
          </Pressable>
          <Pressable style={styles.social_icon}>
            <Image source={icons.google} />
          </Pressable>
          <Pressable style={styles.social_icon}>
            <Image source={icons.apple} />
          </Pressable>
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
});

export default RegisterCredentials;
