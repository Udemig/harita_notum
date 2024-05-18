//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {Colors} from '../../theme/colors';

// create a component
const Detail = ({route}) => {
  const {item} = route.params;
  console.log(item);
  return (
    <View style={screenStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Title:</Text>
        <Text>{item.title}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Description:</Text>
        <Text>{item.description}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Rating:</Text>
        <Text>{item.point}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Longitude:</Text>
        <Text>{item.coordinate.longitude}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 15,
          borderBottomWidth: 0.3,
          borderColor: Colors.GRAY,
        }}>
        <Text style={{fontWeight:"bold"}}>Latitude:</Text>
        <Text>{item.coordinate.latitude}</Text>
      </View>
    </View>
  );
};

//make this component available to the app
export default Detail;
