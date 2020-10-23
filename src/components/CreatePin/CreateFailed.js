import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Content, Button} from 'native-base';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  resetStatusRegistCreator,
  resetStatusUpdateCreator,
} from '../../redux/actions/auth';

const CreateFailed = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      dispatch(resetStatusRegistCreator());
      dispatch(resetStatusUpdateCreator());
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <Container
      style={{
        backgroundColor: 'rgba(99, 121, 244, 0.2)',
      }}>
      <Content>
        <View style={{...styles.containerTitle, height: '40%'}}>
          <Text style={styles.title}>Zwallet</Text>
        </View>
        <View style={styles.containerForm}>
          <View style={{width: '15%'}}>
            <Icon
              reverse
              name="close"
              type="material"
              color="#FF5B37"
              size={25}
            />
          </View>
          <Text style={styles.createPin}>Failed Create PIN</Text>
          <View
            style={{
              width: '100%',
              // marginTop: 30,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 50,
              }}></View>
          </View>
        </View>
      </Content>
      <View style={{backgroundColor: '#FFFFFF'}}>
        <Button
          style={styles.buttonActive}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: '#ffffff', fontSize: 20, fontWeight: 'bold'}}>
            Login Now
          </Text>
        </Button>
      </View>
    </Container>
  );
};

export default CreateFailed;

const styles = StyleSheet.create({
  containerTitle: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {color: '#6379F4', fontSize: 26, fontWeight: 'bold'},
  containerForm: {
    // flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    alignItems: 'center',
    paddingTop: 20,
    // marginTop: '20%',
    // flexDirection: 'column',
    height: Dimensions.get('window').height,
  },
  createPin: {
    fontSize: 24,
    marginBottom: 10,
    marginTop: 30,
    fontWeight: 'bold',
    color: '#3A3D42',
  },
  subCreatePinTitle: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 23,
    width: '70%',
    color: 'rgba(58, 61, 66, 0.6)',
    marginTop: 20,
  },
  buttonActive: {
    width: '95%',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
  buttonInactive: {
    width: '95%',
    backgroundColor: '#DADADA',
    borderRadius: 10,
    // height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 30,
  },
});
