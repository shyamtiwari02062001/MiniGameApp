import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#4e032b', '#ddb52f']}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        imageStyle={styles.backgroundImage}
        style={styles.rootScreen}>
        <StartGameScreen />
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
