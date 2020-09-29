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
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
let data = [
  {
    name: 'Si Doel',
    // image:
    noHp: '086756677667',
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Sueb',
    // image:
    noHp: '086756677667',
    transaction_type: 'Subscription',
    value: 20000,
  },
  {
    name: 'Benyamin',
    // image:
    noHp: '086756677667',
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Parto',
    // image:
    noHp: '086756677667',
    transaction_type: 'Subscription',
    value: 20000,
  },
  {
    name: 'Sule',
    // image:
    noHp: '086756677667',
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Eko',
    // image:
    noHp: '086756677667',
    info: 'Transfer',
    value: 20000,
  },
];

const ContentContact = () => {
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
          paddingTop: 35,
          paddingBottom: 19,
          // backgroundColor: 'rgba(99, 121, 244, 0.2)',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#514F5B',
            fontWeight: 'bold',
            marginBottom: 5,
          }}>
          Contacts
        </Text>
        <Text style={{color: '#8F8F8F', fontSize: 15}}>17 Contacts Found</Text>
      </View>

      <FlatList
        data={data}
        numColumns={1}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Transfer')}
            style={{
              flex: 1,
              marginBottom: 20,
              width: '100%',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              height: 96,
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
                {item.name}
              </Text>
              <Text style={{fontSize: 14, color: '#7A7886'}}>{item.noHp}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => Math.random().toString()}
        // ItemSeparatorComponent={this.renderSeparator}
      />
    </>
  );
};

export default ContentContact;
