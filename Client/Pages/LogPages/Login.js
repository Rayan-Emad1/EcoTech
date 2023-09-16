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

import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/leaves.png")}
        style={styles.background_image}
      >
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Hi! Welcome</Text>
      </ImageBackground>
      <View style={styles.input_container}>
        <CustomInput
          title="Email Address"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <CustomInput
          title="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
          
        <SubmitButton
          text="Login"
          onPress={handleLogin}
          disabled={!email || !password}
          set_color = "green"
        />
      </View>

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
  title: {
    fontSize: SIZES.xxLarge,
    fontWeight: "bold",
    color: COLORS.black_icons,
  },
  subtitle: {
    fontSize: SIZES.medium,
    color: COLORS.black_icons,
    marginBottom: SIZES.xxLarge,
  },
});

export default Login;
