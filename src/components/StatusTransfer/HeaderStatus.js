import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const HeaderStatus = ({navigation}) => {
  // const {sortBy, orderBy, newest} = useSelector((state) => state.modals);
  // const {cart} = useSelector((state) => state.cart);
  // const {dataLogin} = useSelector((state) => state.authAPI);
  const [keyword, setSearch] = useState('');
  const updateSearch = (key) => {
    setSearch(key);
  };
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setResetCreator());
  //   dispatch(getProductsAPICreator('', sortBy, orderBy, newest, 1));
  //   dispatch(setPageCreator(1));
  // }, [dispatch, sortBy, orderBy, newest]);
  return (
    <>
      <StatusBar backgroundColor="rgba(99, 121, 244, 0.2)" />
      <View style={{alignItems: 'center'}}>
        <View style={{width: '15%', marginTop: 20}}>
          <Icon
            reverse
            name="check"
            type="material"
            color="#1EC15F"
            size={25}
            onPress={() => dispatch(modalFilterAction(true))}
          />
        </View>
        <Text
          style={{
            fontSize: 24,
            marginBottom: 10,
            fontWeight: 'bold',
            color: '#3A3D42',
          }}>
          Transfer Success
        </Text>
        {/* <Text
          style={{
            fontSize: 16,
            marginBottom: 20,
            color: '#3A3D42',
            textAlign: 'center',
            paddingHorizontal: 30,
            marginTop: 10,
          }}>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text> */}
      </View>
    </>
  );
  // }
};

export default HeaderStatus;
