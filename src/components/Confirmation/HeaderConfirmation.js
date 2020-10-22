import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {serverAddress} from '../../../sharedVariable';

const HeaderConfirmation = (props) => {
  return (
    <Header
      // span
      androidStatusBarColor="rgba(99, 121, 244, 0.2)"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: 110,
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
      <Text
        style={{
          fontSize: 18,
          color: '#514F5B',
          fontWeight: 'bold',
          alignSelf: 'flex-start',
          paddingHorizontal: 15,
          // marginBottom: 0,
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
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            flexDirection: 'row',
            // height: '100%',
            paddingBottom: 15,
            paddingHorizontal: 15,
          }}>
          <View
            style={{
              flex: 1,
              // marginBottom: 20,
              marginTop: 0,
              width: '100%',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              height: 70,
              justifyContent: 'flex-start',
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
      </View>
    </Header>
  );
  // }
};

export default HeaderConfirmation;
