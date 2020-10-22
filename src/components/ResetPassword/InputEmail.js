import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  requestResetAPICreator,
  resetStatusUpdateCreator,
} from '../../redux/actions/auth';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

const InputEmail = (props) => {
  const {statusReq, isReqPending, dataReq, errorReq} = useSelector(
    (state) => state.authAPI,
  );
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Number(statusReq) === 500) {
      setError(true);
    }
  }, [statusReq]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(resetStatusUpdateCreator());
      setError(false);
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  return (
    <>
      <Formik
        inputContainerStyle={{height: '100%', backgroundColor: 'blue'}}
        style={{height: '100%', backgroundColor: 'blue'}}
        initialValues={{
          email: '',
        }}
        //Will submit if not error
        onSubmit={(values) => {
          let data = {
            email: values.email,
          };
          // console.log(values);
          dispatch(requestResetAPICreator(data));
          setError(false);
          // console.log(body);
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
                keyboardType="email-address"
                inputContainerStyle={{
                  borderBottomColor:
                    values.email && !errors.email ? '#6379F4' : null,
                }}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched.email}
                errorMessage={
                  touched.email && errors.email ? errors.email : null
                }
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
              {isReqPending ? (
                <ActivityIndicator animating size="large" color="#6379F4" />
              ) : null}
              <Text style={{alignSelf: 'center', color: 'red', fontSize: 15}}>
                {error
                  ? errorReq
                    ? errorReq.msg
                    : 'Something is wrong'
                  : null}
              </Text>
              <View style={styles.containerButton}>
                <Button onPress={handleSubmit} style={styles.buttonActive}>
                  <Text style={{color: '#ffffff', fontSize: 20}}>Confirm</Text>
                </Button>
              </View>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default InputEmail;

const styles = StyleSheet.create({
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    // marginTop: 220,

    // position: 'relative',
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
