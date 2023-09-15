import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const RegisterPassword = ({navigation}) => {
  return (
    <View>
      <Text>RegisterPassword</Text>
      <Button
        title="Go to Verify Screen"
        onPress={() => navigation.navigate("Verify")}
      />
    </View>
  );
};

export default RegisterPassword;

const styles = StyleSheet.create({});
