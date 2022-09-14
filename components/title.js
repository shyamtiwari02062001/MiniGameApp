import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../constants/color';
const Title = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};
export default Title;
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.accent500,
    textAlign: 'center',
    borderWidth: 2,
    padding: 16,
    borderColor: Colors.accent500,
  },
});
