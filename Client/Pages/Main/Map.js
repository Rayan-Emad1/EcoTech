import React, { useState, useEffect } from "react";
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
import CustomHeader from "../../components/common/CustomHeader";
import ForestCard from "../../components/Map/ForestCard";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 115;
const CARD_WIDTH = 310;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const Map = () => {
  const [location, setLocation] = useState();
  const [showCards, setShowCards] = useState(false);
  const [searchText, setSearchText] = useState("");

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
  ];

  const region = {
    latitude: 33.83728746204912,
    latitudeDelta: 2.1746411420983733,
    longitude: 35.91056445540316,
    longitudeDelta: 1.4095237243800227,
  };

  const [state, setState] = React.useState(forests_locations);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);
  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Please grant location permissions");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
    console.log("Aklna Khara");
  };

  const showForestLocation = () => {
    return forests_locations.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          image={images.safe_pin}
          onPress={(e) => onMarkerPress(e)}
        >
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
    getPermissions();
  }, []);




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
        {showForestLocation()}
      </MapView>


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
