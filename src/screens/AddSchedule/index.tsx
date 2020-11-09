import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import { FieldInput } from '../../components/FormFields';

//   name?: string;
//   start?: Date;
//   end?: Date;
//   location?: string;
//   description?: string;
//   photo?: string;
//   author?: {
//     id?: string;
//     name?: string;
//   };

const submit = (values: any) => {
  console.log('submitting form', values);
};

const AddSchedule = ({ handleSubmit }: InjectedFormProps) => {
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <FieldInput name="email" style={styles.input} />
      <TouchableOpacity style={styles.item} onPress={handleSubmit(submit)}>
        <Text style={styles.title}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'red',
    borderWidth: 1,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  title: {
    fontSize: 24,
  },
});

export default reduxForm({
  form: 'add-schedule',
})(AddSchedule);
