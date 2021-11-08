import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Root = createNativeStackNavigator();
interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: () => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={{backgroundColor: '#64dfdf', padding: 10}}>
      <View style={styles.inputContainer}>
        <Icon name="search" color={'gray'} size={25} style={styles.icon} />
        <TextInput style={styles.input} placeholder="Search..." 
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <Root.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Root.Screen name="Home">
        {() => <HomeScreen searchValue={searchValue} />}
      </Root.Screen>
      <Root.Screen component={ProductScreen} name="ProductDetails" />
    </Root.Navigator>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,

    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#dee2e6',
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center',
    position: 'relative',
  },
  icon: {},
});

export default HomeStack;
