/* eslint-disable react-native/no-inline-styles */
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  Box,
  CircleIcon,
  Divider,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  ScrollView,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useColorScheme} from 'react-native';

const Theme = () => {
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
                    size="xl"
                    color={themeColor === 'dark' ? 'white' : 'dark'}>
                    {' '}
                    Theme
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
            Select Your Theme Mode
          </Text>

          <RadioGroup>
            <Radio
              value="change"
              size="md"
              isInvalid={false}
              isDisabled={false}
              mt={20}>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel color={themeColor === 'dark' ? 'white' : 'dark'}>
                Default System
              </RadioLabel>
            </Radio>

            <Radio
              value="change"
              size="md"
              isInvalid={false}
              isDisabled={false}
              mt={20}>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel color={themeColor === 'dark' ? 'white' : 'dark'}>
                Dark
              </RadioLabel>
            </Radio>

            <Radio
              value="change"
              size="md"
              isInvalid={false}
              isDisabled={false}
              mt={20}>
              <RadioIndicator mr="$2">
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel color={themeColor === 'dark' ? 'white' : 'dark'}>
                Light
              </RadioLabel>
            </Radio>
          </RadioGroup>
        </VStack>
      </ScrollView>
    </SafeAreaProvider>
  );
};

export default Theme;
