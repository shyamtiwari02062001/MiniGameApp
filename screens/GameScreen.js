import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import NumberContainer from '../components/game/NumberConatiner';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import Card from '../components/ui/Card';
import Colors from '../constants/color';
import InstructionText from '../components/ui/instructionText';
const generateNumberBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateNumberBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let min = 1;
let max = 100;
const GameScreen = ({userNumber, onGameOver}) => {
  const initalGuess = generateNumberBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initalGuess);
  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const newrnd = generateNumberBetween(min, max, currentGuess);
    setCurrentGuess(newrnd);
  };
  return (
    <View style={styles.conatiner}>
      <Title text="Opponent's Guess" />
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText>Higher or Lower</InstructionText>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </Card>
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
