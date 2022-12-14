import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Colors from '../constants/color';
import PrimaryButton from '../components/ui/primaryButton';
import Title from '../components/ui/title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/instructionText';
const StartGameScreen = ({onConfirm}) => {
  const [userInput, setUserInput] = useState('');
  const reset = () => {
    setUserInput('');
  };
  const {height} = useWindowDimensions();
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(userInput, 10);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be betwen 1 and 99', [
        {text: 'okay', style: 'destructive', onPress: reset},
      ]);
      return;
    }
    onConfirm(chosenNumber);
  };
  const marginTop = height < 380 ? 30 : 100;
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={[styles.rootContainer, {marginTop: marginTop}]}>
          <Title text={'Guess My Number'} />
          <Card>
            <InstructionText>Enter a number</InstructionText>
            <TextInput
              onChangeText={value => setUserInput(value)}
              style={styles.numberInput}
              maxLength={2}
              keyboardType={'number-pad'}
              autoCapitalize={'none'}
              value={userInput}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonConatiner}>
                <PrimaryButton onPress={reset}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonConatiner}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};
export default StartGameScreen;
const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
  },
  numberInput: {
    width: 50,
    textAlign: 'center',
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonConatiner: {
    flex: 1,
  },
});
