import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Dimensions,
  StatusBar,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const {statusLogin} = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Number(statusLogin) === 200) {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  }, [dispatch, statusLogin]);
  // setTimeout(() => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [
  //       {
  //         name: 'Login',
  //       },
  //     ],
  //   });
  // }, 5000);
  return (
    <>
      <StatusBar backgroundColor="#6379F4" />
      <View
        // source={Splash}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          backgroundColor: '#6379F4',
          // paddingTop: '70%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#ffffff', fontSize: 32, fontWeight: 'bold'}}>
          Zwallet
        </Text>
      </View>
    </>
  );
};

export default SplashScreen;
