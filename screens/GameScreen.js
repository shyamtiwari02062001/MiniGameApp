import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NumberContainer from '../components/game/NumberConatiner';
import Title from '../components/ui/title';
import Colors from '../constants/color';
const generateNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};
const GameScreen = userNumber => {
  const initalGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  return (
    <View style={styles.conatiner}>
      <Title text="Opponent's Guess" />
      <NumberContainer number={currentGuess}/>
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
