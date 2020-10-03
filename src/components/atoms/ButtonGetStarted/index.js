import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Illogin, IlRegister, IlNext} from '../../../assets';

const ButtonGetStarted = ({title, desc, icon, onPress}) => {
  const Icon = () => {
    if (icon === 'login') {
      return <Illogin />;
    }
    if (icon === 'register') {
      return <IlRegister />;
    }
    return <Illogin />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.wrapperIcon}>
          <Icon />
        </View>
        <View style={styles.wrappertext}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.titleDesc}>{desc}</Text>
          </View>
        </View>
        <IlNext style={styles.nextStep} />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonGetStarted;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperIcon: {
    backgroundColor: '#543A20',
    padding: 22,
    borderRadius: 10,
    shadowColor: '#543A20',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 13.16,
    elevation: 50,
  },
  wrappertext: {
    justifyContent: 'flex-start',
    flex: 1,
    marginLeft: 11,
  },
  title: {
    // fontWeight: 'normal',
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 24,
  },
  titleDesc: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 12,
  },
});
