import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from '../components/primaryButton';
const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.arrangeInput}>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType={'number-pad'}
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonConatiner}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonConatiner}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: 100,
    backgroundColor: '#3b021f',
    shadowColor: '#ffffff',
    elevation: 8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    width: 50,
    textAlign: 'center',
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
