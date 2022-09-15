import React from 'react';
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import Colors from '../constants/color';
const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootConatiner}>
      <Title text={'Game OVER'} />
      <View style={styles.imageConatiner}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed
        <Text style={styles.highlightText}> {roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlightText}> {userNumber} </Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};
export default GameOverScreen;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageConatiner: {
    width: width < 300 ? 150 : 300,
    height: width < 300 ? 150 : 300,
    borderRadius: width < 300 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlightText: {
    fontWeight: 'bold',
    color: Colors.primary600,
  },
  text: {
    fontSize: 36,
    color: Colors.primary800,
    textAlign: 'center',
    marginVertical: 24,
  },
});
