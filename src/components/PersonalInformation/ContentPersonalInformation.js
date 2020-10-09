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

const ContentPersonalInformation = (props) => {
  // let dataReceiver = {...props.receiverDetail};
  const navigation = useNavigation();
  const {dataLogin} = useSelector((state) => state.authAPI);
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
          paddingTop: 15,
          paddingBottom: 15,
        }}>
        <Text
          style={{
            fontSize: 16,
            color: '#7A7886',
            paddingHorizontal: 20,
            textAlign: 'justify',
            lineHeight: 27,
          }}>
          We got your personal information from the sign up proccess. If you
          want to make changes on your information, contact our support.
        </Text>
      </View>
      <View style={{paddingHorizontal: 15}}>
        {/* FIRSTNAME */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            First Name
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {dataLogin.name ? dataLogin.name.split(' ')[0] : null}
          </Text>
        </View>
        {/* LASTNAME */}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Last Name
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {dataLogin.name
              ? dataLogin.name
                  .split(' ')
                  .filter((_, index) => index !== 0)
                  .join(' ')
              : null}
          </Text>
        </View>
        {/* VERIFIED EMAIL*/}
        <View style={styles.itemDetail}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Verified E-mail
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            {dataLogin.email}
          </Text>
        </View>
        {/* PHONE NUMBER*/}
        <View
          style={{
            ...styles.itemDetail,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '70%'}}>
            <Text
              style={{
                fontSize: 16,
                color: '#7A7886',
                marginBottom: 1,
              }}>
              Phone Number
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: dataLogin.noHp ? '#514F5B' : '#6379F4',
                fontWeight: 'bold',
              }}>
              {dataLogin.noHp ? dataLogin.noHp : 'Add phone number'}
            </Text>
          </View>
          <View
            style={{
              width: '30%',
              alignItems: 'flex-end',
            }}>
            <Text style={{color: '#6379F4'}}>
              {dataLogin.noHp ? 'Manage' : null}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default ContentPersonalInformation;

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
