import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {serverAddress} from '../../../sharedVariable';

const HeaderTransfer = (props) => {
  return (
    <Header
      // span
      androidStatusBarColor="rgba(99, 121, 244, 0.2)"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 0,
        paddingLeft: 0,
        paddingRight: 0,
        shadowColor: 'tranparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        // width: '100%',
      }}>
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
          height: '100%',
          paddingBottom: 20,
          paddingHorizontal: 15,
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
            borderRadius: 20,
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
            {props.receiverDetail.image ? (
              <Thumbnail
                source={{
                  uri: `${serverAddress}${props.receiverDetail.image}`,
                }}
                style={{width: 56, height: 56, borderRadius: 10}}
              />
            ) : (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#EBEEF2',
                  borderRadius: 10,
                }}>
                <Icon
                  name="person-outline"
                  size={40}
                  color="#6379F4"
                  type="ionicons"
                />
              </View>
            )}
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
    </Header>
  );
  // }
};

export default HeaderTransfer;
