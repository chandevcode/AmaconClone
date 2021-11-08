import React from 'react';
import { FlatList, View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = ({searchValue} : {searchValue: string}) => {
  console.log(searchValue)
  return (
    <View>
      
     <FlatList
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
        keyExtractor={({id}) => id}
     />
    </View>
  );
};

export default HomeScreen;

