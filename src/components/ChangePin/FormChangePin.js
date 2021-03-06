import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
import {useSelector} from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import NewPin from './NewPin';

const FormChangePin = () => {
  // const navigation = useNavigation();
  const [pin, setPin] = useState();
  const [isPinTrue, setPinStatus] = useState(true);
  const [next, setNext] = useState(false);
  const {dataLogin} = useSelector((state) => state.authAPI);
  const checkPin = (pin) => {
    let status = Boolean(Number(dataLogin.pin).toString() === pin.toString());
    // console.log(status);
    return setPinStatus(status);
  };
  return (
    <>
      {next ? (
        <NewPin />
      ) : (
        <Content>
          <View
            style={{
              width: '100%',
              marginTop: 30,
              height: Dimensions.get('window').height,
            }}>
            <Text
              style={{
                color: '#7A7886',
                fontSize: 16,
                alignSelf: 'center',
                paddingHorizontal: 20,
                textAlign: 'justify',
                marginTop: 15,
              }}>
              Enter your current 6 digits Zwallet PIN below to continue to the
              next steps.
            </Text>
            <Text style={{alignSelf: 'center', color: 'red', fontSize: 20}}>
              {isPinTrue ? null : 'INCORECT PIN!'}
            </Text>
            <View
              style={{
                // flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <SmoothPinCodeInput
                // password
                placeholder="_"
                restrictToNumbers
                cellStyle={{
                  borderColor: Number(pin).toString()[5]
                    ? '#6379F4'
                    : 'rgba(169, 169, 169, 0.6)',
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
                onFulfill={(pin) => {
                  checkPin(pin);
                }}
              />
            </View>
          </View>
        </Content>
      )}

      {next ? null : (
        <Button
          onPress={() => setNext(true)}
          disabled={Number(pin).toString()[5] && isPinTrue ? false : true}
          style={
            Number(pin).toString()[5] && isPinTrue
              ? styles.buttonActive
              : styles.buttonInactive
          }>
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
            Continue
          </Text>
        </Button>
      )}
    </>
  );
};

export default FormChangePin;

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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
});
