import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';


const QuantitySelector = ({quantity, setQuantity}  ) => {
  const onMinus = () => {
    setQuantity(Math.max(0,quantity - 1))
  };
  const onPlus = () => {
      setQuantity(quantity + 1)
  };
  return (
    <View style={styles.root}>
      <Pressable onPress={onMinus} style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
      <View>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <Pressable onPress={onPlus} style={styles.button}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 130,
    borderWidth: 1,
    borderColor: '#e2ece9',
    borderRadius: 5,
    marginVertical: 5,
    
    
  },
  button: {
    backgroundColor: '#ced4da',

    justifyContent: 'center',
    height: 35,
    width: 35,
    alignItems: 'center',
  },
  buttonText: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  quantity: {
    color: '#4895ef',
    marginVertical: 6
    
  },
});
export default QuantitySelector;
