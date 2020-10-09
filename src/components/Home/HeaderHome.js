import React, {useEffect, useState} from 'react';
import {Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Container,
  Header,
  Title,
  Button,
  Text,
  Left,
  Right,
  Body,
  Thumbnail,
  Content,
  Icon,
} from 'native-base';
import {Icon as IconProfile} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const HeaderHome = () => {
  const [image, setImage] = useState('');
  const {dataLogin, statusLogin} = useSelector((state) => state.authAPI);
  const navigation = useNavigation();
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  useEffect(() => {
    if (Number(statusLogin) === 200) {
      setImage(dataLogin.image);
    }
  }, [statusLogin]);
  return (
    <Header
      // span
      androidStatusBarColor="#6379F4"
      style={styles.container}>
      <View style={styles.contentHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.containerImage}>
          {dataLogin.image ? (
            <Thumbnail
              source={{
                uri: `http://192.168.43.220:8000${dataLogin.image}`,
              }}
              style={{width: 56, height: 56, borderRadius: 10}}
            />
          ) : (
            <View style={styles.containerIcon}>
              <IconProfile
                name="person-outline"
                size={50}
                color="#6379F4"
                type="ionicons"
              />
            </View>
          )}
        </TouchableOpacity>
        <View
          style={{
            width: '60%',
            justifyContent: 'space-evenly',
            height: '70%',
          }}>
          <Text style={{color: '#D0D0D0', fontSize: 14}}>Balance</Text>
          <Text style={{color: '#FFFFFF', fontSize: 24, fontWeight: '700'}}>
            Rp{formatRupiah(Number(dataLogin.balance))}
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
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingLeft: 0,
    paddingRight: 0,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    // width: '100%',
  },
  contentHeader: {
    backgroundColor: '#6379F4',
    margin: 0,
    flex: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  containerImage: {
    flex: 1,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'red',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    // width: '60%',
    // height: '50%',
  },
});
