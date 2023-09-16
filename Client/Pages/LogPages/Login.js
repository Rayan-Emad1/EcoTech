import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/leaves.png")}
        style={styles.background_image}
      >
        <Text style={styles.title}>Login</Text>

      </ImageBackground>
      <View style={styles.input_container}></View>

      <View style={styles.bottom_container}></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  background_image: {
    backgroundColor: "#cccc",
    width: 375,
    height: 200,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input_container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#ff1",
    padding: 20,
  },
  bottom_container: {
    flex: 1.5,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#cccc",
    paddingVertical: 40,
  },
});

export default Login;
