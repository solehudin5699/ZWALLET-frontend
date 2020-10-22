import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const HeaderInputPin = ({navigation}) => {
  return (
    <Header
      // span
      androidStatusBarColor="#6379F4"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        borderBottomWidth: 0,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
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
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#6379F4',
            margin: 0,
            flex: 1,
            borderBottomStartRadius: 15,
            borderBottomEndRadius: 15,
            justifyContent: 'center',
            alignItems: 'flex-end',
            flexDirection: 'row',
            // height: '100%',
            paddingBottom: 15,
            paddingHorizontal: 15,
          }}></View>
      </View>
    </Header>
  );
  // }
};

export default HeaderInputPin;
