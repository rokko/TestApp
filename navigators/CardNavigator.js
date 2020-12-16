import React, { useEffect, useContext } from 'react'
import { Text, Image, TouchableOpacity, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import CarteScreen from '../screens/CarteScreen'
import CartaScreen from '../screens/CartaScreen'
import TrasferisciCardScreen from '../screens/TrasferisciCardScreen'
import { HeaderBackButton } from '@react-navigation/stack'
import { AuthContext } from '../contexts/AuthContext'

const CardStack = createStackNavigator()

export default function CardNavigator() {

  const { user } = useContext(AuthContext)
  return (

    <CardStack.Navigator
      initialRouteName="Carte" component={CarteScreen}
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 },

      }}
    >
      <CardStack.Screen name="Carte" component={CarteScreen}
        options={{
          headerTitle: () => <Text>Lista Carte</Text>,
          headerRight: () =>  <View style={{ width:100, alignContent:'flex-start'}}><Image style={{ height: 30, width: 30 }} source={require('../assets/avatar/avatar.png')} /><Text>{user.name}</Text></View>,
        

        }} />
      <CardStack.Screen name="Carta" component={CartaScreen} />
      <CardStack.Screen name="Trasferisci" component={TrasferisciCardScreen} />
    </CardStack.Navigator>


  )
}
