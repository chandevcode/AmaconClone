import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import CountryList from 'country-list';
import styles from './styles';
import Button from '../../components/Button';

const countries = CountryList.getData();

const AddressScreen = () => {
  const [country, setCountry] = useState(countries[100].code);
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAdress] = useState('');
  const [addressError, setAddressError] = useState('');
  const [city, setCity] = useState('');

 
  const onCheckout = () => {
    if (!fullname) {
      Alert.alert('insert fullname');
    }
    if (!phoneNumber) {
      Alert.alert('insert phoneNumber');
    }
    console.warn('checkout')
  };

  const validationError = () => {
    if (address.length < 3) {
      setAddressError('input more then 3 length');
    }
    if (address.length > 20) {
      setAddressError('address too long !');
    }
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styles.page}>
          <View style={styles.row}>
            <Picker
              selectedValue={country}
              onValueChange={(e, i) => setCountry(e)}>
              {countries.map(country => (
                <Picker.Item
                  label={country.name}
                  value={country.code}
                  key={country.code}
                />
              ))}
            </Picker>
          </View>
          <View>
            <Text style={styles.label}>Full Name (First & Last name)</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: putuchandra"
              value={fullname}
              onChangeText={setFullname}
            />
          </View>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: 08223xxxx"
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={text => {
                setPhoneNumber(text);
                setAddressError('');
              }}
            />
            {!!addressError && (
              <Text style={styles.errorLabel}> {addressError}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: Street x"
              onEndEditing={validationError}
              value={address}
              onChangeText={text => {
                setAdress(text);
                setAddressError('');
              }}
            />
            {!!addressError && (
              <Text style={styles.errorLabel}>{addressError}</Text>
            )}
          </View>
          <View>
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="ex: Las Vegas"
              value={city}
              onChangeText={setCity}
            />
          </View>
          
          <Button text="checkout" onPress={onCheckout} containerStyle={{}} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressScreen;
