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
      <Text style={styles.progressText}>3 of 3</Text>
      <View style={styles.progressContainer}>
        <View style={styles.complete} />
      </View>
      <SubmitButton
          text="Verify"
          onPress={() => null}
          set_color="green"
        />
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
    gap: "1%"
  },
  OTP_message: {
    marginTop: SIZES.medium,
    color: COLORS.black_icons,
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
    maxWidth: "66.66%",
  },
  progressText: {
    position: "relative",
    left: "30%",
    marginLeft: SIZES.medium,
    fontSize: SIZES.small,
    color: COLORS.black,
  },
});
