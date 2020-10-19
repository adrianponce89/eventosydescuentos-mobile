import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Blank from '../screens/Blank';
import Menu from '../screens/Menu';
import ExploreTab from './ExploreTab';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Explore" component={ExploreTab} />
      <Tab.Screen
        name="Discounts"
        component={Blank}
        initialParams={{ title: 'Discounts' }}
      />
      <Tab.Screen
        name="Add"
        component={Blank}
        initialParams={{ title: 'Add' }}
      />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
};

export default HomeTab;
