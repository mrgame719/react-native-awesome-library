/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { SafeAreaView, StatusBar } from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import Colors from './constants/Colors';
import Styles from './common/Styles';
import DrawerNav from './navigation/DrawerNav';

export const navigationRef = createNavigationContainerRef();

const RootNavigation = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
        <DrawerNav />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
