import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { MenuProps } from '../types';

const Menu = ({ navigation }: MenuProps) => {
  const handleLogout = () => {
    navigation.replace('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handleLogout}>
        <Text style={styles.title}>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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

export default Menu;
