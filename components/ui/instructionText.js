import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../constants/color';
const InstructionText = ({children, style}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
export default InstructionText;
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.accent500,
  },
});
