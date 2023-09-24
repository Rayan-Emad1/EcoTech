import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import React from "react";

import { COLORS, SIZES, images } from "../../constants/index";

const WeatherWidget = ({ forest, navigation }) => {
  const {id, address, current_temperature, fire_alarm, condition ,forecast } = forest;
  return (
    <Pressable
      onPress={() => navigation.navigate("Statistics" ,{id,address, forecast, current_temperature, fire_alarm})}
      style={{ margin: 20, height: 180 }}
    >
      <ImageBackground
        source={fire_alarm ? images.red_background : images.green_background}
        style={styles.background_image}
      >
        <View style={styles.widget_container}>
          <View style={styles.left_side}>
            <Text style={styles.widget_temperature}>
              {current_temperature}°C
            </Text>
            <Text style={styles.widget_average}>H:32°C L:28°C</Text>
            <Text style={styles.widget_location}>{address}</Text>
          </View>
          <View style={styles.right_side}>
            <Image
              style={styles.widget_weather_image}
              source={
                condition === "sunny"
                  ? images.sunny
                  : condition === "rainy"
                  ? images.rainy
                  : condition === "stormy"
                  ? images.stormy
                  : images.night
              }
            />
          </View>
        </View>
      </ImageBackground>
    </Pressable>
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
