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
      initialRouteName="Home"
    >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false ,  gestureEnabled: false }} />
      <Stack.Screen name="Credentials" component={RegisterCredentials} />
      <Stack.Screen name="Email" component={RegisterEmail} />
      <Stack.Screen name="Password" component={RegisterPassword} />
      <Stack.Screen name="Verify" component={RegisterVerify} />
      <Stack.Screen name="Main" component={TabPages} options={{ headerShown: false ,  gestureEnabled: false }} />
    </Stack.Navigator>
  );
};

export default StackPages;

const styles = StyleSheet.create({});
