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



    </View>
  </View>
  )
}

export default ForestCard

const styles = StyleSheet.create({







  });