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









      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({







});

export default RegisterPassword;
