//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constans';
import {SearchNormal} from 'iconsax-react-native';

// create a component
const CustomInput = props => {
  const {icon, inputTitle = null} = props;
  return (
    <View style={{marginVertical: 5}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{inputTitle}</Text>
      <View style={styles.container}>
        {icon}
        <TextInput
          {...props}
          style={{
            minHeight: height * 0.055,
            paddingHorizontal: 8,
            fontSize: 16,flex:1
          }}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
    paddingHorizontal: 5,
    borderRadius: 8,
    marginVertical: 5,
  },
});

//make this component available to the app
export default CustomInput;
