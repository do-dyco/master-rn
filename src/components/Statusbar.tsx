import React from 'react';
import {StatusBar} from '@gluestack-ui/themed';
import {useColorScheme} from 'react-native';

const Statusbar = () => {
  const themeColor = useColorScheme();
  return (
    <StatusBar
      backgroundColor={themeColor === 'dark' ? 'black' : 'white'}
      barStyle={themeColor === 'dark' ? 'light-content' : 'dark-content'}
    />
  );
};

export default Statusbar;
