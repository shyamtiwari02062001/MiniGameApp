import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Colors from '../../constants/color';
const GuessLogItem = ({roundNumber, guess}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess {guess}</Text>
    </View>
  );
};
export default GuessLogItem;
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.primary800,
    borderRadius: 80,
    padding: 24,
    margin: 12,
    justifyContent: 'space-between',
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    elevation: 4,
    shadowColor: Colors.white,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
