import React from 'react';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddressScreen from '../screens/AddressScreen';
import ShopingCart from '../screens/ShoppingCart';



const Root = createNativeStackNavigator();

const ShoppingCartStack = () => {
  return (
    
      <Root.Navigator  >
        <Root.Screen component={ShopingCart} name="cart" options={{ title: 'Cart'}}/>
        <Root.Screen component={AddressScreen} name="Address" options={{title : 'Address'}} />
      </Root.Navigator>
 
  );
};

export default ShoppingCartStack;
