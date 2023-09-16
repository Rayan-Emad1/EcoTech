import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Button,
} from "react-native";
import Checkbox from "expo-checkbox";
import { COLORS, SIZES, images } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Main");
    }
  };

  return (
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
          secureTextEntry={!showPassword} // Toggle password visibility based on showPassword state
          keyboardType="url"
        />
        {/* Toggle password visibility */}
        <View style={styles.showPasswordContainer}>
          <Checkbox
            style={styles.checkbox}
            value={showPassword}
            onValueChange={() => setShowPassword(!showPassword)}
          />
          <Text>Show Password</Text>
        </View>
        <SubmitButton
          text="Login"
          onPress={handleLogin}
          disabled={!email || !password}
          set_color="green"
        />
        <Text style={styles.forgot_password}>Forgotten your password?</Text>
      </View>
      <View style={styles.bottom_container}>
        <View style={styles.or_separator}>
          <View style={styles.line} />
          <Text style={styles.or_text}>OR SIGN IN WITH</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.social_buttons}>
          <Button title="FaceBook" />
          <Button title="Google" />
          <Button title="Apple" />
        </View>
        <View style={styles.create_account}>
          <Text style={styles.create_account}>Don't have an account?</Text>
          <Text
            style={styles.create_account_link}
            onPress={() => navigation.navigate("Credentials")}
          >
            {" "}
            Create an Account
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  showPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width:"70%",
    marginBottom: 0,
  },
  checkbox: {
    marginRight: 8,
    borderRadius:8,
    borderBlockColor:COLORS.black,
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
    marginVertical: 35,
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
});

export default Login;
