import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Router from './router'
import HomeScreen from './screens/HomeScreen'

const App = () => {
  return (
   <View style ={{flex: 1}}>
     <Router />
   </View>
  )
}

export default App
