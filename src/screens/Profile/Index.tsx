/* eslint-disable react-native/no-inline-styles */
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, useColorScheme} from 'react-native';
import {
  Box,
  Divider,
  HStack,
  ScrollView,
  VStack,
  Text,
  Center,
} from '@gluestack-ui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../../types/RouteTypes';

export default function ProfileScreen() {
  const background = useColorScheme();
  const navigation = useNavigation<StackNavigation>();
  const themeColor = useColorScheme();

  console.log(themeColor);

  return (
    <>
      <SafeAreaProvider
        style={{backgroundColor: themeColor === 'dark' ? 'black' : 'white'}}>
        <ScrollView>
          <VStack mx={10}>
            <Text mt={10} fontWeight="$medium" color="$coolGray400">
              Account
            </Text>
            <Divider mt={10} />

            <TouchableOpacity
              onPress={() => navigation.navigate('personalInfo')}>
              <HStack
                space="md"
                reversed={false}
                mt={20}
                justifyContent="space-between">
                <Box>
                  <HStack>
                    <MaterialIcons
                      name="person"
                      size={20}
                      color={background === 'dark' ? 'white' : 'black'}
                    />
                    <Text
                      fontWeight={'$bold'}
                      mx={10}
                      color={background === 'dark' ? 'white' : 'black'}>
                      Personal Info
                    </Text>
                  </HStack>
                </Box>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="grey"
                />
              </HStack>
            </TouchableOpacity>

            <HStack
              space="md"
              reversed={false}
              mt={20}
              justifyContent="space-between">
              <Box>
                <HStack>
                  <MaterialIcons
                    name="mail-outline"
                    size={20}
                    color={background === 'dark' ? 'white' : 'black'}
                  />
                  <Text
                    fontWeight={'$bold'}
                    mx={10}
                    color={background === 'dark' ? 'white' : 'black'}>
                    Email
                  </Text>
                </HStack>
              </Box>
              <MaterialIcons name="arrow-forward-ios" size={18} color="grey" />
            </HStack>

            <Text mt={30} fontWeight="$medium" color="$coolGray400">
              Privacy
            </Text>
            <Divider mt={10} />

            <HStack
              space="md"
              reversed={false}
              mt={20}
              justifyContent="space-between">
              <Box>
                <HStack>
                  <MaterialIcons
                    name="lock"
                    size={20}
                    color={background === 'dark' ? 'white' : 'black'}
                  />
                  <Text
                    fontWeight={'$bold'}
                    mx={10}
                    color={background === 'dark' ? 'white' : 'black'}>
                    Password
                  </Text>
                </HStack>
              </Box>
              <MaterialIcons name="arrow-forward-ios" size={18} color="grey" />
            </HStack>

            <HStack
              space="md"
              reversed={false}
              mt={20}
              justifyContent="space-between">
              <Box>
                <HStack>
                  <MaterialIcons
                    name="phone-iphone"
                    size={20}
                    color={background === 'dark' ? 'white' : 'black'}
                  />
                  <Text
                    fontWeight={'$bold'}
                    mx={10}
                    color={background === 'dark' ? 'white' : 'black'}>
                    Phone Number
                  </Text>
                </HStack>
              </Box>
              <MaterialIcons name="arrow-forward-ios" size={18} color="grey" />
            </HStack>

            <Text mt={30} fontWeight="$medium" color="$coolGray400">
              Settings
            </Text>
            <Divider mt={10} />
            <TouchableOpacity onPress={() => navigation.navigate('theme')}>
              <HStack
                space="md"
                reversed={false}
                mt={20}
                justifyContent="space-between">
                <Box>
                  <HStack>
                    <MaterialIcons
                      name="brush"
                      size={20}
                      color={background === 'dark' ? 'white' : 'black'}
                    />
                    <Text
                      fontWeight={'$bold'}
                      mx={10}
                      color={background === 'dark' ? 'white' : 'black'}>
                      Theme
                    </Text>
                  </HStack>
                </Box>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="grey"
                />
              </HStack>
            </TouchableOpacity>

            <Text mt={30} fontWeight="$medium" color="$coolGray400">
              Features
            </Text>
            <Divider mt={10} />

            <HStack
              space="md"
              reversed={false}
              mt={20}
              justifyContent="space-between">
              <Box>
                <HStack>
                  <MaterialIcons
                    name="info"
                    size={20}
                    color={background === 'dark' ? 'white' : 'black'}
                  />
                  <Text
                    fontWeight={'$bold'}
                    mx={10}
                    color={background === 'dark' ? 'white' : 'black'}>
                    About
                  </Text>
                </HStack>
              </Box>
              <MaterialIcons name="arrow-forward-ios" size={18} color="grey" />
            </HStack>

            <HStack
              space="md"
              reversed={false}
              mt={20}
              justifyContent="space-between">
              <Box>
                <HStack>
                  <MaterialIcons
                    name="question-answer"
                    size={20}
                    color={background === 'dark' ? 'white' : 'black'}
                  />
                  <Text
                    fontWeight={'$bold'}
                    mx={10}
                    color={background === 'dark' ? 'white' : 'black'}>
                    FAQ
                  </Text>
                </HStack>
              </Box>
              <MaterialIcons name="arrow-forward-ios" size={18} color="grey" />
            </HStack>

            <HStack
              space="md"
              reversed={false}
              mt={40}
              justifyContent="space-between">
              <TouchableOpacity onPress={() => navigation.navigate('login')}>
                <Box>
                  <HStack>
                    <MaterialIcons name="logout" color="red" size={25} />
                    <Text fontWeight={'$bold'} color="red" mx={10}>
                      Logout
                    </Text>
                  </HStack>
                </Box>
              </TouchableOpacity>
            </HStack>

            <Center>
              <Text mt={30} color={background === 'dark' ? 'white' : 'black'}>
                Version 0.0.1
              </Text>
            </Center>
          </VStack>
        </ScrollView>
      </SafeAreaProvider>
    </>
  );
}
