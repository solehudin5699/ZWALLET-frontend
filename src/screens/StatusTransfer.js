import React, {useState, useEffect} from 'react';
import {Container, Content} from 'native-base';
import HeaderStatus from '../components/StatusTransfer/HeaderStatus';
import ContentStatus from '../components/StatusTransfer/ContentStatus';

const StatusTranfer = (props) => {
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
      <Content>
        <HeaderStatus />
        <ContentStatus receiverDetail={receiverDetail} />
      </Content>
    </Container>
  );
};

export default StatusTranfer;
