import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {Thumbnail} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {DateTime} from 'luxon';
import {
  getTransactionAPICreator,
  setResetCreator,
} from '../../redux/actions/transaction';
import {serverAddress} from '../../../sharedVariable';

const startOfTheWeek = DateTime.local().startOf('week').toISODate();
const endOfTheWeek = DateTime.local()
  .startOf('week')
  .plus({days: 7})
  .toISODate();
const startOfTheMonth = DateTime.local().startOf('month').toISODate();
const endOfTheMonth = DateTime.local()
  .startOf('month')
  .plus({days: 30})
  .toISODate();

const ContentHistory = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    transaction,
    transactionBasedPage,
    isGetFulFilled,
    isGetPending,
  } = useSelector((state) => state.transaction);
  const {dataLogin} = useSelector((state) => state.authAPI);

  const thisWeek = transaction.filter((item) => {
    return (
      DateTime.fromISO(item.date.split(' ')[0]).toISODate() >= startOfTheWeek &&
      DateTime.fromISO(item.date.split(' ')[0]).toISODate() <= endOfTheWeek
    );
  });
  const thisMonth = transaction.filter((item) => {
    return (
      DateTime.fromISO(item.date.split(' ')[0]).toISODate() >=
        startOfTheMonth &&
      DateTime.fromISO(item.date.split(' ')[0]).toISODate() <= endOfTheMonth
    );
  });
  const allTransaction = [
    {
      period: 'This Week',
      data: thisWeek,
    },
    {
      period: 'This Month',
      data: thisMonth,
    },
  ];
  const transactionIn = [
    {
      period: 'This Week',
      data: thisWeek.filter((item) => item.id_receiver === dataLogin.user_id),
    },
    {
      period: 'This Month',
      data: thisMonth.filter((item) => item.id_receiver === dataLogin.user_id),
    },
  ];
  const transactionOut = [
    {
      period: 'This Week',
      data: thisWeek.filter((item) => item.id_sender === dataLogin.user_id),
    },
    {
      period: 'This Month',
      data: thisMonth.filter((item) => item.id_sender === dataLogin.user_id),
    },
  ];
  function formatRupiah(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  //PAGINATION CONTROL
  const dataRefresh = () => {
    dispatch(setResetCreator());
    setPage(1);
    dispatch(
      getTransactionAPICreator(
        Number(dataLogin.user_id),
        'date',
        'DESC',
        1,
        10,
      ),
    );
  };
  const [page, setPage] = useState(1);
  const loadMore = () => {
    if (transactionBasedPage.length === 0) {
      return null;
    } else {
      dispatch(
        getTransactionAPICreator(
          Number(dataLogin.user_id),
          'date',
          'DESC',
          page + 1,
          10,
        ),
      );
      if (isGetFulFilled) {
        let newPage = Number(page) + 1;
        setPage(newPage);
      }
    }

    console.log(page);
  };
  const EndResult = () => {
    return (
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <Text style={{color: '#517fa4'}}>Finish...</Text>
      </View>
    );
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setPage(1);
    });
    return unsubscribe;
  }, [navigation]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setPage(1);
    });
    return unsubscribe;
  }, [navigation]);
  const renderFooter = () => {
    return (
      <>
        {transactionBasedPage.length ? (
          <View style={{height: 50}}>
            <ActivityIndicator
              animating
              size="large"
              color="#6379F4"
              style={{marginTop: 15, marginBottom: 0}}
            />
          </View>
        ) : (
          <EndResult />
        )}
      </>
    );
  };
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
              Your transaction is still empty...
            </Text>
          </View>
        )}
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      {isGetPending && !transaction.length ? (
        <ActivityIndicator
          animating
          size="large"
          color="#6379F4"
          style={{marginTop: 15, marginBottom: 0}}
        />
      ) : (
        <SectionList
          sections={allTransaction}
          sections={
            props.filter === 'all'
              ? allTransaction
              : props.filter === 'in'
              ? transactionIn
              : transactionOut
          }
          ListEmptyComponent={() => <TransactionEmpty />}
          keyExtractor={(item) => Math.random().toString()}
          renderSectionHeader={({section: {period, data}}) =>
            !data.length ? null : (
              <View style={styles.containerHeader}>
                <Text
                  style={{fontSize: 16, color: '#7A7886', fontWeight: 'bold'}}>
                  {period}
                </Text>
              </View>
            )
          }
          renderItem={({item}) => (
            <View style={styles.containerItem}>
              <View style={styles.containerImage}>
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
              <View style={styles.containerName}>
                <Text style={styles.textName}>
                  {item.name ? item.name : item.username}
                </Text>
                <Text style={{fontSize: 14, color: '#7A7886'}}>
                  {item.type_transaction}
                </Text>
              </View>
              <View style={styles.containerNominal}>
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
          onRefresh={() => dataRefresh()}
          refreshing={isGetPending}
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.1}
          ListFooterComponent={() => renderFooter()}
          progressViewOffset={-90}
          stickySectionHeadersEnabled={true}
        />
      )}
    </View>
  );
};

export default ContentHistory;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
    alignSelf: 'center',
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  containerItem: {
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
  },
  containerImage: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
  },
  containerName: {
    width: '45%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textName: {
    fontSize: 16,
    color: '#4D4B57',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  containerNominal: {
    width: '30%',
    alignItems: 'flex-end',
    paddingRight: 30,
  },
});
