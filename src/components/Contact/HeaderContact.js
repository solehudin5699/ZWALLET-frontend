import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, View, Text} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getContactAPICreator,
  setKeywordCreator,
  setResetCreator,
  setPageCreator,
} from '../../redux/actions/contact';

const HeaderContact = ({navigation}) => {
  const [keyword, setSearch] = useState('');
  const updateSearch = (key) => {
    setSearch(key);
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setResetCreator());
  //   dispatch(getContactAPICreator('', 'name', 'ASC', 1, 8));
  //   dispatch(setPageCreator(1));
  // }, [dispatch]);
  return (
    <Header
      // span
      androidStatusBarColor="#6379F4"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        paddingLeft: 0,
        paddingRight: 0,
        // width: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#6379F4',
          margin: 0,
          flex: 1,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'row',
          height: '100%',
          paddingBottom: 20,
        }}>
        <SearchBar
          searchIcon={{
            name: 'search',
            color: 'rgba(58, 61, 66, 0.4)',
            type: 'material',
          }}
          clearIcon={{
            name: 'clear',
            color: 'rgba(58, 61, 66, 0.4)',
            type: 'material',
          }}
          showLoading={true}
          containerStyle={{
            padding: 0,
            backgroundColor: 'transparant',
            margin: 0,
            borderWidth: 0,
            boxShadow: 'none',
            padding: 0,
            borderBottomWidth: 0,
            borderTopWidth: 0,
            width: '95%',
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            borderWidth: 0,
            borderRadius: 10,
            height: 40,
          }}
          inputStyle={{
            margin: 0,
            color: 'black',
            borderWidth: 0,
          }}
          placeholder="Cari di sini..."
          placeholderTextColor="rgba(58, 61, 66, 0.4)"
          onChangeText={updateSearch}
          onEndEditing={() => {
            dispatch(setKeywordCreator(keyword));
            dispatch(setResetCreator());
            dispatch(getContactAPICreator(keyword, 'name', 'ASC', 1, 8));
            dispatch(setPageCreator(1));
          }}
          onClear={() => {
            dispatch(setResetCreator());
            dispatch(setKeywordCreator(''));
            dispatch(getContactAPICreator('', 'name', 'ASC', 1, 8));
          }}
          value={keyword}
          round={true}
        />
      </View>
    </Header>
  );
};

export default HeaderContact;
