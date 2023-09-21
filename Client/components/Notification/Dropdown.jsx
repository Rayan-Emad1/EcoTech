import React from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { icons } from "../../constants/index";



const DropDown = ({ STATE_COLOR, type, selectedValue, onValueChange }) => {
;

  return (
    <SelectCountry
      value={selectedValue}
      data={options}

 

      onChange={(e) => {
        onValueChange(e.value);
      }}
    />
  );
};

export default DropDown;
const styles = StyleSheet.create({



});
