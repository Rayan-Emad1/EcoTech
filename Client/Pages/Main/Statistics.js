import React, { useState } from "react";
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { HourlyHumid, WeeklyHumid, HourlyTemp, WeeklyTemp } from "./data";
import DropDown from "../../components/Notification/Dropdown";
import BackButton from "../../components/common/BackButton";
import { COLORS, SIZES } from "../../constants/index";

const STATE_COLOR = COLORS.green;

const chartConfig = {
  backgroundGradientFrom: COLORS.black_icons,
  backgroundGradientTo: COLORS.black_icons,
  strokeWidth: 5,
  decimalPlaces: 0,
  barPercentage: 0.7,
  labelColor: () => STATE_COLOR,
  color: () => STATE_COLOR,
};
const Statistics = ({ navigation }) => {
  const width = 400;
  const height = 350;

  const [valueType, setValueType] = useState("temperature");
  const [timeType, setTimeType] = useState("hourly");

  const handleValueTypeChange = (newValueType) => {
    setValueType(newValueType);
  };
  const handleTimeTypeChange = (newTimeType) => {
    setTimeType(newTimeType);
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.top}>
        <Text style={styles.widget_temperature}>32°C</Text>
        <Text style={styles.widget_average}>H:32°C L:28°C</Text>
        <Text style={styles.widget_location}>
          Shouf National Ceders, Lebanon
        </Text>
      </View>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },








});

export default Statistics;
