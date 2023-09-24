import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

import WeatherWidget from "../../components/Notification/WeatherWidget";


const Notifications = ({ navigation }) => {

  const forests = useSelector((state) => state.forests);
  const forestsArray = Object.values(forests);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {forestsArray.map((forest, index) => (
          <WeatherWidget key={index} forest={forest} navigation={navigation} />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};


export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
});
