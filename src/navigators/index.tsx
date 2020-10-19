import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Blank from '../screens/Blank';
import Login from '../screens/Login';
import Details from '../screens/Details';
import HomeTab from './HomeTab';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Home" component={HomeTab} />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
