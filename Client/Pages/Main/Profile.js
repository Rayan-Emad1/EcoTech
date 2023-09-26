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
import { SIZES, COLORS, images } from "../../constants";
import { SubmitButton, CustomInput } from "../../components";

import { updateProfile } from "../../constants/request";

import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../Redux-components/Redux-actions/user";

const Profile = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    address: "",
  });

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const updatedData = {
      first_name: form.firstName || user?.first_name,
      last_name: form.lastName || user?.last_name,
      birthday: form.birthday || user?.birthday,
      address: form.address || user?.address,
    };

    if (
      updatedData.first_name === user?.first_name &&
      updatedData.last_name === user?.last_name &&
      updatedData.birthday === user?.birthday &&
      updatedData.address === user?.address
    ) {
      setErrorMessage("No changes to update");
      return;
    }

    try {
      const response = await updateProfile(updatedData);

      if (response.message === "Updated User Successful") {
        setErrorMessage("Updated User Successful");
        dispatch(updateUser(updatedData));
      } else {
        setErrorMessage("Updated User Failed");
      }
    } catch (error) {
      setErrorMessage(error);
    }
  };
  const handleDate = (text) => {
    const numericText = text.replace(/[^0-9]/g, "");
    const formattedDate = numericText
      .slice(0, 10)
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

    const [day, month, year] = formattedDate.split("/");
    if (
      day > 31 ||
      day < 1 ||
      month > 12 ||
      month < 1 ||
      year > 2024 ||
      year < 1900
    ) {
    } else {
      handleChange("birthday", formattedDate);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} place={route.name} />

      <View style={styles.header_setting}>
        <Image source={images.profile} style={{ margin: 10 }} />
        <Text style={styles.header_name}>
          {user?.first_name} {user?.last_name}
        </Text>
        <Text style={styles.header_email}>{user?.email}</Text>
      </View>
      <ScrollView
        style={{
          width: "100%",
          flex: 0.75,
          paddingVertical: 10,
          maxHeight: 450,
        }}
      >
        <View style={styles.input_container}>
          <CustomInput
            title="First Name"
            placeholder={user?.first_name}
            value={form.firstName}
            onChangeText={(text) => handleChange("firstName", text)}
            keyboardType="email-address"
          />
          <CustomInput
            title="Last Name"
            placeholder={user?.last_name}
            value={form.lastName}
            onChangeText={(text) => handleChange("lastName", text)}
            keyboardType="email-address"
          />
          <CustomInput
            title="Date of Birth"
            placeholder={user?.birthday}
            value={form.birthday}
            onChangeText={(text) => handleDate(text)}
            keyboardType="numeric"
          />
          <CustomInput
            title="Address"
            placeholder={user?.address ? user?.address : "Street-City-Country"}
            value={form.address}
            onChangeText={(text) => handleChange("address", text)}
          />
        </View>
        <View style={{ height: 250, width: 1 }}></View>
      </ScrollView>

      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <SubmitButton
        text="Update Profile"
        onPress={() => handleSubmit()}
        set_color="green"
      />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 10,
    color: "red",
    fontSize: SIZES.small,
    fontWeight: "900",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  header_setting: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 20,
  },
  header_name: {
    fontSize: SIZES.xLarge,
    fontWeight: "600",
  },
  header_email: {
    fontSize: SIZES.small,
    color: COLORS.black_icons,
    fontWeight: "600",
  },
  input_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
