import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Callout, Marker } from "react-native-maps";
import { images, icons } from "../../constants";

const CustomMarker = ({forest, index,onMarkerPress}) => {

  const { title, coordinates, fire_alarm } =forest;
  
  return (
    <Marker
      key={index}
      coordinate={coordinates}
      image={fire_alarm? images.dangerous_pin :images.safe_pin}
      onPress={(e) => onMarkerPress(e)}
    >
      <Callout tooltip style={styles.callout_container}>
        <View style={styles.callout_view_container}>
          <View style={styles.callout_text_container}>
            <Image source={fire_alarm? icons.danger : icons.safe} style={styles.icon_style} />
            <Text style={styles.callout_text}>{title}</Text>
          </View>
        </View>
      </Callout>
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  icon_style: {
    resizeMode: "stretch",
    height: 25,
    width: 25,
  },
  callout_container: {
    height: 50,
    width: 50,
  },
  callout_view_container: {
    position: "relative",
    top: "152%",
    left: "11%",
    width: 200,
  },
  callout_text_container: {
    borderRadius: 100,
    height: 40,
    width: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 7.5,
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "white",
  },
  callout_text: {
    alignSelf: "flex-start",
    margin: 10,
  },
});
