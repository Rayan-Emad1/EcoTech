import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import MapView from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";

import { BackButton, SubmitButton, CustomInput } from "../../components";

const region = {
  latitude: 33.83728746204912,
  latitudeDelta: 2.1746411420983733,
  longitude: 35.91056445540316,
  longitudeDelta: 1.4095237243800227,
};

const Admin = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={{ marginBottom: 40 }}></View>
      <ScrollView
        style={{
          height: "100%",
        }}
      >
        <MapView style={styles.map} initialRegion={region}></MapView>

        <View style={styles.input_container}>
          <CustomInput
            title="Forest Name"
            placeholder=""
            customWidth = "95%"
            value=""
            onChangeText={(text) => handleChange("firstName", text)}
          />
          <CustomInput
            title="Forest Address"
            placeholder=""
            value=""
            customWidth = "95%"
            onChangeText={(text) => handleChange("lastName", text)}
          />
          <CustomInput
            title="Forest Description"
            placeholder=""
            value=""
            customWidth = "95%"
            onChangeText={(text) => handleDate(text)}
          />
          <SubmitButton
            text="Create Forest"
            onPress={() => handleSubmit()}
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
    width: 400,
    height: 400,
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
