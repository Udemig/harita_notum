//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import auth from '@react-native-firebase/auth';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import CustomButton from '../../components/uı/customButton';
import CustomInput from '../../components/uı/customInput';
import {Key, User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';

// create a component
const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={screenStyle.safeAreView}>
      <View style={screenStyle.container}>
        <View style={{flex: 2}}>
          <Image
            source={require('../../assets/images/signIn.png')}
            style={{
              width: width,
              height: height * 0.3,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 20,
            }}>
            Sign Up
          </Text>
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setEmail(value)}
            value={email}
            inputTitle="Email"
            placeholder="Email"
          />
          <CustomInput
            icon={<Key color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setPassword(value)}
            secureTextEntry
            value={password}
            inputTitle="Password"
            placeholder="Password"
          />
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <CustomButton
            loading={loading}
            onPress={() => handleSignUp()}
            title="Sign Up"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
