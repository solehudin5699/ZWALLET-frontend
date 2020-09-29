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
    info: 'Transfer',
    value: 20000,
  },
];

const ThisWeek = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '90%',
            alignSelf: 'center',
            // paddingBottom: 10,
            marginVertical: 15,
          }}>
          <Text style={{fontSize: 16, color: '#7A7886', fontWeight: 'bold'}}>
            This Week
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
                height: 90,
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
                  {' '}
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
                  {item.transaction_type === 'Transfer' ? '+' : '-'}Rp. 20.000
                </Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => Math.random().toString()}
          // ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    </>
  );
};

export default ThisWeek;
