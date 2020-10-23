import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import {Container} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import HeaderHistory from '../components/History/HeaderHistory';
import ContentHistory from '../components/History/ContentHistory';
import FooterHistory from '../components/History/FooterHistory';

const History = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('all');
  const setFilterAll = () => setFilter('all');
  const setFilterIn = () => setFilter('in');
  const setFilterOut = () => setFilter('out');
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
      <HeaderHistory />
      <ContentHistory filter={filter} />
      <FooterHistory
        setFilterAll={setFilterAll}
        setFilterIn={setFilterIn}
        setFilterOut={setFilterOut}
      />
    </Container>
  );
};

export default History;
