import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Blank from '../screens/Blank';
import Login from '../screens/Login';
import Details from '../screens/Details';
import HomeTab from './HomeTab';
import theme from '../styles/theme.style';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.PRIMARY_COLOR,
        },
        headerTintColor: theme.TEXT_LIGHT,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen
        name="Home"
        component={HomeTab}
        options={{ headerTitle: undefined }}
      />
      <RootStack.Screen name="Details" component={Details} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
