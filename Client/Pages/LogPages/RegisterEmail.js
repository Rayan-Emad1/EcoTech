import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Button } from "react-native";
import { COLORS, SIZES } from "../../constants/index";
import CustomInput from "../../components/common/CustomInput";
import SubmitButton from "../../components/common/SubmitButton";
import BackButton from "../../components/common/BackButton";

const RegisterEmail = ({ navigation,route}) => {



  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.title_container}>

      </View>

      <View style={styles.input_container}>
        <CustomInput
          title="Email"
          placeholder="Enter your Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.progressText}>1 of 3</Text>
        <View style={styles.progressContainer}>
          <View style={styles.complete} />
          <View style={styles.incomplete} />
        </View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default RegisterEmail;
