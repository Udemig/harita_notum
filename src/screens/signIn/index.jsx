//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import auth from '@react-native-firebase/auth';
import CustomButton from '../../components/uı/customButton';
import CustomInput from '../../components/uı/customInput';
import {Key, User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import {NOTES} from '../../utils/routes';

// create a component
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('serhatustek2@gmail.com');
  const [password, setPassword] = useState('1234asdfA.');
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log('user SigIn');
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
            Sign In
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
            onPress={() => handleSignIn()}
            title="Sign In"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
