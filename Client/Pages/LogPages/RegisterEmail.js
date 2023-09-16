import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterEmail = ({ navigation, route }) => {
  const [email, setEmail] = useState("");
  const { firstName, lastName, date } = route.params;

  return (
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

        <SubmitButton
          text="Next"
          onPress={() => {
            if (firstName && lastName && date) {
              navigation.navigate("Password", {
                email,
                firstName,
                lastName,
                date,
              });
            }
          }}
          disabled={!email}
          set_color="green"
        />
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
});

export default RegisterEmail;
