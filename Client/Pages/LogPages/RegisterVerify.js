import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";
import { COLORS, SIZES, images } from "../../constants/index";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";
import CustomTitle from "../../components/common/CustomTitle";

const RegisterVerify = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <CustomTitle
        title="Verify OTP"
        subtitle="Please enter the code we sent you to email"
      />
      {/* <OTP/> */}
      <View style={styles.OTP_message}>
        <Text style={styles.OTP_message}>Did not Receive OTP ?</Text>
        <Text style={styles.OTP_link} onPress={() => <Alert title="hello" />}>
          Resend Code
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RegisterVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  OTP_message: {
    marginTop: SIZES.medium,
    color: COLORS.black_icons,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

});
