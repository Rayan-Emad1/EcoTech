import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import React from "react";
import WeatherWidget from "../../components/Notification/WeatherWidget";

const Notifications = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Notifications</Text>
      <Button
        title="Go to Statistics Screen"
        onPress={() => navigation.navigate("Statistics")}
      /> */}
      <WeatherWidget />
    </SafeAreaView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"black"
  },
});
