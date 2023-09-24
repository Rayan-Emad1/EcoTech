import { StyleSheet, ScrollView, View } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { CustomHeader, WeatherWidget } from "../../components";

const Notifications = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredForests, setFilteredForests] = useState([]);

  const forests = useSelector((state) => state.forests);
  const forestsArray = Object.values(forests);

  const handleSearch = (searchValue) => {
    const lowerCaseSearchValue = searchValue.toLowerCase();
    const filteredForests = forestsArray.filter((forest) =>
      forest.name.toLowerCase().includes(lowerCaseSearchValue)
    );
    setFilteredForests(filteredForests);
  };

  useEffect(() => {
    handleSearch(searchText);
    console.log(searchText)
  }, [searchText]);

  return (
    <View style={styles.container}>
      <CustomHeader setSearchValue={setSearchText} />
      <ScrollView style={{ marginTop: 110 }}>
        {filteredForests.map((forest, index) => (
          <WeatherWidget key={index} forest={forest} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
