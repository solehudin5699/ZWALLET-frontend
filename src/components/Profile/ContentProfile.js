import React, {useState} from 'react';
import {View, StyleSheet, Switch, Pressable, Text} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {notifCreator} from '../../redux/actions/transaction';
import ModalLogout from './ModalLogout';

const ContentProfile = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch();
  const {allowNotif} = useSelector((state) => state.transaction);
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => {
    setModal(false);
  };
  const handleShowModal = () => {
    setModal(true);
  };
  return (
    <>
      <View style={styles.container}>
        {/* Personal Information */}
        <Pressable
          onPress={() => navigation.navigate('PersonalInformation')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Personal Information</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Change Password */}
        <Pressable
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Change Password</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Change PIN */}
        <Pressable
          onPress={() => navigation.navigate('ChangePin')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Change PIN</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Notification */}
        <View style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Notification</Text>
          </View>
          <View style={styles.iconArrow}>
            <Switch
              style={{width: 50}}
              trackColor={{false: 'rgba(169, 169, 169, 0.4)', true: '#6379F4'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                toggleSwitch();
                dispatch(notifCreator(!allowNotif));
              }}
              value={allowNotif}
            />
          </View>
        </View>
        {/* Logout */}
        <Pressable
          onPress={() => {
            handleShowModal();
          }}
          style={styles.itemInformation}>
          <View style={{...styles.containerTitle, width: '100%'}}>
            <Text style={styles.infoTitle}>Logout</Text>
          </View>
        </Pressable>
      </View>
      <ModalLogout isShow={modal} handleCloseModal={handleCloseModal} />
    </>
  );
};

export default ContentProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemInformation: {
    // flex: 1,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#E5E8ED',
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0,0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 1,
  },
  containerTitle: {width: '75%'},
  infoTitle: {
    fontSize: 16,
    color: '#4D4B57',
    // marginBottom: 1,
    fontWeight: 'bold',
  },
  iconArrow: {
    width: '25%',
    alignItems: 'flex-end',
  },
});
