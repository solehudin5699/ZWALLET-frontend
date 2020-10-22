import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Dimensions,
} from 'react-native';
import {Container, Content} from 'native-base';
import FormChangePassword from '../components/ChangePassword/FormChangePassword';
const ChangePassword = () => {
  return (
    <Container
      style={{
        backgroundColor: 'rgba(99, 121, 244, 0.2)',
      }}>
      <FormChangePassword />
    </Container>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  containerTitle: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#6379F4', fontSize: 26, fontWeight: 'bold'},
  containerForm: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
    height: Dimensions.get('window').height,
  },
  regist: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: '700',
    color: '#3A3D42',
  },
  subRegistTitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
    width: '70%',
    color: 'rgba(58, 61, 66, 0.6)',
  },
});
