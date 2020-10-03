import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IconEys} from '../../assets';
import {IlLogin} from '../../assets/image';
import {ButtonLogin, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Login" />
        <View style={styles.container}>
          <View style={styles.wrapperWelcome}>
            <IlLogin style={styles.ilustrator} />
            <Text style={styles.title}>Welcome Back</Text>
          </View>
          <Input lable="Email" placeholder="example@email.com" />
          <Gap height={22} />
          <View style={styles.wraperPassword}>
            <Input lable="Password" />
            <IconEys style={styles.iconEyes} />
          </View>
          <Gap height={8} />
          <Link title="Forget Password?" />
          <Gap height={22} />
          <ButtonLogin title="Login" />
          <Gap height={24} />
          <Link
            title="Don’t Have an Account ? Sing in"
            size={14}
            align="center"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 30,
  },
  wrapperWelcome: {
    alignItems: 'center',
    marginTop: 20,
  },
  ilustrator: {
    width: 260,
    height: 155,
  },
  title: {
    fontSize: 24,
    fontFamily: 'RobotoSlab-Regular',
    marginTop: 11,
    marginBottom: 38,
    color: '#543A20',
  },
  wraperPassword: {
    justifyContent: 'space-between',
    position: 'relative',
  },
  iconEyes: {
    position: 'absolute',
    top: 30,
    right: 13,
  },
});
