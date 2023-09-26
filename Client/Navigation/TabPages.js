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
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Image
              source={icons.forest}
              style={{ tintColor: color, width: size, height: size }}
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
              style={{ tintColor: color, width: size, height: size }}
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
              style={{ tintColor: color, width: size, height: size }}
            />
          ),
          // Set the default screen to "Settings" when navigating to "SettingsStack"
          tabBarBadge: null,
          tabBarBadgeStyle: { display: "none" },
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.black,
          tabBarActiveBackgroundColor: COLORS.black,
          tabBarInactiveBackgroundColor: COLORS.black,
          tabBarStyle: { borderTopWidth: 0 },
          tabBarLabelStyle: { display: "none" },
          tabBarPressColor: "transparent",
          tabBarOnPress: ({ navigation }) => {
            navigation.navigate("Settings");
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default TabPages;
