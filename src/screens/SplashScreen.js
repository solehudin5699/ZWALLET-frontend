import React, {useEffect} from 'react';
import {Text, View, Dimensions, StatusBar} from 'react-native';
import {
  validateTokenAPICreator,
  resetStatusTokenCreator,
} from '../redux/actions/auth';
import {useSelector, useDispatch} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const {
    dataLogin,
    statusLogin,
    statusToken,
    isValidateFulFilled,
    isValidateRejected,
  } = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();
  useEffect(() => {
    if (Number(statusLogin) === 200) {
      // dispatch(resetStatusTokenCreator());
      dispatch(validateTokenAPICreator(dataLogin.token));
      if (Number(statusToken) === 200) {
        setTimeout(() => {
          navigation.navigate('Home');
        }, 3000);
      } else if (Number(statusToken) === 500) {
        setTimeout(() => {
          // navigation.navigate('Login');
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'Login',
              },
            ],
          });
          // dispatch(resetStatusTokenCreator());
        }, 3000);
      }
      // if (isValidateFulFilled || isValidateRejected) {

      // }

      // setTimeout(() => {
      //   navigation.navigate('Home');
      // }, 3000);
    } else {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    }
  }, [dispatch, statusLogin, statusToken]);
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
