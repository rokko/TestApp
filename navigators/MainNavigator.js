import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'

const MainStack = createStackNavigator()

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
     

    </MainStack.Navigator>
  )
}
