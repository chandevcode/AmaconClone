import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
      flexDirection: 'row',
      borderWidth: 1,
      margin: 10,
      borderColor: '#adb5bd',
      borderRadius: 10,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    rightContainer: {
      padding: 10,
      flex: 3,
    },
    image: {
      flex: 2,
  
      borderRadius: 5,
      resizeMode: 'cover',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
    },
    ratings: {
      flexDirection: 'row',
      marginVertical: 5,
      alignItems: 'center',
    },
    star: {
      margin: 1,
    },
  
    ratingsText: {
      marginLeft: 5,
    },
    priceContainer: {
        flexDirection: 'row',
       
    },
    oldPrice:{
      fontSize: 12,
      textDecorationLine: 'line-through',
      
      
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  export default styles
  