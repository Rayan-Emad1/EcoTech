import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

import { COLORS, SIZES, images, icons } from "../../constants/index";

const WeatherWidget = () => {
  return (
    <ImageBackground source={images.green_background} style={styles.background_image}>
      <View  style={styles.widget_container}>
        <View style={styles.left_side}>




          </View>
        <View style={styles.right_side}>


        </View>
      </View>
    </ImageBackground>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({




});
