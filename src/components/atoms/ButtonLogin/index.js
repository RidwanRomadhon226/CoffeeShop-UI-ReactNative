import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconNext, IlNext} from '../../../assets';
import {colors} from '../../../utils';

const ButtonLogin = ({title}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.wrapperIcons}>
        <IconNext />
      </View>
    </View>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 30,
    fontFamily: 'RobotoSlab-Regular',
    color: colors.button.secondary.text,
  },
  wrapperIcons: {
    width: 84,
    height: 84,
    backgroundColor: colors.secondary,
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});
