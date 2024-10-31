import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type StackNavigationList = {
  login: undefined;
  BottomTab: undefined;
  home: undefined;
  profile: undefined;
  theme: undefined;
  personalInfo: undefined;
};

export type StackNavigation = NativeStackNavigationProp<
  StackNavigationList,
  'login'
>;
