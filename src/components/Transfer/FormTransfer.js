import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions, TextInput} from 'react-native';
import {Button} from 'native-base';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Input, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const SigninSchema = Yup.object().shape({
  notes: Yup.string().min(0).max(20, 'Max 20 characters').required(''),
  currency: Yup.number().max(999999999999, 'Maximum 12 digit'),
});

const FormTranfer = () => {
  const navigation = useNavigation();
  const [isSecure, setSecure] = useState(true);
  const handleSecure = () => {
    let secure = !isSecure;
    setSecure(secure);
  };
  return (
    <Formik
      initialValues={{
        currency: null,
        notes: '',
      }}
      //Will submit if not error
      onSubmit={(values) => {
        let params = {
          currency: values.currency,
          notes: values.notes,
        };
        navigation.navigate('Confirmation');
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
            <Text style={{alignSelf: 'center', color: '#7C7895'}}>
              Rp. 120.000 Available
            </Text>
            <Input
              keyboardType="numeric"
              textAlign={'center'}
              inputContainerStyle={{
                borderBottomWidth: 0,
                justifyContent: 'center',
                alignItems: 'center',
                width: null,
              }}
              inputStyle={{
                textAlign: 'left',
                alignSelf: 'stretch',
                fontSize: 42,
                color: '#6379F4',
                fontWeight: 'bold',
                width: '20%',
              }}
              // placeholderTextColor="#6379F4"
              onChangeText={handleChange('currency')}
              onBlur={handleBlur('currency')}
              value={values.currency}
              touched={touched.currency}
              errorMessage={
                touched.currency || errors.currency ? errors.currency : null
              }
              placeholder="0.00"
            />
            <Input
              inputContainerStyle={{
                borderBottomColor: values.notes ? '#6379F4' : null,
              }}
              onChangeText={handleChange('notes')}
              onBlur={handleBlur('notes')}
              value={values.notes}
              touched={touched.notes}
              errorMessage={touched.notes || errors.notes ? errors.notes : null}
              placeholder="Add some notes"
              leftIcon={
                <Icon
                  name="edit-2"
                  size={22}
                  color={values.notes ? '#6379F4' : 'rgba(169, 169, 169, 0.8)'}
                  type="feather"
                />
              }
            />

            <View style={styles.containerButton}>
              <Button
                style={
                  values.currency && values.notes && !errors.length
                    ? styles.buttonActive
                    : styles.buttonInactive
                }
                onPress={handleSubmit}
                // disabled={false}
                disabled={
                  values.currency && values.notes && !errors.length
                    ? false
                    : true
                }>
                <Text style={{color: '#ffffff', fontSize: 20}}>Continue</Text>
              </Button>
            </View>
            {/* <Text
              onPress={() => alert('Haloo')}
              style={{alignSelf: 'center', marginRight: 20}}>
              Don't have an account? Let's{' '}
              <Text style={{color: '#6379F4'}}>Sign Up</Text>
            </Text> */}
          </>
        );
      }}
    </Formik>
  );
};

export default FormTranfer;

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
  container: {
    flex: 1,
  },
  mainPage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header1: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
  header2: {
    backgroundColor: '#000',
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
  },
  headerDesign: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    height: 20,
    justifyContent: 'center',
  },
  noteBody: {
    flex: 2,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    alignItems: 'center',
    marginBottom: 100,
  },
  textInput: {
    alignSelf: 'stretch',
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    color: '#000',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  addButton: {
    position: 'absolute',
    zIndex: 11,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    backgroundColor: '#0000FF',
    height: 40,
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  subject: {
    alignSelf: 'stretch',
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  calltype: {
    alignSelf: 'stretch',
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
});
