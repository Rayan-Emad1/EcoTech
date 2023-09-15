import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./LogPages/Login";
import RegisterCredentials from "./LogPages/RegisterCredentials";
import RegisterEmail from "./LogPages/RegisterEmail";
import RegisterPassword from "./LogPages/RegisterPassword";
import RegisterVerify from "./LogPages/RegisterVerify";
import TabPages from "./Tab";

const Stack = createStackNavigator();

const StackPages = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
  );
};

export default StackPages;

const styles = StyleSheet.create({});
