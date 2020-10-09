import React, {useState} from 'react';
import {
  Image,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Pressable,
} from 'react-native';
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
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {logoutCreator} from '../../redux/actions/auth';
import {resetSocketCreator} from '../../redux/actions/socket';

const ContentProfile = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch();
  const clearAppData = async function () {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  };
  return (
    <>
      <View style={styles.container}>
        {/* Personal Information */}
        <Pressable
          onPress={() => navigation.navigate('PersonalInformation')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Personal Information</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Change Password */}
        <Pressable
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Change Password</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Change PIN */}
        <Pressable
          onPress={() => navigation.navigate('ChangePin')}
          style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Change PIN</Text>
          </View>
          <View style={styles.iconArrow}>
            <Icon name="arrow-right" size={25} color="#7A7886" type="feather" />
          </View>
        </Pressable>
        {/* Notification */}
        <View style={styles.itemInformation}>
          <View style={styles.containerTitle}>
            <Text style={styles.infoTitle}>Notification</Text>
          </View>
          <View style={styles.iconArrow}>
            <Switch
              style={{width: 50}}
              trackColor={{false: 'rgba(169, 169, 169, 0.4)', true: '#6379F4'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch()}
              value={isEnabled}
            />
          </View>
        </View>
        {/* Logout */}
        <Pressable
          onPress={() => {
            dispatch(logoutCreator());
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Login',
                },
              ],
            });
            clearAppData();
            dispatch(resetSocketCreator());
          }}
          style={styles.itemInformation}>
          <View style={{...styles.containerTitle, width: '100%'}}>
            <Text style={styles.infoTitle}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default ContentProfile;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  itemInformation: {
    // flex: 1,
    marginVertical: 10,
    width: '100%',
    backgroundColor: '#E5E8ED',
    height: 70,
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0,0.05)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 1,
  },
  containerTitle: {width: '75%'},
  infoTitle: {
    fontSize: 16,
    color: '#4D4B57',
    // marginBottom: 1,
    fontWeight: 'bold',
  },
  iconArrow: {
    width: '25%',
    alignItems: 'flex-end',
  },
});
