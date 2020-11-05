import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Pressable} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Container, Text, Content, Thumbnail} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import {Icon} from 'react-native-elements';
import {modalEditImageProfileAction} from '../../redux/actions/modal';
import {
  updateUserAPICreator,
  getUserInfoAPICreator,
  resetStatusUpdateCreator,
} from '../../redux/actions/auth';
import ModalConfirm from './ModalConfirm';
import {serverAddress} from '../../../sharedVariable';

const HeaderProfile = () => {
  const {dataLogin, statusUpdate} = useSelector((state) => state.authAPI);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const handleSelect = () => {
    const options = {
      title: 'Select picture...',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      noData: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('Cancel');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button', response.customButton);
      } else {
        const source = response;
        setImage(source);
        dispatch(modalEditImageProfileAction(true));
      }
    });
  };
  const handleSubmit = () => {
    let data = new FormData();
    if (image) {
      data.append('image', {
        uri: `file://${image.path}`,
        type: image.type,
        name: image.fileName,
        size: image.fileSize,
      });
      if(dataLogin.image){
        data.append("imageDelete", dataLogin.image)
      } else {
        data.append("imageDelete", "")
      }
      dispatch(
        updateUserAPICreator(Number(dataLogin.user_id), data, dataLogin.token),
      );
      // dispatch(getUserInfoAPICreator());
    }
  };
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      <ModalConfirm
        handleSubmit={() => handleSubmit()}
        handleSelect={() => handleSelect()}
        handleCancel={() => setImage(null)}
      />
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => handleSelect()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EBEEF2',
            borderRadius: 10,
          }}>
          {image ? (
            <Thumbnail
              source={image}
              style={{width: 70, height: 70, borderRadius: 10}}
            />
          ) : dataLogin.image ? (
            <Thumbnail
              source={{
                uri: `${serverAddress}${dataLogin.image}`,
              }}
              style={{width: 70, height: 70, borderRadius: 10}}
            />
          ) : (
            <View>
              <Icon
                name="person-outline"
                size={70}
                color="#6379F4"
                type="ionicons"
              />
            </View>
          )}
        </TouchableOpacity>

        <Pressable
          onPress={() => handleSelect()}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Icon name="edit-2" size={15} color="#7A7886" type="feather" />
          <Text style={{fontSize: 16, marginLeft: 10, color: '#7A7886'}}>
            Edit
          </Text>
        </Pressable>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: '#4D4B57', fontSize: 24, fontWeight: 'bold'}}>
          {dataLogin.name ? dataLogin.name : dataLogin.username}
        </Text>
        <Text style={{color: '#7A7886', fontSize: 16}}>
          {/* {dataLogin.noHp ? dataLogin.noHp : dataLogin.noHp} */}
          {dataLogin.noHp ? dataLogin.noHp : 'Number phone is empty'}
        </Text>
      </View>
    </View>
  );
};

export default HeaderProfile;
