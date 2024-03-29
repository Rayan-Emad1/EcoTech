import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { COLORS, icons } from "../../constants/index";

const CustomHeader = ({ setSearchValue  }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    setSearchValue("")
  };

  const navigation = useNavigation();


  const navigateToProfile = () => {
    navigation.navigate('SettingsStack', { screen: 'Profile' });
  };

  return (
    <View style={styles.top}>
      <Pressable  onPress={navigateToProfile}  style={styles.Icon_background}>
        <Image source={icons.profile_search} />
      </Pressable>
      <View>
        {isSearchVisible ? (
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search here"
              placeholderTextColor={COLORS.white}
              autoCapitalize="none"
              style={styles.searchBox}
              onChangeText={(text) => setSearchValue(text)}
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
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  top: {
    marginTop: Platform.OS === "ios" ? 50 : 40,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 18,
    top: 0,
    width: "100%",
    height: 50,
    zIndex: 1,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: COLORS.black_trans,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 14,
    marginRight: 20,
    borderRadius: 50,
  },
  searchBox: {
    width: "80%",
    height: 50,
    color: COLORS.white,
  },
  Icon_background: {
    backgroundColor: COLORS.black_trans,
    borderRadius: 50,
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
