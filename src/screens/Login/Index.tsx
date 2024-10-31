/* eslint-disable react-native/no-inline-styles */
import {useColorScheme} from 'react-native';
import {
  ScrollView,
  VStack,
  Text,
  Input,
  InputField,
  Box,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/RouteTypes';

export default function Login() {
  const navigation = useNavigation<StackNavigation>();
  const themeColor = useColorScheme();

  console.log(themeColor);

  return (
    <>
      <SafeAreaProvider
        style={{backgroundColor: themeColor === 'dark' ? 'black' : 'white'}}>
        <ScrollView>
          <VStack space="md" mt={'80%'}>
            <Box mx={40}>
              <VStack space="md">
                <Text>Username</Text>
                <Input
                  variant="rounded"
                  size="md"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}>
                  <InputField placeholder="Enter Your Username" />
                </Input>
              </VStack>
            </Box>

            <Box mx={40}>
              <VStack space="md">
                <Text>Password</Text>
                <Input
                  variant="rounded"
                  size="md"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}>
                  <InputField placeholder="Enter Your Password" />
                </Input>
              </VStack>
            </Box>

            <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
              <Button
                mx={40}
                mt={20}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                rounded={10}>
                <ButtonText>Login</ButtonText>
              </Button>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
}
