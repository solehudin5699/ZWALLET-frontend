import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Text, Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getContactAPICreator,
  setResetCreator,
  setPageCreator,
} from '../../redux/actions/contact';
import {serverAddress} from '../../../sharedVariable';

const ContactEmpty = () => {
  const {
    contact,
    contactBasedPage,
    isPending,
    isFulFilled,
    isRejected,
    keyword,
    page,
  } = useSelector((state) => state.contact);
  // const {keyword} = useSelector((state) => state.contact);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!isPending && !contact.length ? (
        <>
          <Icon name="search" type="material" color="#FF5B37" size={30} />
          <Text
            style={{textAlign: 'center', fontSize: 15, color: '#6379F4'}}
            numberOfLines={2}>
            Sorry, contact with keyword "{keyword}" is not found :(
          </Text>
        </>
      ) : null}
    </View>
  );
};

const SomethingWrong = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Icon
        name="settings-input-antenna"
        type="material"
        color="#FF5B37"
        size={30}
      />

      <View
        style={{
          justifyContent: 'flex-start',
          padding: 10,
          borderColor: '#d8414a',
          borderWidth: 1,
        }}>
        <Text style={{fontSize: 15, color: '#517fa4', textAlign: 'justify'}}>
          Can not connect with our database. This is because :
        </Text>
        <Text style={{fontSize: 15, color: '#517fa4', textAlign: 'justify'}}>
          1. Our system is down, atau
        </Text>
        <Text style={{fontSize: 15, color: '#517fa4', textAlign: 'justify'}}>
          2. Your internet connection is error
        </Text>
      </View>
    </View>
    // </View>
  );
};

const EndResult = () => {
  const {keyword} = useSelector((state) => state.contact);
  return (
    <View style={{alignItems: 'center', paddingVertical: 10}}>
      <Text style={{color: '#517fa4'}}>Finish...</Text>
    </View>
  );
};
const ContentContact = () => {
  const navigation = useNavigation();
  const {
    contact,
    contactBasedPage,
    isPending,
    isFulFilled,
    isRejected,
    keyword,
    page,
  } = useSelector((state) => state.contact);
  const {dataLogin} = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();

  const renderFooter = () => {
    return (
      <>
        {contactBasedPage.length ? (
          <View style={{height: 50}}>
            <ActivityIndicator
              animating
              size="large"
              color="#6379F4"
              style={{marginTop: 15, marginBottom: 0}}
            />
          </View>
        ) : contact.length ? (
          <EndResult />
        ) : null}
      </>
    );
  };
  const dataRefresh = () => {
    dispatch(setResetCreator());
    dispatch(setPageCreator(1));
    dispatch(getContactAPICreator('', 'name', 'ASC', 1, 8));
  };
  const loadMore = () => {
    if (contactBasedPage.length === 0) {
      return null;
    } else {
      dispatch(
        getContactAPICreator(keyword, 'name', 'ASC', Number(page) + 1, 8),
      );
      if (isFulFilled) {
        let newPage = Number(page) + 1;
        dispatch(setPageCreator(newPage));
      }
    }

    console.log(page);
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.contactTitle}>Contacts</Text>
        <Text style={{color: '#8F8F8F', fontSize: 15}}>
          {contact.filter((item) => item.user_id !== dataLogin.user_id).length}{' '}
          Contacts Found
        </Text>
      </View>
      {!contact.length && isPending ? (
        <View style={{flex: 1}}>
          <ActivityIndicator
            animating
            size="large"
            color="#6379F4"
            style={{marginTop: 20, marginBottom: 15}}
          />
        </View>
      ) : (
        <FlatList
          data={contact.filter((item) => item.user_id !== dataLogin.user_id)}
          numColumns={1}
          ListEmptyComponent={() => <ContactEmpty />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                let data = {
                  user_id: item.user_id,
                  name: item.name,
                  username: item.username,
                  image: item.image,
                  noHp: item.noHp,
                };
                navigation.navigate('Transfer', data);
                // console.log(data);
              }}
              style={styles.itemFlatlist}>
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
                      size={40}
                      color="#6379F4"
                      type="ionicons"
                    />
                  </View>
                )}
              </View>
              <View style={styles.containerText}>
                <Text style={styles.nameText}>
                  {item.name ? item.name : item.username}
                </Text>

                <Text style={styles.nohpText}>
                  {item.noHp ? item.noHp : 'Number phone is empty'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => Math.random().toString()}
          // ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={() => renderFooter()}
          onRefresh={() => dataRefresh()}
          refreshing={isPending}
          onEndReached={() => loadMore()}
          onEndReachedThreshold={0.1}
          progressViewOffset={-150}
        />
      )}
      {/* )} */}
    </>
  );
};

export default ContentContact;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    paddingLeft: 15,
    paddingTop: 20,
    paddingBottom: 5,
  },
  contactTitle: {
    fontSize: 18,
    color: '#514F5B',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemFlatlist: {
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
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 0,
    elevation: 1,
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
  containerText: {
    width: '75%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 16,
    color: '#4D4B57',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  nohpText: {fontSize: 14, color: '#7A7886'},
});
