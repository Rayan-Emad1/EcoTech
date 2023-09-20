import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import WeatherWidget from "../../components/Notification/WeatherWidget";
import ForestCard from "../../components/Map/ForestCard";

const Notifications = ({ navigation }) => {
  return (
    <ScrollView >
    <SafeAreaView style={styles.container}>
      <WeatherWidget navigation={navigation} />
      <WeatherWidget navigation={navigation} />
      <WeatherWidget navigation={navigation} />
      <WeatherWidget navigation={navigation} />
    </SafeAreaView>
    </ScrollView>
    
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
    marginTop:"20%",
  },
});
