import React, {Component} from 'react';
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
import {useNavigation} from '@react-navigation/native';
let data = [
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
  {
    name: 'Siapa ya',
    // image:
    info: 'Transfer',
    value: 20000,
  },
];

const ContentConfirmation = () => {
  const navigation = useNavigation();
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
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: 80,
            paddingHorizontal: 15,
            paddingVertical: 15,
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
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Amount
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp100.000
          </Text>
        </View>

        {/* BALANCE */}
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: 90,
            paddingHorizontal: 15,
            paddingVertical: 15,
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
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Balance Left
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            Rp100.000
          </Text>
        </View>

        {/* DATE TIME */}
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: 90,
            paddingHorizontal: 15,
            paddingVertical: 15,
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
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Date & Time
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            May 11, 2020 - 12.20
          </Text>
        </View>

        {/* NOTES */}
        <View
          style={{
            flex: 1,
            marginBottom: 20,
            width: '100%',
            backgroundColor: '#FFFFFF',
            height: 90,
            paddingHorizontal: 15,
            paddingVertical: 15,
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
          }}>
          <Text
            style={{
              fontSize: 16,
              color: '#7A7886',
              marginBottom: 1,
            }}>
            Notes
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            For Buying
          </Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonActive}
          onPress={() => navigation.navigate('InputPin')}>
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
  containerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginTop: 50,
    marginBottom: 30,
    // padding: 20,
  },
  buttonActive: {
    width: '95%',
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
