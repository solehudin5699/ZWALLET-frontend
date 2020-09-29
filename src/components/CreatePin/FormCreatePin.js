import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
import CreateSuccess from './CreateSuccess';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {registrationAPICreator} from '../../redux/actions/auth';

const FormCreatePin = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState();
  const dispatch = useDispatch();
  const {formRegist, statusRegist} = useSelector((state) => state.authAPI);
  const registration = () => {
    let body = {...formRegist, pin: Number(pin)};
    dispatch(registrationAPICreator(body));
    console.log(body);
  };
  useEffect(() => {
    if (Number(statusRegist) === 200) {
      navigation.navigate('CreateSuccess');
    }
  }, [statusRegist]);
  return (
    <>
      <Content>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Zwallet</Text>
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.createPin}>Create Security PIN</Text>
          <Text numberOfLines={2} style={styles.subCreatePinTitle}>
            Create a PIN that’s contain 6 digits number for security purpose in
            Zwallet.
          </Text>
          <View
            style={{
              width: '100%',
              marginTop: 30,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}>
              <SmoothPinCodeInput
                // password
                placeholder="_"
                restrictToNumbers
                cellStyle={{
                  borderColor: Number(pin).toString()[5]
                    ? '#6379F4'
                    : '#DADADA',
                  borderWidth: 1,
                  borderRadius: 10,
                  width: 45,
                }}
                cellSpacing={10}
                cellStyleFocused={{
                  borderColor: '#6379F4',
                }}
                textStyle={{color: 'black', fontSize: 20}}
                textStyleFocused={{color: 'black', fontSize: 20}}
                cellSize={50}
                codeLength={6}
                value={pin}
                onTextChange={(pin) => setPin(pin)}
                // onFulfill={() => console.log(password)}
              />
            </View>
          </View>
        </View>
      </Content>
      {/* <CreateSuccess /> */}
      <View style={{backgroundColor: '#FFFFFF'}}>
        <Button
          onPress={() => registration()}
          style={
            Number(pin).toString()[5]
              ? styles.buttonActive
              : styles.buttonInactive
          }>
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
            Confirm
          </Text>
        </Button>
      </View>
    </>
  );
};

export default FormCreatePin;

const styles = StyleSheet.create({
  containerTitle: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#6379F4', fontSize: 26, fontWeight: 'bold'},
  containerForm: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
    // marginTop: '20%',
    // flexDirection: 'column',
    height: Dimensions.get('window').height,
  },
  createPin: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#3A3D42',
  },
  subCreatePinTitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
    width: '70%',
    color: 'rgba(58, 61, 66, 0.6)',
    marginTop: 20,
  },
  buttonActive: {
    width: '95%',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
});
