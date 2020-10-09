import React, {useEffect} from 'react';
import {
  Image,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  Container,
  Title,
  Button,
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
  Content,
  Header,
  Card,
  CardItem,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {setResetCreator} from '../../redux/actions/transaction';
import {showLocalNotification} from '../NotifHandler/NotifHandler';
import PushNotification from 'react-native-push-notification';

const ContentStatus = (props) => {
  const channelId = 'status-transfer';
  const navigation = useNavigation();
  const {statusAdd} = useSelector((state) => state.transaction);
  const {dataLogin} = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  const handleNavigate = () => {
    if (Number(statusAdd) === 200) {
      navigation.navigate('Home');
      dispatch(setResetCreator());
    } else {
      navigation.navigate('Home');
      dispatch(setResetCreator());
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      PushNotification.createChannel(
        {
          channelId,
          channelName: 'transaction notification',
        },
        (created) => console.log(`createChannel returned '${created}'`),
      );
      if (Number(statusAdd) === 200) {
        let msg = `You has been success transfering `;
        showLocalNotification('Transfer', msg, channelId);
      } else if (Number(statusAdd) === 500) {
        showLocalNotification('Transfer', 'Transfer is failed!', channelId);
      }
    });

    return unsubscribe;
  }, [navigation, statusAdd]);
  // useEffect(() => {
  //   PushNotification.createChannel(
  //     {
  //       channelId,
  //       channelName: 'transaction notification',
  //     },
  //     (created) => console.log(`createChannel returned '${created}'`),
  //   );
  //   if (Number(statusAdd) === 200) {
  //     let toName;
  //     if (props.receiverDetail.name) {
  //       toName = `${props.receiverDetail.name}`;
  //     } else {
  //       toName = `${props.receiverDetail.username}`;
  //     }
  //     setTimeout(() => {
  //       showLocalNotification(
  //         'Transfer',
  //         `You has been success transfering to ${toName}`,
  //         channelId,
  //       );
  //     }, 1000);
  //   } else if (Number(statusAdd) === 500) {
  //     showLocalNotification('Transfer', 'Transfer is failed!', channelId);
  //   }
  // }, [statusAdd]);
  let monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const ex = new Date();
  const date = ex.getDate();
  const month = monthName[ex.getMonth()];
  const year = ex.getFullYear();
  const full = `${month} ${date}, ${year}`;
  return (
    <>
      <View style={styles.containerTitleDetails}>
        <Text style={styles.textDetails}>Details</Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        {/* AMOUNT */}
        <View style={styles.containerItemInfo}>
          <Text style={styles.titleInfo}>Amount</Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp{formatRupiah(Number(props.receiverDetail.nominal))}
          </Text>
        </View>

        {/* BALANCE */}
        <View style={styles.containerItemInfo}>
          <Text style={styles.titleInfo}>Balance Left</Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp{formatRupiah(Number(dataLogin.balance))}
          </Text>
        </View>

        {/* DATE TIME */}
        <View style={styles.containerItemInfo}>
          <Text style={styles.titleInfo}>Date & Time</Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {/* May 11, 2020 - 12.20 */}
            {full}
          </Text>
        </View>

        {/* NOTES */}
        <View style={styles.containerItemInfo}>
          <Text style={styles.titleInfo}>Notes</Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {props.receiverDetail.notes}
          </Text>
        </View>
        {/* TRANSFER TO */}
        <Text style={styles.transferTo}>Transfer to</Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.contentTransferToDetails}>
            <View style={styles.transferToDetails}>
              <View style={styles.containerImage}>
                {props.receiverDetail.image ? (
                  <Thumbnail
                    source={{
                      uri: `http://192.168.43.220:8000${props.receiverDetail.image}`,
                    }}
                    style={{width: 56, height: 56, borderRadius: 10}}
                  />
                ) : (
                  <View style={styles.containerIcon}>
                    <Icon
                      name="person-outline"
                      size={50}
                      color="#6379F4"
                      type="ionicons"
                    />
                  </View>
                )}
              </View>
              <View style={styles.containerReceiverInfo}>
                <Text style={styles.textName}>
                  {props.receiverDetail.name
                    ? props.receiverDetail.name
                    : props.receiverDetail.username}
                </Text>
                <Text style={{fontSize: 14, color: '#7A7886'}}>
                  {props.receiverDetail.noHp
                    ? props.receiverDetail.noHp
                    : 'Number phone is empty'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => {
            handleNavigate();
          }}
          style={styles.buttonActive}>
          <Text style={{color: '#ffffff', fontSize: 20}}>
            {Number(statusAdd) === 200 ? 'Back to Home' : 'Try Again'}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContentStatus;

const styles = StyleSheet.create({
  containerTitleDetails: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  textDetails: {
    fontSize: 18,
    color: '#514F5B',
    fontWeight: 'bold',
  },
  containerItemInfo: {
    flex: 1,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#FFFFFF',
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
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
  titleInfo: {
    fontSize: 16,
    color: '#7A7886',
    marginBottom: 1,
  },
  transferTo: {
    fontSize: 18,
    color: '#514F5B',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  contentTransferToDetails: {
    // backgroundColor: '#6379F4',
    margin: 0,
    flex: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
    // height: '100%',
    paddingBottom: 15,
    // paddingHorizontal: 15,
  },
  transferToDetails: {
    flex: 1,
    // marginBottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
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
  containerImage: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
  },
  containerReceiverInfo: {
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textName: {
    fontSize: 16,
    color: '#4D4B57',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    marginBottom: 30,
    paddingHorizontal: 15,
    // padding: 20,
  },
  buttonActive: {
    width: '100%',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
