import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { HomeProps } from '../types';

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
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

export default Home;
