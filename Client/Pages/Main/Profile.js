import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import BackButton from "../../components/common/BackButton";
import { SIZES, COLORS, images, icons } from "../../constants";
import SubmitButton from "../../components/common/SubmitButton";
import CustomInput from "../../components/common/CustomInput";

const Profile = ({ navigation }) => {
  const [Name, setName] = useState("Daniel Yehya");
  const [email, setEmail] = useState("daniel@gmail.com");

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.header_setting}>
        <Image source={images.profile} />
        <Text style={styles.header_name}>{Name}</Text>
        <Text style={styles.header_email}>{email}</Text>
      </View>

      <View style={styles.input_container}>
        <CustomInput
          title="First Name"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <CustomInput
          title="Last Name"
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />




    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },




});
