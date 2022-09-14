import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/color';
const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOutterContainer}>
      <Pressable
        android_ripple={{color: Colors.primary600}}
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};
export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOutterContainer: {
    borderRadius: 20,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 16,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
