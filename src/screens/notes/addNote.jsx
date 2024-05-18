//import liraries
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {screenStyle} from '../../styles/screenStyle';
import CustomInput from '../../components/uı/customInput';
import {NoteAdd, NoteText, Calendar} from 'iconsax-react-native';
import {Colors} from '../../theme/colors';
import CustomButton from '../../components/uı/customButton';

// create a component
const AddNote = () => {
  const [title, setTitle] = useState('Kitap Okuma');
  const [description, setDescription] = useState(
    'Akşam yazılım dersine çalışılacak',
  );
  const [date, setDate] = useState('October 25,2024');
  const [loading, setLoading] = useState(false);

  const saveNote = () => {
    setLoading(true);
    const form = {
      title: title,
      description: description,
      date: date,
    };
    firestore()
      .collection('Notes')
      .add(form)
      .then(() => {
        Alert.alert('Note added success');
      })
      .catch(eror => {
        console.log(eror);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <View style={screenStyle.container}>
      <CustomInput
        onChangeText={value => setTitle(value)}
        value={title}
        inputTitle="Title"
        placeholder="Title"
        icon={<NoteAdd color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDescription(value)}
        value={description}
        inputTitle="Description"
        placeholder="Description"
        icon={<NoteText color={Colors.GRAY} />}
      />
      <CustomInput
        onChangeText={value => setDate(value)}
        value={date}
        inputTitle="Date"
        placeholder="Date"
        icon={<Calendar color={Colors.GRAY} />}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomButton
          loading={loading}
          onPress={() => saveNote()}
          title="ADD NOTE"
        />
      </View>
    </View>
  );
};

export default AddNote;
