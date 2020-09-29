import React, {Component} from 'react';
import {Image, View, StatusBar} from 'react-native';
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
import ContentProfile from '../components/Profile/ContentProfile';
import {Icon} from 'react-native-elements';

const Profile = () => {
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <Content>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
            // height: '30%',
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Thumbnail
            source={require('../assets/images/profile.png')}
            style={{width: 80, height: 80, borderRadius: 10}}
          /> */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#EBEEF2',
                borderRadius: 10,
              }}>
              <Icon
                name="person-outline"
                size={70}
                color="#6379F4"
                type="ionicons"
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10,
              }}>
              <Icon name="edit-2" size={15} color="#7A7886" type="feather" />
              <Text style={{fontSize: 16, marginLeft: 10, color: '#7A7886'}}>
                Edit
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#4D4B57', fontSize: 24, fontWeight: 'bold'}}>
              Robert Candler
            </Text>
            <Text style={{color: '#7A7886', fontSize: 16}}>08976737383838</Text>
          </View>
        </View>
        {/* Content */}
        {/* <Content> */}
        <ContentProfile />
      </Content>
    </Container>
  );
};

export default Profile;
