import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container} from 'native-base';
import FormChangePin from '../components/ChangePin/FormChangePin';

const ChangePin = () => {
  return (
    <Container
      style={{
        backgroundColor: 'rgba(99, 121, 244, 0.2)',
      }}>
      <FormChangePin />
    </Container>
  );
};

export default ChangePin;
