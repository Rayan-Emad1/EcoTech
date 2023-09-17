import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  const handleChange = (place) => {
    console.log(place);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChange={handleChange}
        initialRegion={{
          latitude: 33.83728746204912,
          latitudeDelta: 2.1746411420983733,
          longitude: 35.91056445540316,
          longitudeDelta: 1.4095237243800227,
        }}
      ></MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
