/* eslint-disable react/self-closing-comp */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomTab from './TabsNavigation';
import PersonalInfo from '../screens/Profile/personalInfo';
import Theme from '../screens/Profile/theme';
import Login from '../screens/Login/Index';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={{headerShown: false}}
      />
      {/* profileScreen */}
      <Stack.Screen
        name="personalInfo"
        component={PersonalInfo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="theme"
        component={Theme}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
