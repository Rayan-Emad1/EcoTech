import {
    StyleSheet,
    Text,
    View,
    Image,
  } from "react-native";
  import React from "react";
  
  import { COLORS, SIZES, images, icons } from "../../constants/index";

const ForestCard = () => {
  return (
    <View style={styles.forest_container}>
    <View style={styles.left_side}>
      <Image source={images.danger_card} />
    </View>
    <View style={styles.right_side}>
      <Text style={styles.forest_title}>Forest Title</Text>
      <View style={[styles.forest_details_location,styles.forest_details]}>
        <Text>20 KM</Text>
        <View style={styles.forest_icons}>
          <Text>Location</Text>
          <Image source={icons.location} />
        </View>
      </View>
      <View style={styles.forest_details}>
        <Text>Wind</Text>
        <View style={styles.forest_icons}>
          <Text>3 km/h</Text>
          <Image source={icons.wind} />
        </View>
      </View>
      <View style={styles.forest_details}>
        <Text>Temperature</Text>
        <View style={styles.forest_icons}>
          <Text>32°C</Text>
          <Image source={icons.temperature} />
        </View>
      </View>
      <View style={styles.forest_details}>
        <Text>Humidity</Text>
        <View style={styles.forest_icons}>
          <Text>25%</Text>
          <Image source={icons.humidity} />
        </View>
      </View>
    </View>
  </View>
  )
}

export default ForestCard

const styles = StyleSheet.create({
    forest_container: {
      width: 300,
      height: 155,
      borderRadius: 30,
      backgroundColor: COLORS.whiteTrans,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 10,
    },
    left_side: {
      flex: 0.6,
      height: "auto",
      justifyContent: "center",
      alignItems: "center",
    },
    right_side: {
      flex: 1,
      height: "auto",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "flex-start",
      gap: 7,
    },
    forest_title: {
      fontSize: SIZES.large,
      fontWeight: "700",
    },



  });