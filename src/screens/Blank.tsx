import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { BlankProps } from '../types';

const Blank = ({ route }: BlankProps) => {
  const { title } = route.params;
  return (
    <View style={styles.body}>
      <Text style={styles.title}>{title}</Text>
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

export default Blank;
