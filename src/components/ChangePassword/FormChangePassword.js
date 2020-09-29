import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';

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
  return (
    <Formik
      initialValues={{
        currentPassword: '',
        password: '',
        confirm_password: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let body = {
          // username: values.username,
          // email: values.email,
          password: values.password,
        };
        console.log(values);
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

            <View style={styles.containerButton}>
              <Button
                style={
                  !errors.currentPassword &&
                  !errors.password &&
                  !errors.confirm_password
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                onPress={handleSubmit}
                // disabled={false}
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
