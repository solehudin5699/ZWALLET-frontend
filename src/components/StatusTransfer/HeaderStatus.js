import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const HeaderStatus = () => {
  const {statusAdd} = useSelector((state) => state.transaction);
  return (
    <>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={{alignItems: 'center'}}>
        <View style={{width: '15%', marginTop: 20}}>
          <Icon
            reverse
            name={statusAdd === 200 ? 'check' : 'close'}
            type="material"
            color={statusAdd === 200 ? '#1EC15F' : '#FF5B37'}
            size={25}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 10,
            fontWeight: 'bold',
            color: '#3A3D42',
          }}>
          {Number(statusAdd) === 200 ? 'Transfer Success' : 'Transfer Failed'}
        </Text>
        {Number(statusAdd) === 200 ? null : (
          <Text
            style={{
              fontSize: 16,
              marginBottom: 20,
              color: '#3A3D42',
              textAlign: 'center',
              paddingHorizontal: 30,
              marginTop: 10,
            }}>
            We can’t transfer your money at the moment, we recommend you to
            check your internet connection and try again.
          </Text>
        )}
      </View>
    </>
  );
  // }
};

export default HeaderStatus;
