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
      <ImageBackground>
      </ImageBackground>
      <View style={styles.input_container}>
      </View>

      <View style={styles.bottom_container}>
      </View>
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

});

export default Login;
