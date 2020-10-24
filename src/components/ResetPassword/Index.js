import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container, Content} from 'native-base';
import InputEmail from './InputEmail';
import InputOTP from './InputOTP';
import InputNewPassword from './InputNewPassword';
import Modal from './Modal';
import {resetStatusUpdateCreator} from '../../redux/actions/auth';

const Index = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {statusReq, statusOTP} = useSelector((state) => state.authAPI);
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (statusReq === 200) {
      setStep(2);
    } else if (statusOTP === 200) {
      setStep(3);
    } else {
      setStep(1);
    }
  }, [statusReq, statusOTP]);
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleShowModal = () => {
    setModal(true);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(resetStatusUpdateCreator());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(resetStatusUpdateCreator());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  return (
    <>
      {step === 1 ? (
        <Content>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Zwallet</Text>
          </View>

          <View style={styles.containerForm}>
            <Text style={styles.regist}>Reset Password</Text>
            <Text numberOfLines={2} style={styles.subRegistTitle}>
              Enter your Zwallet e-mail so we can send you a OTP code.
            </Text>
            <View
              style={{
                width: '100%',
                marginTop: 30,
              }}>
              <InputEmail />
            </View>
          </View>
        </Content>
      ) : null}
      {step === 2 ? (
        <>
          <InputOTP openModal={handleShowModal} />
        </>
      ) : null}
      {step === 3 ? (
        <Content>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Zwallet</Text>
          </View>

          <View style={styles.containerForm}>
            <Text style={styles.regist}>Reset Password</Text>
            <Text numberOfLines={2} style={styles.subRegistTitle}>
              Create and confirm your new password so you can login to Zwallet.
            </Text>
            <View
              style={{
                width: '100%',
                marginTop: 30,
              }}>
              <InputNewPassword />
            </View>
          </View>
        </Content>
      ) : null}
      <Modal closeModal={handleCloseModal} isShow={modal} />
    </>
  );
};

export default Index;

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
