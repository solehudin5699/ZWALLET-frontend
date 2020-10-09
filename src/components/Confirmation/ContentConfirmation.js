import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  Container,
  Left,
  Right,
  Body,
  Thumbnail,
  Content,
  Header,
  Card,
  CardItem,
  Text,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ContentConfirmation = (props) => {
  let dataReceiver = {...props.receiverDetail};
  const navigation = useNavigation();
  const {dataLogin} = useSelector((state) => state.authAPI);
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
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
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          // alignSelf: 'space-between',
          // paddingBottom: 10,
          paddingLeft: 15,
          paddingTop: 5,
          paddingBottom: 5,
          // backgroundColor: 'rgba(99, 121, 244, 0.2)',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#514F5B',
            fontWeight: 'bold',
          }}>
          Details
        </Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        {/* AMOUNT */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Amount
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp{formatRupiah(Number(props.receiverDetail.nominal))}
          </Text>
        </View>

        {/* BALANCE */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Balance Left
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp{formatRupiah(dataLogin.balance)}
          </Text>
        </View>

        {/* DATE TIME */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Date & Time
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {full}
            {/* May 11, 2020 - 12.20 */}
          </Text>
        </View>

        {/* NOTES */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Notes
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {props.receiverDetail.notes}
          </Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonActive}
          onPress={() =>
            navigation.navigate('InputPin', {...props.receiverDetail})
          }>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              width: '100%',
              textAlign: 'center',
              // textTransform: 'lowercase',
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContentConfirmation;

const styles = StyleSheet.create({
  itemDetail: {
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
});
