import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  registrationAPICreator,
  resetStatusRegistCreator,
} from '../../redux/actions/auth';

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, 'Minimun length of 4')
    .max(12, 'Max length of 12')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(8, 'Minimun length of 8').required('Required'),
});

const FormRegister = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isSecure, setSecure] = useState(true);
  const [error, setError] = useState(false);
  const handleSecure = () => {
    let secure = !isSecure;
    setSecure(secure);
  };
  const {isRegistPending, statusRegist, errorRegist} = useSelector(
    (state) => state.authAPI,
  );
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(resetStatusRegistCreator());
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  useEffect(() => {
    if (Number(statusRegist) === 200) {
      navigation.navigate('CreatePin');
    } else if (Number(statusRegist) === 500) {
      setError(true);
    }
  }, [statusRegist]);
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let body = {
          username: values.username,
          email: values.email,
          password: values.password,
        };
        console.log(values);
        // dispatch(dataFormRegistCreator(body));
        dispatch(registrationAPICreator(body));
      }}
      validationSchema={SignupSchema}>
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
            {isRegistPending ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating size="large" color="#6379F4" />
              </View>
            ) : null}
            {/* {Number(statusRegist) === 500 && !isRegistPending ? ( */}
            <View
              style={{
                width: '100%',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 19, color: 'red'}}>
                {Number(statusRegist) === 500 && !isRegistPending
                  ? errorRegist
                    ? errorRegist.msg
                    : 'Something is wrong'
                  : null}
              </Text>
            </View>
            {/* ) : null} */}
            <Input
              inputContainerStyle={{
                borderBottomColor:
                  values.username && !errors.username ? '#6379F4' : null,
              }}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              touched={touched.username}
              errorMessage={
                touched.username && errors.username ? errors.username : null
              }
              placeholder="Enter your username"
              leftIcon={
                <Icon
                  name="user"
                  size={22}
                  color={
                    values.username && !errors.username
                      ? '#6379F4'
                      : 'rgba(169, 169, 169, 0.8)'
                  }
                  type="antdesign"
                />
              }
            />
            <Input
              keyboardType="email-address"
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
                  values.password && errors.password ? '#6379F4' : null,
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

            <View style={styles.containerButton}>
              <Button
                style={
                  values.username &&
                  values.email &&
                  values.password &&
                  !errors.username &&
                  !errors.email &&
                  !errors.password
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                onPress={handleSubmit}
                // onPress={() => navigation.navigate('CreatePin')}
                // disabled={false}
                disabled={values.email && values.password ? false : true}>
                <Text style={{color: '#ffffff', fontSize: 20}}>Sign Up</Text>
              </Button>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                marginRight: 20,
                lineHeight: 23,
                fontSize: 16,
              }}>
              Already have an account? Let's{' '}
              <Text
                style={{color: '#6379F4'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </>
        );
      }}
    </Formik>
  );
};

export default FormRegister;

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
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
