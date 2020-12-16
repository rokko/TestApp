import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CarteScreen from '../screens/CarteScreen'
import CartaScreen from '../screens/CartaScreen'
import TrasferisciCardScreen from '../screens/TrasferisciCardScreen'
import AuthProvider from '../contexts/AuthContext'

const CardStack = createStackNavigator()

export default function CardNavigator() {
  return (

    <CardStack.Navigator
      initialRouteName="Carte" component={CarteScreen}
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 },
        headerShown: false,
       
      }}
    >
      <CardStack.Screen name="Carte" component={CarteScreen} />
      <CardStack.Screen name="Carta" component={CartaScreen} />
      <CardStack.Screen name="Trasferisci" component={TrasferisciCardScreen} />
    </CardStack.Navigator>


  )
}
