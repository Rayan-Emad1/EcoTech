import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Pressable,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { COLORS, SIZES, images, icons } from "../../constants";
import { SubmitButton, CustomInput } from "../../components";
import Checkbox from "expo-checkbox";

import { login } from "../../constants/request";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux-components/Redux-actions/user";

const Login = ({ navigation }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return; // Exit the function if email or password are missing
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email format");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await login(email, password);
      if (response.message === "Login verified. You can now log in.") {
        setErrorMessage("");
        AsyncStorage.setItem("token", response.token);
        dispatch(setUser(response.user));
        navigation.navigate("Main");
      }
    } catch (error) {
      setErrorMessage(error.response ? error.response.data : error.message);
      if (error == "Too many requests, please try again later.") {
        setErrorMessage("Too many requests, please try again later.");
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={images.leaves} style={styles.background_image}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Hi! Welcome</Text>
        </ImageBackground>
        <View style={styles.input_container}>
          <CustomInput
            title="Email Address"
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />
          <CustomInput
            title="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={!showPassword}
            keyboardType="url"
          />
          <View style={styles.showPasswordContainer}>
            <Checkbox
              style={styles.checkbox}
              value={showPassword}
              onValueChange={() => setShowPassword(!showPassword)}
            />
            <Text>Show Password</Text>
          </View>

          <Text style={styles.errorMessage}>{errorMessage}</Text>

          <SubmitButton text="Login" onPress={handleLogin} set_color="green" />
          <Text style={styles.forgot_password}>Forgotten your password?</Text>
        </View>
        <View style={styles.bottom_container}>
          <View style={styles.or_separator}>
            <View style={styles.line} />
            <Text style={styles.or_text}>OR SIGN IN WITH</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.social_buttons}>
            <Pressable style={styles.social_icon}>
              <Image source={icons.facebook} />
            </Pressable>
            <Pressable style={styles.social_icon}>
              <Image source={icons.google} />
            </Pressable>
            <Pressable style={styles.social_icon}>
              <Image source={icons.apple} />
            </Pressable>
          </View>
          <View style={styles.create_account}>
            <Text style={styles.create_account}>Don't have an account?</Text>
            <Text
              style={styles.create_account_link}
              onPress={() => navigation.navigate("Credentials")}
            >
         
              Create an Account
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  background_image: {
    width: 375,
    height: 200,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  input_container: {
    flex: 1.5,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  bottom_container: {
    flex: 0.8,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  showPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "75%",
    marginBottom: 5,
  },
  checkbox: {
    marginRight: 8,
    borderRadius: 8,
    borderBlockColor: COLORS.black,
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.black_icons,
    marginBottom: SIZES.xxLarge,
  },

  forgot_password: {
    marginVertical: 20,
    fontWeight: "bold",
  },
  or_separator: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.medium,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.green,
  },
  or_text: {
    marginHorizontal: SIZES.medium,
    color: COLORS.black_icons,
  },
  social_buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: SIZES.medium,
    gap: 40,
  },
  create_account: {
    marginTop: SIZES.medium,
    color: COLORS.black_icons,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  create_account_link: {
    color: COLORS.green,
    fontWeight: "bold",
  },
  social_icon: {
    backgroundColor: "white",
    width: 70,
    height: 70,
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Login;
