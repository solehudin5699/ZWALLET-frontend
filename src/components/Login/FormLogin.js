import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  loginAPICreator,
  resetStatusLoginCreator,
} from '../../redux/actions/auth';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimun length of 8').required('Required'),
});

const FormLogin = () => {
  const navigation = useNavigation();
  const {statusLogin, isLoginPending} = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();
  const [isSecure, setSecure] = useState(true);
  const handleSecure = () => {
    let secure = !isSecure;
    setSecure(secure);
  };
  useEffect(() => {
    if (Number(statusLogin) === 200) {
      navigation.navigate('Home');
    } else if (Number(statusLogin) === 500) {
      navigation.navigate('Login');
      // setError(true);
      // setTimeout(() => {
      //   dispatch(resetStatusLoginCreator());
      // }, 5000);
    }
  }, [statusLogin]);
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let body = {
          email: values.email,
          password: values.password,
        };
        // console.log(values);
        dispatch(loginAPICreator(body));
      }}
      validationSchema={SigninSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isSubmitting,
      }) => {
        // console.log(touched);
        // console.log({...values});
        // console.log({...errors});
        return (
          <>
            <Input
              inputContainerStyle={{
                borderBottomColor:
                  values.email && !errors.email ? '#6379F4' : null,
              }}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              touched={touched.email}
              errorMessage={touched.email && errors.email ? errors.email : null}
              placeholder="Enter your e-mail"
              leftIcon={
                <Icon
                  name="email"
                  size={22}
                  color={
                    values.email && !errors.email
                      ? '#6379F4'
                      : 'rgba(169, 169, 169, 0.8)'
                  }
                  type="fontisto"
                />
              }
            />
            <Input
              inputContainerStyle={{
                borderBottomColor:
                  values.password && !errors.password ? '#6379F4' : null,
              }}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              touched={touched.password}
              errorMessage={
                touched.password && errors.password ? errors.password : null
              }
              secureTextEntry={isSecure ? true : false}
              placeholder="Enter your password"
              leftIcon={
                <Icon
                  name="lock"
                  size={22}
                  color={
                    values.password && !errors.password
                      ? '#6379F4'
                      : 'rgba(169, 169, 169, 0.8)'
                  }
                  type="feather"
                />
              }
              rightIcon={
                <Icon
                  onPress={() => handleSecure()}
                  name="eye-off"
                  size={22}
                  color="rgba(169, 169, 169, 0.8)"
                  type="feather"
                />
              }
            />
            <Text
              // onPress={() => setSecure(!isSecure)}
              style={{alignSelf: 'flex-end', marginRight: 20}}>
              Forgot Password?
            </Text>
            <View style={styles.containerButton}>
              <Button
                style={
                  values.email &&
                  values.password &&
                  !errors.email &&
                  !errors.password
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                onPress={handleSubmit}
                // onPress={() => navigation.navigate('Home')}
                // disabled={false}
                disabled={
                  values.email &&
                  values.password &&
                  !errors.email &&
                  !errors.password
                    ? false
                    : true
                }>
                <Text style={{color: '#ffffff', fontSize: 20}}>Login</Text>
              </Button>
            </View>
            <Text style={{alignSelf: 'center', marginRight: 20}}>
              Don't have an account? Let's{' '}
              <Text
                style={{color: '#6379F4'}}
                onPress={() => navigation.navigate('Register')}>
                Sign Up
              </Text>
            </Text>
          </>
        );
      }}
    </Formik>
  );
};

export default FormLogin;

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    marginBottom: 30,
    // padding: 20,
  },
  buttonActive: {
    width: '95%',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
