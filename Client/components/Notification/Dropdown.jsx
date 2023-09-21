import React from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { icons } from "../../constants/index";

const valueOptions = [
  {
    value: "temperature",
    label: "Temperature",
    image: icons.temp_dropdown,
  },
  {
    value: "humidity",
    label: "Humidity",
    image: icons.humi_dropdown,
  },
];

const timeOptions = [
  {
    value: "hourly",
    label: "Hourly",
    image: icons.daily_dropdown,
  },
  {
    value: "weekly",
    label: "Weekly",
    image: icons.weekly_dropdown,
  },
];

const DropDown = ({ STATE_COLOR, type, selectedValue, onValueChange }) => {
  const options = type === "Value" ? valueOptions : timeOptions;

  return (
    <SelectCountry
      style={[styles.dropdown, { color: STATE_COLOR }]}
      selectedTextStyle={[styles.selectedTextStyle, { color: STATE_COLOR }]}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      value={selectedValue}
      data={options}
      itemContainerStyle={styles.container}
      valueField="value"
      labelField="label"
      placeholder={`Select ${type}`}
      onChange={(e) => {
        onValueChange(e.value);
      }}
    />
  );
};

export default DropDown;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  dropdown: {
    marginTop: 10,
    height: 50,
    width: 170,
    backgroundColor: "black",
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 8,
    backgroundColor: "black",
  },
  imageStyle: {
    marginLeft: 5,
    resizeMode: "stretch",
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 8,
  },
});
