import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Title from '../components/title';
import Colors from '../constants/color';
const GameScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Title text="Opponent's Guess" />
      <View>
        <Text>Higher or Lower</Text>
      </View>
    </View>
  );
};
export default GameScreen;
const styles = StyleSheet.create({
  conatiner: {
    padding: 24,
  },
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
