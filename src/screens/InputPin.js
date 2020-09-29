import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container} from 'native-base';
import ContentInput from '../components/InputPin/ContentInput';
import HeaderInputPin from '../components/InputPin/HeaderInputPin';

const InputPin = () => {
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderInputPin />
      <ContentInput />
    </Container>
  );
};

export default InputPin;
