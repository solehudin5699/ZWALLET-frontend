import React, {Component} from 'react';
import {Image, View, StyleSheet, Dimensions} from 'react-native';
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
import HeaderConfirmation from '../components/Confirmation/HeaderConfirmation';
import ContentConfirmation from '../components/Confirmation/ContentConfirmation';
import {Icon} from 'react-native-elements';

const Confirmation = () => {
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderConfirmation />
      <Content>
        <ContentConfirmation />
      </Content>
    </Container>
  );
};

export default Confirmation;

// const styles = StyleSheet.create({
//   containerTitle: {
//     height: '20%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {color: '#6379F4', fontSize: 26, fontWeight: 'bold'},
//   containerForm: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderTopStartRadius: 30,
//     borderTopEndRadius: 30,
//     alignItems: 'center',
//     paddingTop: 20,
//     height: Dimensions.get('window').height,
//   },
//   login: {
//     fontSize: 24,
//     marginBottom: 10,
//     marginTop: 30,
//     fontWeight: '700',
//     color: '#3A3D42',
//   },
//   subLoginTitle: {
//     fontSize: 16,
//     textAlign: 'center',
//     lineHeight: 23,
//     width: '70%',
//     color: 'rgba(58, 61, 66, 0.6)',
//   },
// });
