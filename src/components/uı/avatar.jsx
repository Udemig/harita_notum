//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {width} from '../../utils/constans';
import {User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import ImagePicker from 'react-native-image-crop-picker';
// create a component
const Avatar = ({user, onChangeImage, select}) => {
  const openGalery = () => {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      includeBase64: true,
      cropping: true,
    }).then(image => {
      onChangeImage(image.data,image.mime);
    });
  };
  return (
    <TouchableOpacity
      disabled={!select}
      onPress={openGalery}
      style={styles.container}>
      {user?.image ? (
        <Image
          style={{
            width: width * 0.25,
            height: width * 0.25,
            borderRadius:1000,
            resizeMode:"contain"
          }}
          source={{
            uri: user.image,
          }}
        />
      ) : (
        <User size={40} variant="Bold" />
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.25,
    height: width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.SOFTGRAY,
    borderRadius: 1000,
    margin: 30,
    alignSelf: 'center',
  },
});

//make this component available to the app
export default Avatar;
