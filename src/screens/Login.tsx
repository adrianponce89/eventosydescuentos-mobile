import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { LoginProps } from '../types';

const Login = ({ navigation }: LoginProps) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Login 2</Text>
      <Button title="Go to Home" onPress={() => navigation.replace('Home')} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#AAA',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
});

export default Login;
