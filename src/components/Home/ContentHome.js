import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Image,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
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
  Input,
} from 'native-base';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {getTransactionAPICreator} from '../../redux/actions/transaction';

const ContentHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataLogin} = useSelector((state) => state.authAPI);
  const {transaction} = useSelector((state) => state.transaction);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(
        getTransactionAPICreator(
          Number(dataLogin.user_id),
          'id_transaction',
          'DESC',
          1,
          10,
        ),
      );
    });

    return unsubscribe;
  }, [navigation]);
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Contact')}
          style={{
            flexDirection: 'row',
            width: '45%',
            backgroundColor: '#E5E8ED',
            height: 57,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="arrow-up" type="feather" color="#6379F4" size={19} />
          <Text style={{marginLeft: 10, fontSize: 18}}>Transfer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            width: '45%',
            backgroundColor: '#E5E8ED',
            height: 57,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}>
          <Icon name="add" type="material" color="#6379F4" size={19} />
          <Text style={{marginLeft: 10, fontSize: 18}}>Top Up</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          alignSelf: 'center',
          paddingBottom: 10,
        }}>
        <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
          Transaction History
        </Text>
        <Text
          style={{color: '#6379F4', fontSize: 15}}
          onPress={() => navigation.navigate('History')}>
          See All
        </Text>
      </View>

      <FlatList
        data={transaction}
        numColumns={1}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              marginBottom: 15,
              width: '100%',
              backgroundColor: '#FFFFFF',
              flexDirection: 'row',
              height: 80,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 20,
              shadowColor: 'rgba(0, 0, 0,0.05)',
              shadowOffset: {
                width: 5,
                height: 0,
              },
              shadowOpacity: 0.05,
              shadowRadius: 0,
              elevation: 2,
            }}>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {dataLogin.user_id === item.id_sender ? (
                item.image_receiver ? (
                  <Thumbnail
                    source={{
                      uri: `http://192.168.43.220:8000${item.image_receiver}`,
                    }}
                    style={{width: 56, height: 56, borderRadius: 10}}
                  />
                ) : (
                  <View style={styles.containerIcon}>
                    <Icon
                      name="person-outline"
                      size={50}
                      color="#6379F4"
                      type="ionicons"
                    />
                  </View>
                )
              ) : item.image_sender ? (
                <Thumbnail
                  source={{
                    uri: `http://192.168.43.220:8000${item.image_sender}`,
                  }}
                  style={{width: 56, height: 56, borderRadius: 10}}
                />
              ) : (
                <View style={styles.containerIcon}>
                  <Icon
                    name="person-outline"
                    size={50}
                    color="#6379F4"
                    type="ionicons"
                  />
                </View>
              )}
            </View>
            <View
              style={{
                width: '45%',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                // height: '100%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: '#4D4B57',
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {dataLogin.user_id === item.id_sender
                  ? item.name_receiver
                    ? item.name_receiver
                    : item.username_receiver
                    ? item.username_receiver
                    : 'Anonim'
                  : item.name_sender
                  ? item.name_sender
                  : item.username_sender
                  ? item.username_sender
                  : 'Anonim'}

                {/* {item.name} */}
              </Text>
              <Text style={{fontSize: 14, color: '#7A7886'}}>
                {dataLogin.user_id === item.id_sender ? 'Transfer' : 'Transfer'}
                {/* {item.type_transaction} */}
              </Text>
            </View>
            <View
              style={{
                width: '30%',
                alignItems: 'flex-end',
                paddingRight: 30,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color:
                    dataLogin.user_id === item.id_sender
                      ? '#FF5B37'
                      : '#1EC15F',
                  marginBottom: 10,
                  fontWeight: 'bold',
                }}>
                {dataLogin.user_id === item.id_sender
                  ? `-Rp${formatRupiah(Number(item.nominal))}`
                  : `+Rp${formatRupiah(Number(item.nominal))}`}
                {/* {item.transaction_type === 'Transfer' ? '+' : '-'}
                Rp. 20.000 */}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => Math.random().toString()}
        // ItemSeparatorComponent={this.renderSeparator}
      />
    </>
  );
};

export default ContentHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    paddingLeft: 0,
    paddingRight: 0,
    shadowColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    // width: '100%',
  },
  contentHeader: {
    backgroundColor: '#6379F4',
    margin: 0,
    flex: 1,
    borderBottomStartRadius: 15,
    borderBottomEndRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
  },
  containerImage: {
    flex: 1,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    // backgroundColor: 'red',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    // width: '60%',
    // height: '50%',
  },
});
