import React, { useEffect, useContext } from 'react'
import { Text, Image, TouchableOpacity, View , Button} from 'react-native'
import colors from '../config/colors'
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
      options = {{
        headerShown: false,

      }}/>
        
      <CardStack.Screen name="Carta" component={CartaScreen} 
        options={{ 
          title :'',
          headerStyle:{
            backgroundColor: colors.black,
          },          
          headerTintColor: colors.yellow,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.yellow,
          },
        }}
      />
      <CardStack.Screen name="Trasferisci" component={TrasferisciCardScreen} 
      
        options={{ 
          title :'',
          headerStyle:{
            backgroundColor: colors.black,
          },          
          headerTintColor: colors.yellow,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.yellow,
          },
        }}
      


      />
    </CardStack.Navigator>


  )
}
