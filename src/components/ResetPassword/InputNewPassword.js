import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {updateUserAPICreator} from '../../redux/actions/auth';

const SignupSchema = Yup.object().shape({
  password: Yup.string().min(8, 'Minimun length of 8').required('Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Minimun length of 8')
    .required('Required'),
});

const InputNewPassword = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isNewPasswordSecure, setNewPasswordSecure] = useState(true);
  const [isRepeatPasswordSecure, setRepeatPasswordSecure] = useState(true);
  const handleNewPassword = () => {
    let secure = !isNewPasswordSecure;
    setNewPasswordSecure(secure);
  };
  const handleRepeatPassword = () => {
    let secure = !isRepeatPasswordSecure;
    setRepeatPasswordSecure(secure);
  };
  const {dataReq, dataOTP, isUpdatePending, statusUpdate} = useSelector(
    (state) => state.authAPI,
  );

  return (
    <>
      <Formik
        inputContainerStyle={{height: '100%', backgroundColor: 'blue'}}
        style={{height: '100%', backgroundColor: 'blue'}}
        initialValues={{
          password: '',
          confirm_password: '',
        }}
        //Will submit if not error
        onSubmit={(values) => {
          let data = new FormData();
          data.append('password', values.password);
          data.append('otp', dataOTP.otp);
          dispatch(
            updateUserAPICreator(Number(dataReq.user_id), data, dataReq.token),
          );
          // dispatch(dataFormRegistCreator(body));
          // navigation.navigate('CreatePin');
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
                secureTextEntry={isNewPasswordSecure ? true : false}
                placeholder="Create new password"
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
                    onPress={() => handleNewPassword()}
                    name="eye-off"
                    size={22}
                    color="rgba(169, 169, 169, 0.8)"
                    type="feather"
                  />
                }
              />
              <Input
                inputContainerStyle={{
                  borderBottomColor:
                    values.confirm_password && !errors.confirm_password
                      ? '#6379F4'
                      : null,
                }}
                onChangeText={handleChange('confirm_password')}
                onBlur={handleBlur('confirm_password')}
                value={values.confirm_password}
                touched={touched.confirm_password}
                errorMessage={
                  touched.confirm_password && errors.confirm_password
                    ? errors.confirm_password
                    : null
                }
                secureTextEntry={isRepeatPasswordSecure ? true : false}
                placeholder="Confirm new password"
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={
                      values.confirm_password && !errors.confirm_password
                        ? '#6379F4'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="feather"
                  />
                }
                rightIcon={
                  <Icon
                    onPress={() => handleRepeatPassword()}
                    name="eye-off"
                    size={22}
                    color="rgba(169, 169, 169, 0.8)"
                    type="feather"
                  />
                }
              />
              <Text style={{alignSelf: 'center', color: 'red', fontSize: 20}}>
                {statusUpdate === 500 ? 'Please try again!' : null}
              </Text>
              <Text
                style={{alignSelf: 'center', color: '#6379F4', fontSize: 20}}>
                {statusUpdate === 200 ? 'Password has been changed' : null}
              </Text>
              {isUpdatePending ? (
                <ActivityIndicator animating size="large" color="#6379F4" />
              ) : null}
              {statusUpdate === 200 ? (
                <View style={styles.containerButton}>
                  <Button
                    onPress={() => navigation.navigate('Login')}
                    style={styles.buttonActive}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Go to Login
                    </Text>
                  </Button>
                </View>
              ) : null}
              {statusUpdate === 500 ? (
                <View style={styles.containerButton}>
                  <Button
                    onPress={() => navigation.navigate('ResetPassword')}
                    style={styles.buttonActive}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Try Again
                    </Text>
                  </Button>
                </View>
              ) : null}
              {statusUpdate !== 200 && statusUpdate !== 500 ? (
                <View style={styles.containerButton}>
                  <Button onPress={handleSubmit} style={styles.buttonActive}>
                    <Text style={{color: '#ffffff', fontSize: 20}}>
                      Reset Password
                    </Text>
                  </Button>
                </View>
              ) : null}
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default InputNewPassword;

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,

    // position: 'relative',
  },
  containerButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    // marginTop: 50,
    bottom: 0,
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
