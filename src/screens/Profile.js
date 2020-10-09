import React, {useEffect} from 'react';
import {View, StatusBar, BackHandler} from 'react-native';
import {Container, Text, Content} from 'native-base';
import ContentProfile from '../components/Profile/ContentProfile';
import {useNavigation} from '@react-navigation/native';
import HeaderProfile from '../components/Profile/HeaderProfile';

const Profile = () => {
  const navigation = useNavigation();
  const backAction = () => {
    navigation.goBack();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  return (
    <Container style={{backgroundColor: 'rgba(99, 121, 244, 0.2)'}}>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <Content>
        <HeaderProfile />
        <ContentProfile />
      </Content>
    </Container>
  );
};

export default Profile;
