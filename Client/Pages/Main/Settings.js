import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SubmitButton from "../../components/common/SubmitButton";
import { SIZES, COLORS, images, icons } from "../../constants";
import { useSelector } from "react-redux";

const Settings = ({ navigation }) => {
  const user = useSelector((state) => state.user.user);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header_setting}>
        <Image source={images.profile} />
        <Text style={styles.header_name}>
          {user?.first_name} {user?.last_name}
        </Text>
        <Text style={styles.header_email}>{user?.email}</Text>
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

        {user?.role === "admin" && (
          <View style={styles.settings_input}>
            <View style={styles.icon}>
              <Image source={icons.admin} />
            </View>
            <View style={styles.setting_text}>
              <Text style={{ fontSize: SIZES.medium }}>Admin Panel </Text>
              <Text style={{ fontSize: SIZES.xSmall }}>Create new forest</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Admin")}>
              <Image
                style={styles.forward_button}
                source={icons.chevronRight}
                resizeMode="stretch"
              />
            </TouchableOpacity>
          </View>
        )}

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
  header_email: {
    fontSize: SIZES.small,
    color: COLORS.black_icons,
    fontWeight: "600",
    marginVertical: -10,
  },
  settings_input_container: {
    flex: 0.5,
    justifyContent: "flex-start",
  },
  settings_input: {
    width: 400,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  setting_text: {
    justifyContent: "flex-start",
    left: -40,
    position: "relative",
  },
  forward_button: {
    width: 30,
    height: 30,
    alignSelf: "flex-end",
  },
});
