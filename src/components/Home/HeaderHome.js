import React, {Component} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
  Content,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    // <Container>
    <Header
      // span
      androidStatusBarColor="#6379F4"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
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
      <View
        style={{
          backgroundColor: '#6379F4',
          margin: 0,
          flex: 1,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          height: '100%',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            flex: 1,
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}>
          <Thumbnail
            source={require('../../assets/images/profile.png')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '60%',
            justifyContent: 'space-evenly',
            height: '70%',
          }}>
          <Text style={{color: '#D0D0D0', fontSize: 14}}>Balance</Text>
          <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: '700'}}>
            Rp 120.000
          </Text>
        </View>
        <View style={{width: '15%'}}>
          <Icon
            name="notifications-outline"
            type="Ionicons"
            style={{fontSize: 25, color: '#FAFAFA'}}
          />
        </View>
      </View>
    </Header>
    // <Content>
    //   <Text>Coba</Text>
    // </Content>
    // </Container>
  );
};

export default HeaderHome;
