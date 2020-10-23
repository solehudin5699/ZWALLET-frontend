import React, {useEffect} from 'react';
import {Image, View, BackHandler} from 'react-native';
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
import HeaderContact from '../components/Contact/HeaderContact';
import ContentContact from '../components/Contact/ContentContact';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const Contact = () => {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderContact />
      <View style={{flex: 1}}>
        <ContentContact />
      </View>
    </Container>
  );
};

export default Contact;
