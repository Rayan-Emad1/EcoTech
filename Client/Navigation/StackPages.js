import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../Pages/LogPages/Login";
import RegisterCredentials from "../Pages/LogPages/RegisterCredentials";
import RegisterEmail from "../Pages/LogPages/RegisterEmail";
import RegisterPassword from "../Pages/LogPages/RegisterPassword";
import RegisterVerify from "../Pages/LogPages/RegisterVerify";
import TabPages from "./TabPages";

const Stack = createStackNavigator();

const StackPages = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login}/>
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
