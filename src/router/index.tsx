import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen component={BottomTabs} name="BottomMenu" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
