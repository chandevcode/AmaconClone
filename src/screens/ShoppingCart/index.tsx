import React from 'react';
import {FlatList, View, Text, StyleSheet, ScrollView} from 'react-native';
import Button from '../../components/Button';
import CartProductItem from '../../components/CartProductItem';
import products from '../../data/cart';
import { useNavigation } from '@react-navigation/native';
const ShopingCart = () => {
  const totalPrice = products.reduce(
    (summedPrice, product) =>
      summedPrice + product.quantity * product.item.price,
    0,
  );

  const navigation = useNavigation()
  const onChekcout = () => {
    navigation.navigate('Address')
  }
  return (
    
      <View style={styles.page}>
        
        <FlatList
          data={products}
          renderItem={({item}) => <CartProductItem cartItem={item} />}
          keyExtractor={({id}) => id}
          ListHeaderComponent={()=> (
            <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Subtotal ({products.length} items ):{' '}
              <Text style={styles.textTotal}>${totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text={'chekcout'}
              onPress={onChekcout}
              containerStyle={{
                backgroundColor: '#fcbf49',
              }}
            />
          </View>
          )}
        />
      </View>
  
  );
};

const styles = StyleSheet.create({
  page: {},
  titleContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
  },
  textTotal: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ee9b00',
  },
});

export default ShopingCart;
