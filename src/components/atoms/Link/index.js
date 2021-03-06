import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Link = ({size, title, align}) => {
  return (
    <View>
      <Text style={styles.text(size, align)}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, align) => ({
    fontSize: size,
    fontFamily: 'RobotoSlab-Regular',
    color: '#543A20',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
