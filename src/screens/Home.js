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
import HeaderHome from '../components/Home/HeaderHome';
import ContentHome from '../components/Home/ContentHome';

const Home = () => {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <Container style={{backgroundColor: '#FAFCFF'}}>
      <HeaderHome />
      <View style={{flex: 1}}>
        <ContentHome />
      </View>
    </Container>
  );
};

export default Home;
