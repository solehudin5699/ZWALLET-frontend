import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {Container} from 'native-base';
import FormCreatePin from '../components/CreatePin/FormCreatePin';

const CreatePin = () => {
  return (
    <Container
      style={{
        backgroundColor: 'rgba(99, 121, 244, 0.2)',
      }}>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <FormCreatePin />
    </Container>
  );
};

export default CreatePin;
