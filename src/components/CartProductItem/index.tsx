import React, { useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import QuantitySelector from '../QuantitySelector'


interface cartProductItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice?: number;
    };
  };
}

const CartProductItem = ({cartItem}: cartProductItemProps) => {
  const {quantity : propQuantity, item} = cartItem;
  const [quantity, setQuantity] = useState(propQuantity)

  return (
    
      <View style={styles.root} >
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: item.image}} />

        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratings}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <Icon
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#f8961e'}
              />
            ))}

            <Text style={styles.ratingsText}>{item.ratings}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>from ${item.price}</Text>
            {item.oldPrice && (
              <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            )}
          </View>
        </View>
      </View>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />

      </View>
    
  );
};

export default CartProductItem;
