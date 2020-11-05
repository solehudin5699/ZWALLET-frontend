import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {Text, Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {
  getTransactionAPICreator,
  setResetCreator,
  getTransactionAPICreator_Home,
} from '../../redux/actions/transaction';
import {serverAddress} from '../../../sharedVariable';

const ContentHome = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {dataLogin} = useSelector((state) => state.authAPI);
  const {transaction, isGetPending} = useSelector((state) => state.transaction);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // dispatch(setResetCreator());
      dispatch(
        getTransactionAPICreator_Home(
          Number(dataLogin.user_id),
          'date',
          'DESC',
          1,
          10,
        ),
      );
    });
    return unsubscribe;
  }, [navigation, dispatch]);
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  const TransactionEmpty = () => {
    return (
      <>
        {transaction.length ? null : (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 15, color: '#6379F4'}}
              numberOfLines={2}>
              {!isGetPending && !transaction.length
                ? 'Your transaction is still empty...'
                : null}
            </Text>
          </View>
        )}
      </>
    );
  };
  return (
    <>
      <View>
        <View style={styles.transtop}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Contact')}
            style={styles.transfer}>
            <Icon name="arrow-up" type="feather" color="#6379F4" size={19} />
            <Text style={{marginLeft: 10, fontSize: 18}}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.topup}>
            <Icon name="add" type="material" color="#6379F4" size={19} />
            <Text style={{marginLeft: 10, fontSize: 18}}>Top Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerToHistory}>
          <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
            Transaction History
          </Text>
          <Text
            style={{color: '#6379F4', fontSize: 16}}
            onPress={() => navigation.navigate('History')}>
            See All
          </Text>
        </View>
      </View>
      <FlatList
        style={{paddingTop: 20}}
        ListEmptyComponent={() => <TransactionEmpty />}
        data={transaction.filter((item, index) => index < 10)}
        numColumns={1}
        renderItem={({item}) => (
          <View style={styles.containerItem}>
            <View
              style={{
                width: '25%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {item.image ? (
                <Thumbnail
                  source={{
                    uri: `${serverAddress}${item.image}`,
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
                {item.name ? item.name : item.username}
              </Text>
              <Text style={{fontSize: 14, color: '#7A7886'}}>
                {item.type_transaction}
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
  transtop: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  transfer: {
    flexDirection: 'row',
    width: '45%',
    backgroundColor: '#E5E8ED',
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  topup: {
    flexDirection: 'row',
    width: '45%',
    backgroundColor: '#E5E8ED',
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  containerToHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
    paddingBottom: 10,
    paddingHorizontal: 15,
  },
  containerItem: {
    flex: 1,
    marginBottom: 10,
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
  },
  containerImage: {
    flex: 1,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
  },
});
