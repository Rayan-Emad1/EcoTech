import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { icons } from "../../constants/index";

const BackButton = ({ navigation , place }) => {

const handleNavigate = () => {
  if(place == "Profile") {
    navigation.navigate('SettingsStack', { screen: 'Settings' });
  }else{
    navigation.goBack()
  }
}

  return (
    <TouchableOpacity
      style={styles.back_button_container}
      onPress={() => handleNavigate()}
    >
      <Image
        style={styles.back_button}
        source={icons.chevronLeft}
        resizeMode="stretch"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  back_button: {
    width: 30,
    height: 30,
  },
  back_button_container: {
    position: "absolute",
    top: "8%",
    left: "5%",
  },
});
