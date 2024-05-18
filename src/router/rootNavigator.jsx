import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import Home from '../screens/map';
import {
  ADDNOTE,
  DETAIL,
  EDITNOTE,
  HOME,
  NOTES,
  SIGNIN,
  SIGNUP,
  LAUNCH,
  TAB,
  COORDINATESELECT,
  ADDLOCATION,
} from '../utils/routes';
import Detail from '../screens/detail';
import Notes from '../screens/notes';
import AddNote from '../screens/notes/addNote';
import EditNote from '../screens/notes/editNote';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import Launch from '../screens/launch';
import {LogoutCurve} from 'iconsax-react-native';
import {Colors} from '../theme/colors';
import TabNavigator from './tabNavigator';
import CoordinateSelect from '../screens/map/coordinateSelact';
import AddLocation from '../screens/map/addLoacation';
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
      }}>
      {!user ? (
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={LAUNCH}
            component={Launch}
          />
          <Stack.Screen name={SIGNIN} component={SignIn} />
          <Stack.Screen name={SIGNUP} component={SignUp} />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={TAB}
            component={TabNavigator}
          />
          <Stack.Screen name={ADDNOTE} component={AddNote} />
          <Stack.Screen name={EDITNOTE} component={EditNote} />
          <Stack.Screen name={DETAIL} component={Detail} />
          <Stack.Screen name={COORDINATESELECT} component={CoordinateSelect} />
          <Stack.Screen name={ADDLOCATION} component={AddLocation} />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

export default RootNavigator;
