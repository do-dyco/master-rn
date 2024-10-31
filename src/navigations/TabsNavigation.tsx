/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import Home from '../screens/Home/Index';
import Profile from '../screens/Profile/Index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {useColorScheme} from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const themeColor = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: themeColor === 'dark' ? 'black' : 'white',
          position: 'absolute',
          borderTopWidth: 0,
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <AntDesign
              name="home"
              color={color}
              size={size}
              style={{marginTop: 10}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Octicons
              name="person"
              color={color}
              size={size}
              style={{marginTop: 10}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
