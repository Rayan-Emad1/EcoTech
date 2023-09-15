import { Button, StyleSheet, Text, View ,SafeAreaView } from "react-native";
import React from "react";

const RegisterPassword = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>RegisterPassword</Text>
      <Button
        title="Go to Verify Screen"
        onPress={() => navigation.navigate("Verify")}
      />
    </SafeAreaView>
  );
};

export default RegisterPassword;

const styles = StyleSheet.create({});
