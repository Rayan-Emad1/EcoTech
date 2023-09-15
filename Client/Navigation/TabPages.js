import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Map from "../Pages/Main/Map";
import NotificationStack from "./NotificationStack";
import SettingsStack from "./SettingStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabPages = () => {
  return (
    <Tab.Navigator initialRouteName="Map">
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Notification" component={NotificationStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default TabPages;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
});
