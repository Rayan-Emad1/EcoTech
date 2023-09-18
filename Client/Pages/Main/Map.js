import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { COLORS, SIZES, images, icons } from "../../constants/index";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import CustomHeader from "../../components/common/CustomHeader";


const Map = () => {
  const [location, setLocation] = useState();
  const [searchText, setSearchText] = useState(""); // Define the searchText state

  const handleSearch = (searchValue) => {
    console.log("Search Value:", searchValue);
  };

  const forests_locations = [
    {
      title: "Barouk National Park",
      location: {
        latitude: 33.937287,
        longitude: 35.81056445540316,
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
        <Marker key={index} coordinate={item.location} image={images.safe_pin}>
          <Callout tooltip style={styles.callout_container}>
            <View style={styles.callout_view_container}>
              <View style={styles.callout_text_container}>
                <Image source={icons.safe} style={styles.icon_style} />
                <Text style={styles.callout_text}>{item.title}</Text>
              </View>
            </View>
          </Callout>
        </Marker>
      );
    });
  };

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
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
      <CustomHeader setSearchValue={setSearchText} />
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
