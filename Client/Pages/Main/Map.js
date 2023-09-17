import React, { useState ,useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

const Map = () => {
  
  const [location, setLocation] = useState();
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
          image={{uri: 'https://cdn0.iconfinder.com/data/icons/internet-glyphs-vol-1/52/custom__map__pin__location__pinned__gps__marker-512.png'}}
        />
      );
    });
  };



  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      console.log("Location:");
      console.log(currentLocation);
    };
    getPermissions();
  }, []);




  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
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
