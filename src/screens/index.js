/** @format */

import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {NAVIGATION} from '../constants';

import {Dashboard, Search} from './pages';
import {NetworkStatusWrapper} from './components';

const {Navigator, Screen} = createStackNavigator();

const AuthStack = () => (
  <Navigator headerMode="none">
    <Screen name={NAVIGATION.ROUTE.DASHBOARD} component={Dashboard} />
    <Screen name={NAVIGATION.ROUTE.SEARCH} component={Search} />
  </Navigator>
);

export const Screens = memo(() => (
  <NetworkStatusWrapper>
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  </NetworkStatusWrapper>
));
