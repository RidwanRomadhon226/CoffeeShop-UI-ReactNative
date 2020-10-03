import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBack} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrappericonBack}>
        <IconBack />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Gap width={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: 30,
    justifyContent: 'space-between',
  },
  wrappericonBack: {
    width: 37,
    height: 37,
    backgroundColor: colors.button.buttonIcon.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 / 2,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    flex: 1,
    color: colors.text.primary,
    fontFamily: 'RobotoSlab-Regular',
  },
});
