import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductScreen from '../screens/ProductScreen';
import Icons from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './HomeStack';
import AddressScreen from '../screens/AddressScreen';
import ShoppingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#f48c06',
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ced4da'
      }}>
      <Tab.Screen
        component={HomeStack}
        name="home"
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="home" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ProductScreen}
        name="product"
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="shopping-bag" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name="cart"
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="add-shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={AddressScreen}
        name="address"
        options={{
          tabBarIcon: ({color}) => (
            <Icons name="list" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
