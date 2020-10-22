import React, {useEffect, useState} from 'react';
import {Image, View, FlatList, TouchableOpacity} from 'react-native';
import {Container, Title, Button, Text, Icon, Footer} from 'native-base';

const FooterHistory = (props) => {
  const {setFilterAll, setFilterIn, setFilterOut} = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          paddingVertical: 7,
        }}>
        <TouchableOpacity
          onPress={() => {
            setFilterOut();
          }}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilterIn();
          }}
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
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFilterAll();
          }}
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
    </>
  );
};

export default FooterHistory;
