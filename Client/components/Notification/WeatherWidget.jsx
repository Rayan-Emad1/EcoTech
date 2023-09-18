import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

import { COLORS, SIZES, images, icons } from "../../constants/index";

const WeatherWidget = () => {
  return (
    <ImageBackground source={images.green_background} style={styles.background_image}>
      <View  style={styles.widget_container}>
        <View style={styles.left_side}>
          <Text style={styles.widget_temperature}>32°C</Text>
          <Text style={styles.widget_average}>H:32°C L:28°C</Text>
          <Text style={styles.widget_location}>Shouf National Ceders, Lebanon</Text>

          </View>
        <View style={styles.right_side}>
          <Image source={images.sunny} />

        </View>
      </View>
    </ImageBackground>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({




});
