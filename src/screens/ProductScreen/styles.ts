import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  page: {
    padding: 10,

    backgroundColor: 'white',
  },
  priceContainer: {
    flexDirection: 'row',
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: 'line-through',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginVertical: 10,
    lineHeight: 18
  },
});

export default styles;
