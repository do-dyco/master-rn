/* eslint-disable react/react-in-jsx-scope */
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
