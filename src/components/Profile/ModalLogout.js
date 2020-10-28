import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {logoutCreator} from '../../redux/actions/auth';
import {resetSocketCreator} from '../../redux/actions/socket';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import Modal from 'react-native-modal';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalLogout = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const clearAppData = async function () {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  };
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      deviceWidth={width}
      deviceHeight={height}
      coverScreen={true}
      isVisible={props.isShow}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
      backdropOpacity={0.3}
      onBackButtonPress={() => {
        props.handleCloseModal();
      }}
      onBackdropPress={() => {
        props.handleCloseModal();
      }}
      onSwipeComplete={() => {
        props.handleCloseModal();
      }}
      swipeDirection="down"
      // propagateSwipe
      backdropTransitionOutTiming={0}
      backdropTransitionInTiming={0}>
      <View
        style={{
          backgroundColor: '#ffffff',
          width: '90%',
          padding: 10,
          justifyContent: 'flex-end',
          borderColor: '#CBE15A',
          borderRadius: 3,
        }}>
        <View style={{marginTop: 5, padding: 5}}>
          <Text
            style={{
              fontSize: 18,
              color: '#6379F4',
            }}>
            Are you sure to logout?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            width: '100%',
            marginTop: 30,
          }}>
          <Button
            transparent
            onPress={() => {
              props.handleCloseModal();
            }}
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 15, color: '#4D4B57'}}>CANCEL</Text>
          </Button>
          <Button
            transparent
            onPress={() => {
              props.handleCloseModal();
              dispatch(logoutCreator());
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Login',
                  },
                ],
              });
              dispatch(resetSocketCreator());
              clearAppData();
            }}
            style={{
              width: '20%',
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 15, color: '#4D4B57'}}>OK</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLogout;
