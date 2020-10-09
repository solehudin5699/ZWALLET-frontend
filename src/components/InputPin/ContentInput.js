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
import {
  addTransactionAPICreator,
  setResetCreator,
} from '../../redux/actions/transaction';
import {getUserInfoAPICreator} from '../../redux/actions/auth';

const ContentInput = (props) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState();
  const [isPinTrue, setPinStatus] = useState(true);
  const {dataLogin} = useSelector((state) => state.authAPI);
  const checkPin = (pin) => {
    let status = Boolean(Number(dataLogin.pin).toString() === pin.toString());
    console.log(status);
    return setPinStatus(status);
  };
  const {statusAdd, isAddPending} = useSelector((state) => state.transaction);
  const dispatch = useDispatch();
  const transferNow = () => {
    let data = {
      id_sender: Number(dataLogin.user_id),
      id_receiver: Number(props.receiverDetail.user_id),
      username_sender: dataLogin.username,
      username_receiver: props.receiverDetail.username,
      name_sender: dataLogin.name,
      name_receiver: props.receiverDetail.name,
      image_sender: dataLogin.image,
      image_receiver: props.receiverDetail.image,
      nominal: Number(props.receiverDetail.nominal),
      type_transaction: 'Transfer',
      notes: props.receiverDetail.notes,
    };
    dispatch(addTransactionAPICreator(data));
  };

  useEffect(() => {
    if (Number(statusAdd) === 200) {
      dispatch(getUserInfoAPICreator(Number(dataLogin.user_id)));
      let receiverDetail = {...props.receiverDetail};
      navigation.navigate('StatusTransfer', receiverDetail);
      // dispatch(setResetCreator());
    } else if (Number(statusAdd) === 500) {
      navigation.navigate('StatusTransfer', receiverDetail);
      // dispatch(setResetCreator());
    }
  }, [dispatch, statusAdd]);
  return (
    <>
      <Content>
        <View style={styles.containerForm}>
          <Text style={styles.createPin}>Enter PIN to Transfer</Text>
          <Text numberOfLines={2} style={styles.subCreatePinTitle}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
          </Text>
          <Text style={{alignSelf: 'center', color: 'red', fontSize: 20}}>
            {isPinTrue ? null : 'INCORECT PIN!'}
          </Text>
          {isAddPending ? (
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
                onTextChange={(pin) => {
                  setPin(pin);
                }}
                onFulfill={(pin) => {
                  checkPin(pin);
                }}
              />
            </View>
          </View>
        </View>
      </Content>

      <View>
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
            Transfer Now
          </Text>
        </Button>
      </View>
    </>
  );
};

export default ContentInput;

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
