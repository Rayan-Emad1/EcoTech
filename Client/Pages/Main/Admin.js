import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import { BackButton, SubmitButton, CustomInput } from "../../components";

const Admin = ({ navigation }) => {
  const region = {
    latitude: 33.83728746204912,
    latitudeDelta: 2.1746411420983733,
    longitude: 35.91056445540316,
    longitudeDelta: 1.4095237243800227,
  };

  const [DraggableCoord, setDraggableCoord] = useState({
    latitude: 33.77609416258676,
    longitude: 35.70566362482342,
  });

  const [forestData, setForestData] = useState({
    name: "",
    description: "",
    address: "",
    coordinates: {
      latitude: 33.77609416258676,
      longitude: 35.70566362482342,
    },
  });

  const handleChange = (field, text) => {
    setForestData((prevData) => ({
      ...prevData,
      [field]: text,
    }));
  };

  const handleMarkerDragEnd = (e) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    setDraggableCoord({ latitude, longitude });
    setForestData((prevData) => ({
      ...prevData,
      coordinates: {
        latitude,
        longitude,
      },
    }));
  };

  const handleSubmit = async () => {
    if (
      !forestData.name ||
      !forestData.description ||
      !forestData.address
    ) {
      Alert.alert("Error", "Please fill in all the fields.");
      return;
    }

    try {
      const token = await AsyncStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "http://192.168.0.7:8080/forest/create_forest",
        {
          name: forestData.name,
          description: forestData.description,
          address: forestData.address,
          coordinates: {
            latitude: forestData.coordinates.latitude,
            longitude: forestData.coordinates.longitude,
          },
        },
        { headers }
      );
        console.log(response.data)
      if (response.status === 201) {
        Alert.alert("Success", `Forest created successfully.  Forest ID : \n${response.data._id} `);
        setForestData({
            name: "",
            description: "",
            address: "",
            coordinates: {
              latitude: 0,
              longitude: 0,
            },
          });
      } else {
        Alert.alert("Error", "An error occurred while creating the forest.");
      }
    } catch (error) {
      console.error("Error creating forest:", error.message);
      Alert.alert("Error", "An error occurred while creating the forest.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={{ marginBottom: 40 }}></View>
      <ScrollView
        style={{
          height: "100%",
        }}
      >
        <MapView style={styles.map} initialRegion={region}>
          <Marker
            draggable
            pinColor="#00A72F"
            coordinate={DraggableCoord}
            onDragEnd={handleMarkerDragEnd}
          />
        </MapView>

        <View style={styles.input_container}>
          <CustomInput
            title="Forest Name"
            placeholder=""
            customWidth="95%"
            value={forestData.name}
            onChangeText={(text) => handleChange("name", text)}
          />
          <CustomInput
            title="Forest Address"
            placeholder=""
            value={forestData.address}
            customWidth="95%"
            onChangeText={(text) => handleChange("address", text)}
          />
          <CustomInput
            title="Forest Description"
            placeholder=""
            value={forestData.description}
            customWidth="95%"
            onChangeText={(text) => handleChange("description", text)}
          />
          <SubmitButton
            text="Create Forest"
            onPress={handleSubmit}
            set_color="green"
          />
          <View style={{ height: 250, width: 1 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  map: {
    width: 390,
    height: 390,
    borderRadius: 20,
    marginVertical: "3%",
  },
  input_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
