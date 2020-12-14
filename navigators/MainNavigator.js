import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import Wel from '../screens/Wel'

const MainStack = createStackNavigator()

export default function MainNavigator () {
  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <MainStack.Screen name="Dashboard" component={Wel} />
     

    </MainStack.Navigator>
  )
}
