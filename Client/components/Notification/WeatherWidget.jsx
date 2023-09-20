import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";

import { COLORS, SIZES, images, icons } from "../../constants/index";

const WeatherWidget = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Statistics")}>
      <ImageBackground
        source={images.green_background}
        style={styles.background_image}
      >
        <View style={styles.widget_container}>
          <View style={styles.left_side}>
            <Text style={styles.widget_temperature}>32°C</Text>
            <Text style={styles.widget_average}>H:32°C L:28°C</Text>
            <Text style={styles.widget_location}>
              Shouf National Ceders, Lebanon
            </Text>
          </View>
          <View style={styles.right_side}>
            <Image style={styles.widget_weather_image} source={images.rainy} />
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  background_image: {
    width: 350,
    height: 180,
    resizeMode: "stretch",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  widget_container: {
    width: 320,
    height: 170,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  right_side: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  left_side: {
    flex: 1,
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 15,
  },
  widget_temperature: {
    fontWeight: "900",
    fontSize: 40,
    color: COLORS.white,
  },
  widget_average: {
    fontSize: SIZES.xSmall,
    color: "#EBEBF595",
    fontWeight: "bold",
    marginBottom: -7,
  },
  widget_location: {
    fontSize: SIZES.medium,
    color: "#EBEBF5",
    fontWeight: "600",
  },
  widget_weather_image: {
    position: "relative",
    bottom: 10,
    right: 25,
  },
});
