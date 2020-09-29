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
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Sueb',
    // image:
    transaction_type: 'Subscription',
    value: 20000,
  },
  {
    name: 'Benyamin',
    // image:
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Parto',
    // image:
    transaction_type: 'Subscription',
    value: 20000,
  },
  {
    name: 'Sule',
    // image:
    transaction_type: 'Transfer',
    value: 20000,
  },
  {
    name: 'Eko',
    // image:
    transaction_type: 'Transfer',
    value: 20000,
  },
];

const ContentHome = () => {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={{
            flexDirection: 'row',
            width: '45%',
            backgroundColor: '#E5E8ED',
            height: 57,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="arrow-up" type="feather" color="#6379F4" size={19} />
          <Text style={{marginLeft: 10, fontSize: 18}}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: '45%',
            backgroundColor: '#E5E8ED',
            height: 57,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="add" type="material" color="#6379F4" size={19} />
          <Text style={{marginLeft: 10, fontSize: 18}}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
          Transaction History
        </Text>
        <Text
          style={{color: '#6379F4', fontSize: 15}}
          onPress={() => navigation.navigate('History')}>
          See All
        </Text>
      </View>

      <FlatList
        data={data}
        numColumns={1}
        renderItem={({item}) => (
          <View
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
                width: 5,
                height: 0,
              },
              shadowOpacity: 0.05,
              shadowRadius: 0,
              elevation: 2,
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
                width: '45%',
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
              <Text style={{fontSize: 14, color: '#7A7886'}}>
                {item.transaction_type}
              </Text>
            </View>
            <View style={{width: '30%'}}>
              <Text
                style={{
                  fontSize: 18,
                  color:
                    item.transaction_type === 'Transfer'
                      ? '#1EC15F'
                      : '#FF5B37',
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {item.transaction_type === 'Transfer' ? '+' : '-'}
                Rp. 20.000
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => Math.random().toString()}
        // ItemSeparatorComponent={this.renderSeparator}
      />
    </>
  );
};

export default ContentHome;
