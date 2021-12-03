import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useRoute, useNavigation} from '@react-navigation/native'
import product from '../../data/product';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import styles from './styles';
import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
  const [selectedOption, setSelectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  const route =useRoute()
    console.log(route.params)

  const navigation = useNavigation()
  const addCart =() => {
    navigation.navigate('cart')
  }

  return (
    <ScrollView>
    <View style={styles.page}>
      {/* title */}
      <Text>{product.title} </Text>
      {/* image corousel */}
      <ImageCarousel images={product.images} />
      {/* option selector */}
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {product.options.map(option => (
          <Picker.Item label={option} value={option} key={product.id} />
        ))}
      </Picker>
      {/* price */}
      <View style={styles.priceContainer}>
        <Text style={styles.price}>from ${product.price}</Text>
        {product.oldPrice && (
          <Text style={styles.oldPrice}> ${product.oldPrice}</Text>
        )}
      </View>
      {/* description */}
      <Text style={styles.description}>{product.description}</Text>

      {/* quantity selector */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* button */}
      <Button
        text={'add to cart'}
        onPress={addCart}
        containerStyle={{}}
      />
      <Button
        text={'buy now'}
        onPress={() => {
          console.warn('buy now');
        }}
        containerStyle={{backgroundColor: '#ced4da'}}
      />
    </View>
    </ScrollView>
  );
};

export default ProductScreen;
