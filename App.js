import React, {useState} from 'react';
import {StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const [roundNumber, setRoundNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
    setGameOver(false);
  };
  const gameOverHandler = () => {
    setGameOver(true);
  };
  const startNewGameHandler = () => {
    setUserNumber();
    setRoundNumber(0);
  };
  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary700, Colors.accent500]}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};
export default App;
const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
