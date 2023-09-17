import React from "react";
import Map from "../Pages/Main/Map";
import NotificationStack from "./NotificationStack";
import SettingsStack from "./SettingStack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabPages = () => {
  return (
    <Tab.Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="NotificationStack" component={NotificationStack} />
      <Tab.Screen name="SettingsStack" component={SettingsStack} />
    </Tab.Navigator>
  );
};

export default TabPages;
