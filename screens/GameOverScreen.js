import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import Colors from '../constants/color';
const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  const {width, height} = useWindowDimensions();
  let image = 300;
  if (width < 380) {
    image = 150;
  }
  if (height < 400) {
    image = 80;
  }
  const imageStyle = {
    width: image,
    height: image,
    borderRadius: image / 2,
  };
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.rootConatiner}>
        <Title text={'Game OVER'} />
        <View style={[styles.imageConatiner, imageStyle]}>
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
    </ScrollView>
  );
};
export default GameOverScreen;
const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    justifyContent: 'center',
  },
  rootConatiner: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageConatiner: {
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
