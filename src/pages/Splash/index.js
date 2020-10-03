import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {BgSplash, IconSplas} from '../../assets';

const Splas = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, []);

  return (
    <ImageBackground source={BgSplash} style={styles.imageBg}>
      <IconSplas styles={styles.logoIlustratir} />
      <Text style={styles.text}>Coffe Happy</Text>
    </ImageBackground>
  );
};

export default Splas;

const styles = StyleSheet.create({
  logoIlustratir: {
    width: 220,
    height: 220,
    marginBottom: 20,
  },
  imageBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'RobotoSlab-Bold',
    color: 'black',
  },
});
