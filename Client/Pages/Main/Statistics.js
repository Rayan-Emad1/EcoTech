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
      <View style={styles.backgroundColor}>
        <View style={styles.dropDownContainer}>
          <DropDown
            type="Value"
            selectedValue={valueType}
            onValueChange={handleValueTypeChange}
            STATE_COLOR={STATE_COLOR}
          />
          <DropDown
            type="Time"
            selectedValue={timeType}
            onValueChange={handleTimeTypeChange}
            STATE_COLOR={STATE_COLOR}
          />
        </View>

        {valueType == "temperature" && timeType == "weekly" && (
          <LineChart
            yAxisSuffix="°C"
            yAxisInterval={10}
            data={WeeklyTemp}
            width={width - 20}
            height={height}
            chartConfig={chartConfig}
            style={{ marginBottom: 10, backgroundColor: "red" }}
            bezier
            fromZero
            yLabelsOffset={14}
          />
        )}
        {valueType == "temperature" && timeType == "hourly" && (
          <View style={styles.scrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentOffset={{ x: 25, y: 0 }}
            >
              <LineChart
                data={HourlyTemp}
                width={700}
                yAxisSuffix="%"
                height={height}
                xLabelsOffset={1}
                chartConfig={chartConfig}
                bezier
                fromZero
                showValuesOnTopOfBars
              />
            </ScrollView>
          </View>
        )}
        {valueType == "humidity" && timeType == "hourly" && (
          <View style={styles.scrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentOffset={{ x: 25, y: 0 }}
            >
              <BarChart
                data={HourlyHumid}
                yAxisSuffix="%"
                width={600}
                height={height}
                xLabelsOffset={5}
                chartConfig={chartConfig}
                bezier
                fromZero
                yLabelsOffset={14}
                showValuesOnTopOfBars
              />
            </ScrollView>
          </View>
        )}
        {valueType == "humidity" && timeType == "weekly" && (
          <BarChart
            yAxisSuffix="%"
            yAxisInterval={10}
            data={WeeklyHumid}
            width={width - 20}
            height={height}
            chartConfig={chartConfig}
            bezier
            fromZero
            yLabelsOffset={14}
            showValuesOnTopOfBars
          />
        )}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottom_title}>Forcast</Text>
        <ScrollView
          style={styles.bottom_text_container}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.bottom_text}>
            Something
            Nicewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwnjbjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwe
          </Text>
        </ScrollView>
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
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 30,
  },
  dropDownContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  widget_temperature: {
    fontWeight: "900",
    fontSize: 40,
  },
  widget_average: {
    fontSize: SIZES.small,
    fontWeight: "bold",
    marginBottom: -7,
  },
  widget_location: {
    fontSize: SIZES.medium,
    fontWeight: "600",
  },
  bottom: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_title: {
    marginLeft: "7.5%",
    alignSelf: "flex-start",
    fontWeight: "900",
    fontSize: 40,
    color: "black",
  },
  bottom_text_container: {
    width: "85%",
    maxHeight: 140,
  },
  bottom_text: {
    fontWeight: "900",
    fontSize: SIZES.small,
  },

 

});

export default Statistics;
