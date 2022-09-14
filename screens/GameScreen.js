import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Alert, FlatList} from 'react-native';
import NumberContainer from '../components/game/NumberConatiner';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import Card from '../components/ui/Card';
import Colors from '../constants/color';
import InstructionText from '../components/ui/instructionText';
import GuessLogItem from '../components/game/gueeslogitem';
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
  const [guessRound, setGuessRound] = useState([initalGuess]);
  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver, guessRound.length]);
  useEffect(() => {
    min = 1;
    max = 100;
  }, []);
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
    setGuessRound(currentGuessData => [newrnd, ...currentGuessData]);
  };
  return (
    <View style={styles.conatiner}>
      <Title text="Opponent's Guess" />
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={guessRound}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRound.length - itemData.index}
              guess={itemData.item}>
              {itemData.item}
            </GuessLogItem>
          )}
        />
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
  instructionText: {
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
  list: {
    padding: 16,
    height: '60%',
  },
});
