import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Pages/Main/Profile";
import Settings from "../Pages/Main/Settings";
import Admin from "../Pages/Main/Admin";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Admin" component={Admin} />
    </Stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});
