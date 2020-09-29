import React, {Component} from 'react';
import {Image, View} from 'react-native';
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

const Contact = () => {
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
