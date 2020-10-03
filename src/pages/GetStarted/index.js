import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Illogin, BgGetStarted} from '../../assets';
import {ButtonGetStarted} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={BgGetStarted} style={styles.container}>
      <View style={styles.wrapperText}>
        <Text style={styles.title}>Special For You Happy Coffee</Text>
        <Text style={styles.secTitle}>
          Enjoyment of coffe and created your creativity
        </Text>
      </View>
      <View style={styles.wrapperItem}>
        <ButtonGetStarted
          title="Login"
          desc="Silahkan Login"
          icon="login"
          onPress={() => navigation.navigate('Login')}
        />
        <View style={styles.line} />
        <ButtonGetStarted
          title="Register"
          desc="Daftar Account Anda"
          icon="register"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  wrapperText: {
    padding: 30,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'RobotoSlab-Regular',
  },
  secTitle: {
    color: 'white',
    marginTop: 8,
    fontFamily: 'RobotoSlab-Regular',
    maxWidth: 179,
    fontSize: 12,
  },
  line: {
    width: 321,
    height: 1,
    backgroundColor: '#C4C4C4',
    borderWidth: 1,
    marginVertical: 12,
  },
  wrapperItem: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    marginTop: 270,
    flex: 1,
    paddingTop: 50,
    paddingBottom: 44,
    paddingHorizontal: 32,

    shadowColor: '#543A20',

    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
    elevation: 50,
  },
});
