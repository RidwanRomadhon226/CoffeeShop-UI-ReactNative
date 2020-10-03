import React from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';
import {colors} from '../../../utils';

const Input = ({lable, placeholder}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.textLable}>{lable}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  content: {
    // alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.text.primary,
    borderRadius: 10,
    padding: 12,
    height: 40,
  },
  textLable: {
    color: colors.text.primary,
    fontSize: 15,
    fontFamily: 'RobotoSlab-Regular',
  },
});
