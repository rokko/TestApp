import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfiloScreen from '../screens/ProfiloScreen'
import CardNavigator from '../navigators/CardNavigator'


const MainStack = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    
    
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false
          cardStyle: { paddingTop: 0 },
        }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Carte" component={CardNavigator} />
        <MainStack.Screen name="Profilo" component={ProfiloScreen} />

      </MainStack.Navigator>
    
    

  )
}
