import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Main/Profile";
import Settings from "./Main/Settings";

const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false ,  gestureEnabled: false }} />

    </Stack.Navigator>
  );
};

export default SettingsStack;

const styles = StyleSheet.create({});
