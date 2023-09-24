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
import { images, icons } from "../../constants/index";
import MapView, { Callout, Marker } from "react-native-maps";
import * as Location from "expo-location";
import { CustomHeader, ForestCard } from "../../components";

const { width } = Dimensions.get("window");
const CARD_WIDTH = 310;
const SPACING_FOR_CARD_INSET = width * 0.1 - 15;

const Map = () => {
  const [location, setLocation] = useState();
  const [showCards, setShowCards] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [forests, setForests] = useState([
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
    {
      title: "third",
      location: {
        latitude: 35.83728746204912,
        longitude: 35.91056445540316,
      },
      description: "Something Cool",
    },
    {
      title: "forth",
      location: {
        latitude: 30.83728746204912,
        longitude: 36.91056445540316,
      },
      description: "Something Cool",
    },
  ]);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  const _map = useRef(null);
  const _scrollView = useRef(null);

  const region = {
    latitude: 33.83728746204912,
    latitudeDelta: 2.1746411420983733,
    longitude: 35.91056445540316,
    longitudeDelta: 1.4095237243800227,
  };

  //TO FETCH AND ADD DATA
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
    {
      title: "third",
      location: {
        latitude: 35.83728746204912,
        longitude: 35.91056445540316,
      },
      description: "Something Cool",
    },
    {
      title: "forth",
      location: {
        latitude: 30.83728746204912,
        longitude: 36.91056445540316,
      },
      description: "Something Cool",
    },
  ];

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  const showForestLocation = (forest, index) => {
    console.log(forest.location);
    console.log(forest.title);
    console.log("======================");
    return (
      <Marker
        key={index}
        coordinate={forest.location}
        image={images.safe_pin}
        onPress={(e) => onMarkerPress(e)}
      >
        <Callout tooltip style={styles.callout_container}>
          <View style={styles.callout_view_container}>
            <View style={styles.callout_text_container}>
              <Image source={icons.safe} style={styles.icon_style} />
              <Text style={styles.callout_text}>{forest.title}</Text>
            </View>
          </View>
        </Callout>
      </Marker>
    );
  };

  const handleMapLongPress = async () => {
    await setShowCards(!showCards);
    if (!showCards) {
      _scrollView.current.scrollTo({ x: -315, y: 0, animated: true });
    }
  };

  const handleSearch = async (searchValue) => {
    const matchingForest = forests_locations.find((forest) =>
      forest.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (matchingForest && searchValue != "") {
      const index = forests_locations.indexOf(matchingForest);
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
        const { location } = forests[index];
        console.log(location),
          _map.current.animateToRegion(
            {
              ...location,
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
          return showForestLocation(forest, index);
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
          {forests_locations.map((marker, index) => (
            <ForestCard key={index} title={marker.title} />
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
  scrollView: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    paddingVertical: 15,
  },
});
