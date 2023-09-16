import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES } from '../../constants/index';

const CustomTitle = ({ title, subtitle }) => {
  return (
    <View style={styles.title_container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  title_container: {
    width: '75%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    textAlign: 'center',
  },


});
