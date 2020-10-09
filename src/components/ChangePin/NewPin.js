import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import {Container, Content, Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {
  updateUserAPICreator,
  resetStatusUpdateCreator,
} from '../../redux/actions/auth';

const FormNewPin = () => {
  const navigation = useNavigation();
  const [pin, setPin] = useState();
  const [isSuccess, setSuccess] = useState(null);
  const {dataLogin, statusUpdate, isUpdatePending} = useSelector(
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
    <>
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
            Type your new 6 digits security PIN to use in Zwallet.
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
            />
            {isSuccess === 1 ? (
              <>
                <View
                  style={{width: '100%', marginTop: 20, alignItems: 'center'}}>
                  <Icon
                    reverse
                    name="check"
                    type="material"
                    color="#1EC15F"
                    size={25}
                  />
                  <Text style={{fontSize: 15}}>Success Updating PIN</Text>
                </View>
              </>
            ) : null}
            {isSuccess === 0 ? (
              <View
                style={{width: '100%', marginTop: 20, alignItems: 'center'}}>
                <Icon
                  reverse
                  name="close"
                  type="material"
                  color="#FF5B37"
                  size={25}
                />
                <Text style={{fontSize: 15}}>Failed Updating PIN</Text>
              </View>
            ) : null}
            {isUpdatePending ? (
              <ActivityIndicator animating size="large" color="#6379F4" />
            ) : null}
          </View>
        </View>
      </Content>
      <Button
        disabled={Number(pin).toString()[5] ? false : true}
        onPress={() => {
          changePin();
          // navigation.navigate('StatusTransfer');
        }}
        style={
          Number(pin).toString()[5]
            ? styles.buttonActive
            : styles.buttonInactive
        }>
        <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
          Change PIN
        </Text>
      </Button>
    </>
  );
};

export default FormNewPin;

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
