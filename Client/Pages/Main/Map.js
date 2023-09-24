import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  Animated,
  Dimensions,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";

import { CustomHeader, ForestCard, CustomMarker } from "../../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 310;
const SPACING_FOR_CARD_INSET = width * 0.1 - 15;

const Map = () => {
  const [location, setLocation] = useState();
  const [showCards, setShowCards] = useState(false);
  const [searchText, setSearchText] = useState("");

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  const _map = useRef(null);
  const _scrollView = useRef(null);

  const [forests, setForests] = useState([
    {
      title: "Barouk National Park",
      coordinates: {
        latitude: 33.937287,
        longitude: 35.81056445540316,
      },
      fire_alarm:false,
      address: "Lebanon-Shouf",
      current_temperature: 35,
      current_humidity: 50,
    },
    {
      title: "second",
      coordinates: {
        latitude: 36.83728746204912,
        longitude: 37.91056445540316,
      },
      fire_alarm:true,
      address: "Lebanon-Shouf",
      current_temperature: 35,
      current_humidity: 50,
    },
    {
      title: "third",
      coordinates: {
        latitude: 35.83728746204912,
        longitude: 35.91056445540316,
      },
      fire_alarm:true,
      address: "Lebanon-Shouf",
      current_temperature: 35,
      current_humidity: 50,
    },
    {
      title: "forth",
      coordinates: {
        latitude: 30.83728746204912,
        longitude: 36.91056445540316,
      },
      fire_alarm:false,
      address: "Lebanon-Shouf",
      current_temperature: 35,
      current_humidity: 50,
    },
  ]);

  const region = {
    latitude: 33.83728746204912,
    latitudeDelta: 2.1746411420983733,
    longitude: 35.91056445540316,
    longitudeDelta: 1.4095237243800227,
  };

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const handleMapLongPress = async () => {
    await setShowCards(!showCards);
    if (!showCards) {
      _scrollView.current.scrollTo({ x: -315, y: 0, animated: true });
    }
  };

  const handleSearch = async (searchValue) => {
    const matchingForest = forests.find((forest) =>
      forest.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (matchingForest && searchValue != "") {
      const index = forests.indexOf(matchingForest);
      setShowCards(true);
      let x = index * CARD_WIDTH + index * 20;
      if (Platform.OS === "ios") {
        x = x - SPACING_FOR_CARD_INSET;
      }
      _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }
  };

  const handleMapAnimation = ({ value }) => {
    let index = Math.floor(value / CARD_WIDTH + 0.2);
    if (index >= forests.length) {
      index = forests.length - 1;
    }
    if (index <= 0) {
      index = 0;
    }

    clearTimeout(regionTimeout);

    const regionTimeout = setTimeout(() => {
      if (mapIndex !== index) {
        mapIndex = index;
        const { coordinates } = forests[index];
        console.log(coordinates),
          _map.current.animateToRegion(
            {
              ...coordinates,
              latitudeDelta: region.latitudeDelta,
              longitudeDelta: region.longitudeDelta,
            },
            350
          );
      }
    }, 10);
  };

  const onMarkerPress = async (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;
    await setShowCards(true);

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === "ios") {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
  };

  useEffect(() => {
    getPermissions();
  }, []);

  useEffect(() => {
    mapAnimation.addListener(handleMapAnimation);
    return () => {
      mapAnimation.removeListener(handleMapAnimation);
    };
  });

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);

  return (
    <View style={styles.container}>
      <CustomHeader setSearchValue={setSearchText} />
      <MapView
        ref={_map}
        style={styles.map}
        initialRegion={region}
        onLongPress={handleMapLongPress}
        onPress={() => Keyboard.dismiss()}
      >
        {forests.map((forest, index) => {
          return (
            <CustomMarker
              forest={forest}
              key={index}
              index={index}
              onMarkerPress={onMarkerPress}
            />
          );
        })}
      </MapView>

      {showCards && (
        <Animated.ScrollView
          ref={_scrollView}
          horizontal
          pagingEnabled
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          style={styles.scrollView}
          contentContainerStyle={{
            paddingHorizontal:
              Platform.OS === "android" ? SPACING_FOR_CARD_INSET : 0,
          }}
          contentInset={{
            top: 0,
            left: SPACING_FOR_CARD_INSET,
            bottom: 0,
            right: SPACING_FOR_CARD_INSET,
          }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: mapAnimation,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
        >
          {forests.map((forest, index) => (
            <ForestCard key={index} forest={forest} />
          ))}
        </Animated.ScrollView>
      )}
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
  scrollView: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    paddingVertical: 15,
  },
});

//TO FETCH AND ADD DATA
// const forests_locations = [
//   {
//     title: "Barouk National Park",
//     location: {
//       latitude: 33.937287,
//       longitude: 35.81056445540316,
//     },
//     description: "Something Cool",
//   },
//   {
//     title: "second",
//     location: {
//       latitude: 36.83728746204912,
//       longitude: 37.91056445540316,
//     },
//     description: "Something Cool",
//   },
//   {
//     title: "third",
//     location: {
//       latitude: 35.83728746204912,
//       longitude: 35.91056445540316,
//     },
//     description: "Something Cool",
//   },
//   {
//     title: "forth",
//     location: {
//       latitude: 30.83728746204912,
//       longitude: 36.91056445540316,
//     },
//     description: "Something Cool",
//   },
// ];
