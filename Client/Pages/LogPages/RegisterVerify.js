import { Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterVerify = ({ navigation }) => {
  return (
    <SafeAreaView>
      <BackButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default RegisterVerify;

const styles = StyleSheet.create({});
