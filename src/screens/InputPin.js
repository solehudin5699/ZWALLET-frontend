import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Container} from 'native-base';
import ContentInput from '../components/InputPin/ContentInput';
import HeaderInputPin from '../components/InputPin/HeaderInputPin';

const InputPin = (props) => {
  const [receiverDetail, setReceiverDetail] = useState('');
  useEffect(() => {
    const {route} = props;
    const dataReceiver = {
      user_id: route.params?.user_id,
      name: route.params?.name,
      username: route.params?.username,
      image: route.params?.image,
      noHp: route.params?.noHp,
      nominal: route.params?.nominal,
      notes: route.params?.notes,
    };
    setReceiverDetail(dataReceiver);
  }, [props]);
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderInputPin />
      <ContentInput receiverDetail={receiverDetail} />
    </Container>
  );
};

export default InputPin;
