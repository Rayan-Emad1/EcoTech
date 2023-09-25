import React, { useState, useEffect } from "react";
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";

import { DropDown, BackButton } from "../../components";
import { COLORS, SIZES } from "../../constants";

import { fetchAndTransformForestData } from "../../constants/request";

const Statistics = ({ navigation, route }) => {
  const { id, address, current_temperature, fire_alarm, forecast } = route.params;
  const STATE_COLOR = fire_alarm ? COLORS.red : COLORS.green;

  const [hourlyHumid, setHourlyHumid] = useState(null);
  const [weeklyHumid, setWeeklyHumid] = useState(null);
  const [hourlyTemp, setHourlyTemp] = useState(null);
  const [weeklyTemp, setWeeklyTemp] = useState(null);

  const chartConfig = {
    backgroundGradientFrom: COLORS.black_icons,
    backgroundGradientTo: COLORS.black_icons,
    strokeWidth: 5,
    decimalPlaces: 0,
    barPercentage: 0.7,
    labelColor: () => STATE_COLOR,
    color: () => STATE_COLOR,
  };

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

  const fetchData = async () => {
    try {
      const forest = await fetchAndTransformForestData(id);

      setHourlyHumid(forest.hourlyHumidData);
      setWeeklyHumid(forest.weeklyHumidData);
      setHourlyTemp(forest.hourlyTempData);
      setWeeklyTemp(forest.weeklyTempData);
      console.log(forest.hourlyTempData.datasets)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <BackButton navigation={navigation} />
      <View style={styles.top}>
        <Text style={styles.widget_temperature}>{current_temperature}°C</Text>
        <Text style={styles.widget_average}>H:32°C L:28°C</Text>
        <Text style={styles.widget_location}>{address}</Text>
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

        {valueType == "temperature" && timeType == "weekly" && weeklyTemp && (
          <LineChart
            yAxisSuffix="°C"
            yAxisInterval={10}
            data={weeklyTemp}
            width={width - 20}
            height={height}
            withInnerLines={false}
            chartConfig={chartConfig}
            style={{ marginBottom: 10, backgroundColor: "red" }}
            bezier
            fromZero
            yLabelsOffset={14}
          />
        )}
        {valueType == "temperature" && timeType == "hourly" && hourlyTemp &&(
          <View style={styles.scrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentOffset={{ x: 25, y: 0 }}
            >
              <LineChart
                data={hourlyTemp}
                width={700}
                yAxisSuffix="°C"
                withInnerLines={false}
                height={height}
                xLabelsOffset={1}
                chartConfig={chartConfig}
                bezier
                fromZero
              />
            </ScrollView>
          </View>
        )}
        {valueType == "humidity" && timeType == "hourly" && hourlyHumid && (
          <View style={styles.scrollViewContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentOffset={{ x: 25, y: 0 }}
            >
              <BarChart
                data={hourlyHumid}
                yAxisSuffix="%"
                width={600}
                withInnerLines={false}
                height={height}
                xLabelsOffset={5}
                chartConfig={chartConfig}
                fromZero
                yLabelsOffset={14}
                showValuesOnTopOfBars
              />
            </ScrollView>
          </View>
        )}
        {valueType == "humidity" && timeType == "weekly" && weeklyHumid && (
          <BarChart
            yAxisSuffix="%"
            yAxisInterval={10}
            data={weeklyHumid}
            width={width - 20}
            height={height}
            chartConfig={chartConfig}
            withInnerLines={false}
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
            {forecast}
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Statistics;

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
    fontSize: SIZES.medium,
    fontWeight: "bold",
    marginBottom: -7,
  },
  widget_location: {
    fontSize: SIZES.small,
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
    fontWeight: "400",
    fontSize: SIZES.small,
    color:COLORS.black_icons,
  },

  scrollViewContainer: {
    backgroundColor: "#08130D",
    height: 310,
    borderRadius: 10,
  },
  backgroundColor: {
    backgroundColor: "#08130D",
    width: 385,
    height: 423,
    borderRadius: 10,
    gap: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 20,
  },
});
