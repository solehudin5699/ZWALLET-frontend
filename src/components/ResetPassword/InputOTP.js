import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Content, Footer, FooterTab, Button} from 'native-base';
// import CreateSuccess from './CreateSuccess';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useNavigation} from '@react-navigation/native';
import {checkOTPAPICreator} from '../../redux/actions/auth';
import {getUserInfoAPICreator} from '../../redux/actions/auth';

const InputOTP = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState();
  const [error, setError] = useState(false);
  const {
    dataLogin,
    dataReq,
    statusReq,
    dataOTP,
    errorOTP,
    isOTPPending,
    statusOTP,
  } = useSelector((state) => state.authAPI);
  const checkPin = (otp) => {
    let token = dataReq.token;
    let data = new FormData();
    data.append('otp', otp);
    dispatch(checkOTPAPICreator(data, token));
  };
  useEffect(() => {
    if (Number(statusOTP) === 500) {
      setError(true);
    }
  }, [statusOTP]);
  useEffect(() => {
    if (Number(statusReq) === 200) {
      props.openModal();
    }
  }, [statusReq]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setError(false);
    });
    return unsubscribe;
  }, [navigation, dispatch]);

  return (
    <>
      <Content>
        <View style={styles.containerForm}>
          <Text style={styles.createPin}>Enter OTP Code</Text>
          <Text numberOfLines={2} style={styles.subCreatePinTitle}>
            Enter 6 digits OTP for confirmation reset password.
          </Text>
          <Text style={{alignSelf: 'center', color: 'red', fontSize: 20}}>
            {error ? 'INCORRECT OTP!' : null}
          </Text>
          {isOTPPending ? (
            <ActivityIndicator animating size="large" color="#6379F4" />
          ) : null}
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
                  borderColor: Number(otp).toString()[5]
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
                value={otp}
                onTextChange={(otp) => {
                  setOtp(otp);
                }}
                onFulfill={(otp) => {
                  checkPin(otp);
                }}
              />
            </View>
          </View>
        </View>
      </Content>

      {/* <View>
        <Button
          disabled={Number(pin).toString()[5] && isPinTrue ? false : true}
          onPress={() => {
            transferNow();
            // navigation.navigate('StatusTransfer');
          }}
          style={
            Number(pin).toString()[5] && isPinTrue
              ? styles.buttonActive
              : styles.buttonInactive
          }>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 'bold',
              width: '100%',
              textAlign: 'center',
            }}>
            Continue
          </Text>
        </Button>
      </View> */}
    </>
  );
};

export default InputOTP;

const styles = StyleSheet.create({
  containerTitle: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#6379F4', fontSize: 26, fontWeight: 'bold'},
  containerForm: {
    flex: 1,
    // backgroundColor: 'rgba(99, 121, 244, 0.2)',
    // borderTopStartRadius: 30,
    // borderTopEndRadius: 30,
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
