import React from 'react';
import {Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';
import Modal from 'react-native-modal';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalConfirm = (props) => {
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
        props.closeModal();
      }}
      onBackdropPress={() => {
        props.closeModal();
      }}
      onSwipeComplete={() => {
        props.closeModal();
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
            OTP code has been sent to your email, please check it!
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
              props.closeModal();
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

export default ModalConfirm;
