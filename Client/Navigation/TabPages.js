import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES, images, icons } from "../constants/index";
import { Image } from "react-native";

import Map from "../Pages/Main/Map";
import NotificationStack from "./NotificationStack";
import SettingsStack from "./SettingStack";

const Tab = createBottomTabNavigator();

const TabPages = () => {
  return (
    <Tab.Navigator
      initialRouteName="Map"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          height: 100,
        },
        tabBarActiveTintColor: COLORS.green,
        tabBarInactiveTintColor: "grey",
      }}
      
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={icons.forest}
              style={{ tintColor: color, width: 36, height: 36 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={icons.statistics}
              style={{ tintColor: color, width: 36, height: 36 }}
            />

          ),
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Image
              source={icons.setting}
              style={{ tintColor: color, width: 36, height: 36 }}
            />
          ),
          tabBarOnPress: ({ navigation }) => {
            navigation.navigate("Settings");
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabPages;
