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
      value={selectedValue}
      data={options}

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



});
