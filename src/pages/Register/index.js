import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ButtonLogin, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';

const Register = () => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Register" />
        <Gap height={20} />
        <View style={styles.content}>
          <Input lable="Name" placeholder="example@gmail.com" />
          <Gap height={26} />
          <Input lable="Email" placeholder="Ridwan Romadhon" />
          <Gap height={26} />
          <Input lable="Password" />
          <Gap height={26} />
          <Input lable="Confrim Password" />
          <Gap height={49} />
          <ButtonLogin title="Register" />
          <Gap height={49} />
          <Link title="Already Account? LogIn" size={14} align="center" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    backgroundColor: colors.white,
    padding: 30,
  },
});
