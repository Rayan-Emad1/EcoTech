import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { COLORS, SIZES } from "../../constants/index";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterVerify = ({ navigation }) => {
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    // Implement your verification logic here
    if (otp === "1234") {
      // Replace "123456" with the actual OTP
      Alert.alert("Success", "OTP Verified");
    } else {
      Alert.alert("Error", "Invalid OTP");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <CustomTitle
        title="Verify OTP"
        subtitle="Please enter the code we sent you to email"
      />
      <OTPInputView
        style={styles.otpInput}
        pinCount={4}
        code={otp}
        codeInputFieldStyle={{
          color:COLORS.green,
          width:70,
          height:70,
          borderRadius:20,
          fontSize:50 
        }}
        onCodeChanged={(code) => setOtp(code)}
        autoFocusOnLoad
      />
      <View style={styles.OTP_message}>
        <Text style={{color: COLORS.black_icons,}}>Did not Receive OTP ?</Text>
        <Text style={styles.OTP_link} onPress={() => <Alert title="hello" />}>
          Resend Code
        </Text>
      </View>
      <Text style={styles.progressText}>3 of 3</Text>
      <View style={styles.progressContainer}>
        <View style={styles.complete} />
      </View>
      <SubmitButton text="Verify" onPress={handleVerify} set_color="green" />
    </SafeAreaView>
  );
};

export default RegisterVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "1%",
  },
  otpInput: {
    width: "75%",
    height: 50,
    marginVertical: 10,
  },
  OTP_message: {
    margin: 40,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  OTP_link: {
    color: COLORS.green,
    fontWeight: "bold",
  },
  progressContainer: {
    flexDirection: "row",
    width: "75%",
    backgroundColor: "grey",
    borderRadius: 55,
  },
  complete: {
    flex: 1,
    height: 8,
    backgroundColor: COLORS.green,
    borderRadius: 55,
    maxWidth: "100%",
  },
  progressText: {
    position: "relative",
    left: "30%",
    marginBottom:10,
    marginLeft: SIZES.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
});
