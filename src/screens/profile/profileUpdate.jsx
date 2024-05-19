//import liraries
import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, ScrollView, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import {height, width} from '../../utils/constans';
import CustomButton from '../../components/uı/customButton';
import CustomInput from '../../components/uı/customInput';
import {Bag2, EmojiNormal, Key, Sms, User} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import Avatar from '../../components/uı/avatar';

// create a component
const ProfileUpdate = ({route}) => {
  const {user} = route?.params;

  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [job, setJob] = useState(user.job);
  const [image, setImage] = useState(user.image);
  const [loading, setLoading] = useState(false);
  const updateUser = () => {
    setLoading(true);
    const form = {
      name: name,
      surname: surname,
      job: job,
      image: image,
    };
    firestore()
      .collection('Users')
      .doc(user.userId)
      .update(form)
      .then(() => {
        Alert.alert("user update success")
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => setLoading(false));
  };
  return (
    <SafeAreaView style={screenStyle.safeAreView}>
      <ScrollView contentContainerStyle={{padding: 20}}>
        <Avatar
          select={true}
          user={user}
          onChangeImage={(image, mimType) =>
            setImage(`data:${mimType};base64,${image}`)
          }
        />
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
            paddingHorizontal: 10,
          }}>
          <CustomInput
            editable={false}
            icon={<Sms color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setEmail(value)}
            value={email}
            inputTitle="Email"
            placeholder="Email"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setName(value)}
            value={name}
            inputTitle="Name"
            placeholder="Name"
          />
          <CustomInput
            icon={<User color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setSurname(value)}
            value={surname}
            inputTitle="Surname"
            placeholder="Surname"
          />
          <CustomInput
            icon={<Bag2 color={Colors.BLACK} variant="Bold" />}
            onChangeText={value => setJob(value)}
            value={job}
            inputTitle="Job"
            placeholder="Job"
          />
        </View>
        <View style={{marginVertical: 20, justifyContent: 'center'}}>
          <CustomButton
            loading={loading}
            onPress={() => updateUser()}
            title="Update"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileUpdate;
