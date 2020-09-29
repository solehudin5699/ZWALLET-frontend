import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  BackHandler,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Content} from 'native-base';
import FormLogin from '../components/Login/FormLogin';

const Login = () => {
  // const {statusLogin, isLoginPending} = useSelector((state) => state.authAPI);
  // const dispatch = useDispatch();
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(
    () => {
      BackHandler.addEventListener('hardwareBackPress', backAction);
      // if (Number(statusLogin) === 200) {
      //   navigation.navigate('BottomTab', {screen: 'Home'});
      // } else if (Number(statusLogin) === 500) {
      //   navigation.navigate('Login');
      //   setError(true);

      //   setTimeout(() => {
      //     dispatch(resetStatusLoginCreator());
      //   }, 5000);
      // }
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', backAction);
    },
    [
      // dispatch,
      //  statusLogin
    ],
  );
  // setTimeout(setError(false), 1000);
  return (
    <Container
      style={{
        backgroundColor: 'rgba(99, 121, 244, 0.2)',
      }}>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <Content>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Zwallet</Text>
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.login}>Login</Text>
          <Text numberOfLines={2} style={styles.subLoginTitle}>
            Login to your existing account to access all the features in
            Zwallet.
          </Text>
          <View
            style={{
              width: '100%',
              marginTop: 30,
            }}>
            <FormLogin />
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Login;

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
  login: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: '700',
    color: '#3A3D42',
  },
  subLoginTitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
    width: '70%',
    color: 'rgba(58, 61, 66, 0.6)',
  },
});
