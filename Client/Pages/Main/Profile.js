import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../../components/common/BackButton";
import { SIZES, COLORS, images, icons } from "../../constants";
import SubmitButton from "../../components/common/SubmitButton";
import CustomInput from "../../components/common/CustomInput";

const Profile = ({ navigation }) => {
  const email = "daniel@gmail.com";
  const [oldFirstName, setOldFName] = useState("Daniel");
  const [oldLastName, setOldLName] = useState("Yeyha");
  const date = "18/06/2002";
  const address = "Enter Address";

  const [newemail, setEmail] = useState("");
  const [newfirstName, setFirstName] = useState("");
  const [newlastName, setLastName] = useState("");
  const [newdate, setDate] = useState("");
  const [newaddress, setAddress] = useState("");

  const handleDate = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    const formattedDate = numericText
      .slice(0, 8)
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
    setDate(formattedDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />

      <View style={styles.header_setting}>
        <Image source={images.profile} />
        <Text style={styles.header_name}>
          {oldFirstName} {oldLastName}
        </Text>
        <Text style={styles.header_email}>{email}</Text>
      </View>
      <ScrollView style={{ width: "100%", flex: 0.75, paddingVertical: 50 }}>
        <View style={styles.input_container}>
          <CustomInput
            title="First Name"
            placeholder={oldFirstName}
            value={newfirstName}
            onChangeText={(text) => {
              setFirstName(text), setOldFName(text);
            }}
            keyboardType="email-address"
          />
          <CustomInput
            title="Last Name"
            placeholder={oldLastName}
            value={newlastName}
            onChangeText={(text) => {
              setLastName(text), setOldLName(text);
            }}
            keyboardType="email-address"
          />
          <CustomInput
            title="Date"
            placeholder={date}
            keyboardType="numeric"
            value={newdate}
            onChangeText={(text) => {
              handleDate(text);
            }}
          />
          <CustomInput
            title="Address"
            placeholder={address}
            value={newaddress}
            onChangeText={(text) => setAddress(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={{ height: 250, width: 1 }}></View>
      </ScrollView>

      <SubmitButton
        style={{ flex: 0.25 }}
        text="Update Profile"
        onPress={() => console.log("updated")}
        set_color="green"
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
  header_setting: {
    gap: 0,
    flex: 0.4,
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
  input_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
