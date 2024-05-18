import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Geolocation from '@react-native-community/geolocation';
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  CalloutSubview,
  Callout,
} from 'react-native-maps';
import CustomMarker from '../../components/map/customMarker';
import CustomCallout from '../../components/map/customCallout';
import FloatActionButton from '../../components/uı/floatActionButton';
import {ArrowRight, LocationAdd, Map1} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import {ADDLOCATION, COORDINATESELECT, DETAIL} from '../../utils/routes';
// create a component
const CoordinateSelect = ({navigation}) => {
  const [currentPosition, setCurrentPossition] = useState(null);
  const [coordinate, setCordinate] = useState(null);
  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        setCurrentPossition(pos.coords);
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };
  const handleSelectCoordinate = e => {
    setCordinate(e.nativeEvent.coordinate);
  };
  useEffect(() => {
    getCurrentPosition();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <FloatActionButton
          disabled={coordinate ? false : true}
          onPress={() =>
            navigation.navigate(ADDLOCATION, {coordinate: coordinate})
          }
          icon={<ArrowRight size={30} color={Colors.WHITE} />}
          customStyle={{
            backgroundColor: coordinate ? Colors.GREEN : Colors.GRAY,
            bottom: 30,
          }}
        />
        <MapView
          onPress={handleSelectCoordinate}
          zoomControlEnabled
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: currentPosition?.latitude,
            longitude: currentPosition?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {/* <Marker
            title="Konumum"
            coordinate={{
              latitude: currentPosition?.latitude,
              longitude: currentPosition?.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          /> */}
          {coordinate && (
            <Marker
              coordinate={{
                latitude: coordinate?.latitude,
                longitude: coordinate?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          )}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

//make this component available to the app
export default CoordinateSelect;
