import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Settings</Text>

      <Button
        title="Go to Profile Screen"
        onPress={() => navigation.navigate("Profile")}
      />


    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({});
