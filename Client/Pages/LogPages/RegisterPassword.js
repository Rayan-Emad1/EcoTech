import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterPassword = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const { email, firstName, lastName, date } = route.params;
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
          secureTextEntry={false}
        />
        <CustomInput
          title="Confirm Password"
          placeholder="Confirm your Password"
          value={confirmPassword}
          keyboardType="email-address"
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={false}
        />

        <Text style={styles.progressText}>2 of 3</Text>
        <View style={styles.progressContainer}>
          <View style={styles.complete} />
        </View>



      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({







});

export default RegisterPassword;
