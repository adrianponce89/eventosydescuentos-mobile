import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { DetailsProps } from '../../types';

const Details = ({ navigation }: DetailsProps) => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>Details</Text>
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

export default Details;
