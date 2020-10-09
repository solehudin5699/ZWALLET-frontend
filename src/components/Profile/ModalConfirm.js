import React, {useState, useEffect} from 'react';
import {Text, View, Dimensions, ActivityIndicator} from 'react-native';
import {Button} from 'native-base';
import Modal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {modalEditImageProfileAction} from '../../redux/actions/modal';
import {resetStatusUpdateCreator} from '../../redux/actions/auth';

const window = Dimensions.get('window');
const width = window.width * window.scale;
const height = window.height * window.scale;

const ModalConfirm = (props) => {
  const {isUpdatePending, statusUpdate} = useSelector((state) => state.authAPI);
  const {modalEditImageProfile} = useSelector((state) => state.modals);
  const [status, setStatus] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Number(statusUpdate) === 200) {
      setStatus(1);
      setTimeout(() => {
        dispatch(resetStatusUpdateCreator());
        dispatch(modalEditImageProfileAction(false));
        setStatus(null);
      }, 1500);
    } else if (Number(statusUpdate) === 500) {
      setStatus(0);
      setTimeout(() => {
        dispatch(resetStatusUpdateCreator());
        dispatch(modalEditImageProfileAction(false));
        setStatus(null);
      }, 1500);
    }
  }, [dispatch, statusUpdate]);
  return (
    <Modal
      animationIn="slideInUp"
      animationOut="slideOutDown"
      deviceWidth={width}
      deviceHeight={height}
      coverScreen={true}
      isVisible={modalEditImageProfile}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,
      }}
      backdropOpacity={0.1}
      onBackButtonPress={() => {
        dispatch(modalEditImageProfileAction(false));
      }}
      onBackdropPress={() => {
        dispatch(modalEditImageProfileAction(false));
      }}
      onSwipeComplete={() => {
        dispatch(modalEditImageProfileAction(false));
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
            Apply now ?
          </Text>
          {status === 1 ? (
            <>
              <View style={{width: '95%', marginTop: 20, alignItems: 'center'}}>
                <Icon
                  reverse
                  name="check"
                  type="material"
                  color="#1EC15F"
                  size={25}
                />
                <Text style={{fontSize: 15}}>Success Updating Profile</Text>
              </View>
            </>
          ) : null}
          {status === 0 ? (
            <View style={{width: '100%', marginTop: 20, alignItems: 'center'}}>
              <Icon
                reverse
                name="close"
                type="material"
                color="#FF5B37"
                size={25}
              />
              <Text style={{fontSize: 15}}>Failed Updating Profile</Text>
            </View>
          ) : null}
          {isUpdatePending ? (
            <ActivityIndicator animating size="large" color="#6379F4" />
          ) : null}
        </View>
        {status === 1 || status === 0 ? null : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
              marginTop: 30,
            }}>
            <Button
              transparent
              // rounded
              onPress={() => {
                dispatch(modalEditImageProfileAction(false));
                props.handleCancel();
              }}
              style={{
                width: '20%',
                marginRight: 1,
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 15, color: '#4D4B57'}}>Cancel</Text>
            </Button>
            <Button
              transparent
              onPress={() => {
                dispatch(modalEditImageProfileAction(false));
                props.handleSelect();
              }}
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                borderRadius: 10,
                marginRight: 1,
              }}>
              <Text style={{fontSize: 15, color: '#4D4B57'}}>Change</Text>
            </Button>
            <Button
              transparent
              onPress={() => {
                props.handleSubmit();
              }}
              style={{
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 30,
                borderRadius: 10,
              }}>
              <Text style={{fontSize: 15, color: '#4D4B57'}}>Yes</Text>
            </Button>
          </View>
        )}
      </View>
    </Modal>
    // </View>
  );
};

export default ModalConfirm;
