/* eslint-disable react-native/no-inline-styles */
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Box,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

const PersonalInfo = () => {
  const navigation = useNavigation();
  const themeColor = useColorScheme();
  return (
    <SafeAreaProvider
      style={{backgroundColor: themeColor === 'dark' ? 'black' : 'white'}}>
      <ScrollView>
        <VStack mx={10}>
          <HStack justifyContent="space-between" mt={24}>
            <Box mt={10}>
              <HStack>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Box mt={5}>
                    <MaterialIcons
                      name="arrow-back-ios"
                      size={20}
                      color="grey"
                    />
                  </Box>
                </TouchableOpacity>
                <Heading>
                  {' '}
                  <Text
                    fontWeight={'$bold'}
                    size="md"
                    color={themeColor === 'dark' ? 'white' : 'dark'}>
                    {' '}
                    Personal Information
                  </Text>
                </Heading>
              </HStack>
            </Box>
          </HStack>
          <Divider mt={20} />

          <Text
            mt={10}
            fontWeight={'$bold'}
            color={themeColor === 'dark' ? 'white' : 'dark'}>
            Name
          </Text>
          <Divider mt={30} />

          <Text
            mt={10}
            fontWeight={'$bold'}
            color={themeColor === 'dark' ? 'white' : 'dark'}>
            Email
          </Text>
          <Divider mt={30} />

          <Text
            mt={10}
            fontWeight={'$bold'}
            color={themeColor === 'dark' ? 'white' : 'dark'}>
            Phone Number
          </Text>
          <Divider mt={30} />
        </VStack>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default PersonalInfo;
