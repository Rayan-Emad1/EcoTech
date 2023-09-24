import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { COLORS, SIZES, images, icons } from "../../constants/index";

const ForestCard = ({ forest }) => {
  const { title, address, current_temperature, current_humidity, fire_alarm } =
    forest;
  return (
    <View style={styles.forest_container}>
      <View style={styles.left_side}>
        <Image source={fire_alarm ? images.danger_card : images.safe_card} />
      </View>
      <View style={styles.right_side}>
        <Text style={styles.forest_title}>{title}</Text>
        <View style={[styles.forest_details_location, styles.forest_details]}>
          <View style={styles.forest_icons}>
            <Image source={icons.location} />
            <Text>{address}</Text>
          </View>
        </View>
        <View style={styles.forest_details}>
          {/* <Text>Wind</Text>
        <View style={styles.forest_icons}>
          <Text>3 km/h</Text>
          <Image source={icons.wind} />
        </View> */}
        </View>
        <View style={styles.forest_details}>
          <Text>Temperature</Text>
          <View style={styles.forest_icons}>
            <Text>{current_temperature}°C</Text>
            <Image source={icons.temperature} />
          </View>
        </View>
        <View style={styles.forest_details}>
          <Text>Humidity</Text>
          <View style={styles.forest_icons}>
            <Text>{current_humidity}%</Text>
            <Image source={icons.humidity} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForestCard;

const styles = StyleSheet.create({
  forest_container: {
    width: 310,
    height: 155,
    borderRadius: 30,
    backgroundColor: COLORS.whiteTrans,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  left_side: {
    flex: 0.4,
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  right_side: {
    flex: 0.6,
    height: "auto",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 5,
  },
  forest_title: {
    fontSize: SIZES.large,
    fontWeight: "700",
    marginTop: -10,
    marginBottom: 8,
  },
  forest_details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 20,
  },
  forest_icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    gap: 5,
  },
  forest_details_location: {
    marginTop: -5,
    marginBottom: 2,
  },
});
