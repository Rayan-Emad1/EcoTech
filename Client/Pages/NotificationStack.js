import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Notifications from "./Main/Notifications";
import Statistics from "./Main/Statistics";

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator initialRouteName="Notifications">
      <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false ,  gestureEnabled: false }} />
      <Stack.Screen name="Statistics" component={Statistics} />
    </Stack.Navigator>
  );
};

export default NotificationStack;

const styles = StyleSheet.create({});
