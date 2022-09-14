import React, {useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/GameScreen';
const App = () => {
  const [userNumber, setUserNumber] = useState(null);
  const pickedNumberHandler = pickedNumber => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onConfirm={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e032b', '#ddb52f']}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}>
        {screen}
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
