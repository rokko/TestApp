import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CarteScreen from '../screens/CarteScreen'

const CardStack = createStackNavigator()

export default function CardNavigator(){
    return (

        <CardStack.Navigator 
        initialRouteName="Carte" component={CarteScreen}
        screenOptions={{
          // headerShown: false
          cardStyle: { paddingTop: 0 }
        }}
      >
      <CardStack.Screen name="Carte" component={CarteScreen} />
      </CardStack.Navigator>

    )
}
