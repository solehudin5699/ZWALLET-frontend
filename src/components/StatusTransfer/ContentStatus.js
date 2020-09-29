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

const ContentStatus = () => {
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
            Notes
          </Text>
          <Text style={{fontSize: 22, color: '#514F5B', fontWeight: 'bold'}}>
            For Buying
          </Text>
        </View>
        {/* TRANSFER TO */}
        <Text
          style={{
            fontSize: 18,
            color: '#514F5B',
            fontWeight: 'bold',
            alignSelf: 'flex-start',
            // padding: 15,
          }}>
          Transfer to
        </Text>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View
            style={{
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
            }}>
            <View
              style={{
                flex: 1,
                // marginBottom: 20,
                width: '100%',
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                height: 80,
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
              }}>
              <View
                style={{
                  width: '25%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Thumbnail
                  source={require('../../assets/images/profile.png')}
                  style={{width: 56, height: 56, borderRadius: 10}}
                />
              </View>
              <View
                style={{
                  width: '75%',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  // height: '100%',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: '#4D4B57',
                    marginBottom: 10,
                    fontWeight: 'bold',
                  }}>
                  Haloo
                </Text>
                <Text style={{fontSize: 14, color: '#7A7886'}}>Haloo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.buttonActive}
          // onPress={handleSubmit}
        >
          <Text style={{color: '#ffffff', fontSize: 20}}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ContentStatus;

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
