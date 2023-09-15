import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Login</Text>
      <Button
        title="Sign "
        onPress={() => navigation.navigate("Main")}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate("Credentials")}
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
