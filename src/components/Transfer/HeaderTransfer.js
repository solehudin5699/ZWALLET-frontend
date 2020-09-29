import React, {useState, useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, View, Text, Thumbnail} from 'native-base';
import {SearchBar, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
// import {modalFilterAction} from '../redux/actions/modal';
// import {
//   getProductsAPICreator,
//   setKeywordCreator,
//   setResetCreator,
//   setPageCreator,
// } from '../redux/actions/products';

function CartIcon(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    // onPress={() => navigation.navigate(props.screenName)}
    >
      {/* {props.children} */}
      <View style={{flexDirection: 'row', width: '15%'}}>
        <Icon
          name="shopping-cart"
          type="material"
          color="#517fa4"
          size={24}
          style={{width: '100%', marginRight: 15}}
        />
        <View
          style={{
            position: 'absolute',
            height: 20,
            width: 20,
            borderRadius: 15,
            backgroundColor: '#d8414a',
            left: 20,
            top: -10,
            zIndex: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 12,
            }}>
            1{/* {props.numInCart} */}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function AddIcon(props) {
  // const navigation = useNavigation();
  return (
    <TouchableOpacity
    // onPress={() => navigation.navigate(props.screenName)}
    >
      {/* {props.children} */}
      <View style={{flexDirection: 'row', width: '100%'}}>
        <Icon
          name="add-circle"
          type="material"
          color="#517fa4"
          size={24}
          style={{marginRight: 15}}
        />
      </View>
    </TouchableOpacity>
  );
}

const HeaderTransfer = ({navigation}) => {
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
    <Header
      // span
      androidStatusBarColor="rgba(99, 121, 244, 0.2)"
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 0,
        paddingLeft: 0,
        paddingRight: 0,
        shadowColor: 'tranparent',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        // width: '100%',
      }}>
      <View
        style={{
          // backgroundColor: '#6379F4',
          margin: 0,
          flex: 1,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexDirection: 'row',
          height: '100%',
          paddingBottom: 20,
          paddingHorizontal: 15,
        }}>
        <View
          style={{
            flex: 1,
            // marginBottom: 20,
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
          }}>
          <View
            style={{
              width: '25%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Thumbnail
              source={require('../../assets/images/profile.png')}
              style={{width: 56, height: 56, borderRadius: 10}}
            />
          </View>
          <View
            style={{
              width: '75%',
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
              Haloo
            </Text>
            <Text style={{fontSize: 14, color: '#7A7886'}}>Haloo</Text>
          </View>
        </View>
      </View>
    </Header>
  );
  // }
};

export default HeaderTransfer;
