import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Blank from '../screens/Blank';

const Tab = createMaterialTopTabNavigator();

const ExploreTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Map"
        component={Blank}
        initialParams={{ title: 'Map' }}
      />
      <Tab.Screen
        name="List"
        component={Blank}
        initialParams={{ title: 'List' }}
      />
    </Tab.Navigator>
  );
};

export default ExploreTab;
