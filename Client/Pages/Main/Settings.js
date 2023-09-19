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
          <View style={styles.setting_text}>
            <Text style={{ fontSize: SIZES.medium }}>My Account </Text>
            <Text style={{ fontSize: SIZES.xSmall }}>
              Make changes to your account
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.forward_button}
              source={icons.chevronRight}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.settings_input}>
          <View style={styles.icon}>
            <Image source={icons.notification} />
          </View>
          <View style={styles.setting_text}>
            <Text style={{ fontSize: SIZES.medium }}>Notifications </Text>
            <Text style={{ fontSize: SIZES.xSmall }}>
              Allow push notifications
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.forward_button}
              source={icons.chevronRight}
              resizeMode="stretch"
            />
          </TouchableOpacity>
        </View>
      </View>

      <SubmitButton
        style={{ flex: 0.25 }}
        text="Logout"
        onPress={() => navigation.replace("Login")}
        set_color="red"
      />
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
  header_setting: {
    gap: 0,
    flex: 0.25,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  header_name: {
    fontSize: SIZES.xLarge,
    fontWeight: "600",
    marginVertical: -7,
  },





});
