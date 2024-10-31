/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {useColorScheme} from 'react-native';
import {ScrollView, VStack, Text} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Statusbar from '../../components/Statusbar';
// import React from 'react';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigation} from '../../types/RouteTypes';

export default function Home() {
  // const navigation = useNavigation<StackNavigation>();
  const themeColor = useColorScheme();

  console.log(themeColor);

  return (
    <>
      <Statusbar />
      <SafeAreaProvider
        style={{backgroundColor: themeColor === 'dark' ? 'black' : 'white'}}>
        <ScrollView>
          <VStack space="md">
            <Text>This is Home</Text>
          </VStack>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
}
