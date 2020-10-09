import React, {useEffect, useState} from 'react';
import {Container, Content} from 'native-base';
import HeaderTransfer from '../components/Transfer/HeaderTransfer';
import FormTransfer from '../components/Transfer/FormTransfer';

const Transfer = (props) => {
  const [receiverDetail, setReceiverDetail] = useState('');
  useEffect(() => {
    const {route} = props;
    const dataReceiver = {
      user_id: route.params?.user_id,
      name: route.params?.name,
      username: route.params?.username,
      image: route.params?.image,
      noHp: route.params?.noHp,
    };
    setReceiverDetail(dataReceiver);
  }, [props]);
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <HeaderTransfer receiverDetail={receiverDetail} />
      <Content>
        <FormTransfer receiverDetail={receiverDetail} />
      </Content>
    </Container>
  );
};

export default Transfer;
