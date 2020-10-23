import React, {useEffect} from 'react';
import {Image, View, BackHandler} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
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
import PushNotification from 'react-native-push-notification';
import io from 'socket.io-client';
import {setSocketCreator} from '../redux/actions/socket';
import {showLocalNotification} from '../components/NotifHandler/NotifHandler';
import {getTransactionAPICreator_Home} from '../redux/actions/transaction';
import {getUserInfoAPICreator} from '../redux/actions/auth';
import {socketServerAddress} from '../../sharedVariable';

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
  const channelId = 'transaction-observer';
  const dispatch = useDispatch();
  const {socket, allowNotif} = useSelector((state) => state.socket);
  const {dataLogin} = useSelector((state) => state.authAPI);
  useEffect(() => {
    if (socket) return;
    const newSocket = io(socketServerAddress, {
      query: {id: dataLogin.user_id},
    });
    dispatch(setSocketCreator(newSocket));
  }, []);

  // subscribe to socket event
  useEffect(() => {
    if (socket == null) {
      const newSocket = io(socketServerAddress, {
        query: {id: dataLogin.user_id},
      });
      dispatch(setSocketCreator(newSocket));
    }
    socket?.on('transaction', ({title, message}) => {
      dispatch(
        getTransactionAPICreator_Home(
          Number(dataLogin.user_id),
          'id_transaction',
          'DESC',
          1,
          10,
        ),
      );
      dispatch(getUserInfoAPICreator(Number(dataLogin.user_id)));
      // PushNotification.createChannel(
      //   {
      //     channelId,
      //     channelName: 'transaction-notification',
      //   },
      //   (created) => console.log(`createChannel returned '${created}'`),
      // );
      // showLocalNotification(title, message, channelId);
      if (allowNotif) {
        PushNotification.createChannel(
          {
            channelId,
            channelName: 'transaction-notification',
          },
          (created) => console.log(`createChannel returned '${created}'`),
        );
        showLocalNotification(title, message, channelId);
      }
    });

    return () => {
      socket?.off('transaction');
    };
  }, [socket, dispatch]);
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
