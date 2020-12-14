import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Carte from '../screens/Carte'
import ProfiloScreen from '../screens/ProfiloScreen'

const MainStack = createBottomTabNavigator()

export default function MainNavigator () {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
      <MainStack.Screen name="Pagine" component={Carte} />
      <MainStack.Screen name="Profilo" component={ProfiloScreen} />
     

    </MainStack.Navigator>
  )
}
