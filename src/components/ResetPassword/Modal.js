import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import Modal from 'react-native-modal';
// import {useDispatch, useSelector} from 'react-redux';
// import {Icon} from 'react-native-elements';
// import {modalEditImageProfileAction} from '../../redux/actions/modal';
// import {resetStatusUpdateCreator} from '../../redux/actions/auth';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalConfirm = (props) => {
  // const {isUpdatePending, statusUpdate} = useSelector((state) => state.authAPI);
  // const {modalEditImageProfile} = useSelector((state) => state.modals);
  // const [status, setStatus] = useState();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (Number(statusUpdate) === 200) {
  //     setStatus(1);
  //     setTimeout(() => {
  //       dispatch(resetStatusUpdateCreator());
  //       dispatch(modalEditImageProfileAction(false));
  //       setStatus(null);
  //     }, 1500);
  //   } else if (Number(statusUpdate) === 500) {
  //     setStatus(0);
  //     setTimeout(() => {
  //       dispatch(resetStatusUpdateCreator());
  //       dispatch(modalEditImageProfileAction(false));
  //       setStatus(null);
  //     }, 1500);
  //   }
  // }, [dispatch, statusUpdate]);
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
      backdropOpacity={0.1}
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
    // </View>
  );
};

export default ModalConfirm;
