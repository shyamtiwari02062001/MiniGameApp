import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/color';
const Card = ({children}) => {
  return <View style={styles.card}>{children}</View>;
};
export default Card;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 10,
    marginTop: width < 380 ? 18 : 36,
    backgroundColor: Colors.primary800,
    shadowColor: Colors.white,
    elevation: 8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
