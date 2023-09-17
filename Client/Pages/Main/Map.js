import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Map = () => {
  const handleChange = (place) => {
    console.log(place);
  };

  const forests_locations = [
    {
      title: "first",
      location: {
        latitude: 32.83728746204912,
        longitude: 34.91056445540316,
      },
      description: "Something Cool",
    },
    {
      title: "second",
      location: {
        latitude: 36.83728746204912,
        longitude: 37.91056445540316,
      },
      description: "Something Cool",
    },
  ];

  showForestLocation = () => {
    return forests_locations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
        />
      );
    });
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
      >
        {showForestLocation()}
      </MapView>
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
