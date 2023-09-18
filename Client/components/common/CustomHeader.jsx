import {StyleSheet,View,Image,Platform,TextInput,Pressable} from "react-native";
import React, { useState} from "react";
import { COLORS, icons } from "../../constants/index";



const CustomHeader = () => {

    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
    };
  
  return (
 <View style={styles.top}>
    <Pressable style={styles.Icon_background}>
      <Image source={icons.profile} />
    </Pressable>
    <View>
      {isSearchVisible ? (
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search here"
            placeholderTextColor={COLORS.white}
            autoCapitalize="none"
            style={styles.searchBox}
          />
          <Pressable onPress={toggleSearch}>
            <Image source={icons.search} />
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={toggleSearch} style={styles.Icon_background}>
          <Image source={icons.search} />
        </Pressable>
      )}
    </View>
  </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  top: {
    marginTop: Platform.OS === "ios" ? 50 : 20,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap:18,
    top: 0,
    width: "100%",
    height: 50,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.black_trans,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 14,
    marginHorizontal: 20,
    borderRadius: 50,
  },
  searchBox: {
    width: "80%",
    height: 50,
    color: COLORS.white,
  },

})