import React from 'react';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Email, Home} from '../Screen';

const Tab = createBottomTabNavigator();

export const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={'Home'}
        screenOptions={{
          tabBarIconStyle: {display: 'none'},
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarLabelStyle: {
            fontWeight: '700',
            fontSize: 15,
          },
        }}>
        <Tab.Screen name={'Home'} component={Home} />
        <Tab.Screen name={'Email'} component={Email} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
