import React, {Component} from 'react';
import {Image, View, FlatList, TouchableOpacity} from 'react-native';
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
  Icon,
} from 'native-base';
import ThisWeek from '../components/History/ThisWeek';
import ThisMonth from '../components/History/ThisMonth';
import HeaderHistory from '../components/History/HeaderHistory';
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

const History = () => {
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderHistory />
      <ThisWeek />
      <ThisMonth />
      <View
        style={{
          // bottom: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'rgba(99, 121, 244, 0.2)',
          paddingHorizontal: 10,
          paddingVertical: 7,
        }}>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            height: 50,
            borderRadius: 10,
            // marginBottom: 15,
          }}>
          <Icon
            name="arrow-up"
            type="Ionicons"
            style={{fontSize: 25, color: '#FF5B37'}}
          />
        </View>
        <View
          style={{
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            height: 50,
            borderRadius: 10,
          }}>
          <Icon
            name="arrow-down"
            type="Ionicons"
            style={{fontSize: 25, color: '#1EC15F'}}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: '45%',
            backgroundColor: '#FFFFFF',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Text style={{marginLeft: 10, fontSize: 18}}>Filter By Date</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default History;
