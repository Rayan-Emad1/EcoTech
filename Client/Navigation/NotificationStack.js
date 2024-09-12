import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "../Pages/Main/Notifications";
import Statistics from "../Pages/Main/Statistics";

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Notifications"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

export default NotificationStack;

const styles = StyleSheet.create({});
