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


 

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default RegisterEmail;
