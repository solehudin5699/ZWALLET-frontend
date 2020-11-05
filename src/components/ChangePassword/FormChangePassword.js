import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Button, Content} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  updateUserAPICreator,
  resetStatusUpdateCreator,
} from '../../redux/actions/auth';

const SigninSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(8, 'Minimun length of 8')
    .required('Required'),
  password: Yup.string().min(8, 'Minimun length of 8').required('Required'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .min(8, 'Minimun length of 8')
    .required('Required'),
});

const FormChangePassword = () => {
  const navigation = useNavigation();
  const [isCurrentPasswordSecure, setCurrentPasswordSecure] = useState(true);
  const [isNewPasswordSecure, setNewPasswordSecure] = useState(true);
  const [isRepeatPasswordSecure, setRepeatPasswordSecure] = useState(true);
  const handleCurrentPassword = () => {
    let secure = !isCurrentPasswordSecure;
    setCurrentPasswordSecure(secure);
  };
  const handleNewPassword = () => {
    let secure = !isNewPasswordSecure;
    setNewPasswordSecure(secure);
  };
  const handleRepeatPassword = () => {
    let secure = !isRepeatPasswordSecure;
    setRepeatPasswordSecure(secure);
  };

  const [isSuccess, setSuccess] = useState(null);
  const {dataLogin, statusUpdate, isUpdatePending, errorUpdate} = useSelector(
    (state) => state.authAPI,
  );
  const dispatch = useDispatch();
  const changePin = () => {
    let data = new FormData();
    data.append('pin', pin);
    dispatch(updateUserAPICreator(Number(dataLogin.user_id), data));
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(resetStatusUpdateCreator());
    });

    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    if (Number(statusUpdate) === 200) {
      setSuccess(1);
    } else if (Number(statusUpdate) === 500) {
      setSuccess(0);
    }
  }, [dispatch, statusUpdate]);
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        password: '',
        confirm_password: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let data = new FormData();
        data.append('password', values.currentPassword);
        data.append('newPassword', values.password);
        dispatch(
          updateUserAPICreator(
            Number(dataLogin.user_id),
            data,
            dataLogin.token,
          ),
        );
        // console.log(values);
        // dispatch(loginAPICreator(body));
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
            {isSuccess === 1 ? (
              <>
                <View
                  style={{
                    width: '100%',
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Icon
                    reverse
                    name="check"
                    type="material"
                    color="#1EC15F"
                    size={25}
                  />
                  <Text style={{fontSize: 15}}>Success Updating Password</Text>
                </View>
              </>
            ) : null}
            {isSuccess === 0 ? (
              <View
                style={{
                  width: '100%',
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon
                  reverse
                  name="close"
                  type="material"
                  color="#FF5B37"
                  size={25}
                />
                <Text style={{fontSize: 15}}>Failed Change Password</Text>
              </View>
            ) : null}
            {isUpdatePending ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator animating size="large" color="#6379F4" />
              </View>
            ) : null}
            <Content>
              <Input
                inputContainerStyle={{
                  borderBottomColor: values.currentPassword ? '#6379F4' : null,
                }}
                onChangeText={handleChange('currentPassword')}
                onBlur={handleBlur('currentPassword')}
                value={values.currentPassword}
                touched={touched.currentPassword}
                errorMessage={
                  touched.currentPassword && errors.currentPassword
                    ? errors.currentPassword
                    : null
                }
                secureTextEntry={isCurrentPasswordSecure ? true : false}
                placeholder="Current password"
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={
                      values.currentPassword
                        ? '#6379F4'
                        : 'rgba(169, 169, 169, 0.8)'
                    }
                    type="feather"
                  />
                }
                rightIcon={
                  <Icon
                    onPress={() => handleCurrentPassword()}
                    name="eye-off"
                    size={22}
                    color="rgba(169, 169, 169, 0.8)"
                    type="feather"
                  />
                }
              />
              <Input
                inputContainerStyle={{
                  borderBottomColor: values.password ? '#6379F4' : null,
                }}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched.password}
                errorMessage={
                  touched.password && errors.password ? errors.password : null
                }
                secureTextEntry={isNewPasswordSecure ? true : false}
                placeholder="New Password"
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={
                      values.password ? '#6379F4' : 'rgba(169, 169, 169, 0.8)'
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
                  borderBottomColor: values.confirm_password ? '#6379F4' : null,
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
                placeholder="Repeat Password"
                leftIcon={
                  <Icon
                    name="lock"
                    size={22}
                    color={
                      values.confirm_password
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
            </Content>
            <View style={styles.containerButton}>
              <Button
                disabled={
                  !errors.currentPassword &&
                  !errors.password &&
                  !errors.confirm_password &&
                  values.currentPassword &&
                  values.password &&
                  values.confirm_password
                    ? false
                    : true
                }
                style={
                  !errors.currentPassword &&
                  !errors.password &&
                  !errors.confirm_password &&
                  values.currentPassword &&
                  values.password &&
                  values.confirm_password
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                onPress={handleSubmit}
                disabled={
                  values.currentPassword &&
                  values.password &&
                  values.confirm_password
                    ? false
                    : true
                }>
                <Text style={{color: '#ffffff', fontSize: 20}}>
                  Change Password
                </Text>
              </Button>
            </View>
          </>
        );
      }}
    </Formik>
  );
};

export default FormChangePassword;

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
  },
  buttonActive: {
    width: '95%',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonInactive: {
    alignSelf: 'center',
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
