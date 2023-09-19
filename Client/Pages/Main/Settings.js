import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SubmitButton from "../../components/common/SubmitButton";
import { SIZES, COLORS, images, icons } from "../../constants";

const Settings = ({ navigation }) => {
  const [Name, setName] = useState("Daniel Yehya");
  const [email, setEmail] = useState("daniel@gmail.com");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_setting}>
        <Image source={images.profile} />
        <Text style={styles.header_name}>{Name}</Text>
        <Text style={styles.header_email}>{email}</Text>
      </View>

      <View style={styles.settings_input_container}>
        <View style={styles.settings_input}>
          <View style={styles.icon}>
            <Image source={icons.profile} />
          </View>

       
        </View>

      </View>

    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },







});
