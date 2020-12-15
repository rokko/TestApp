import React, {useEffect} from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarteScreen from '../screens/CarteScreen'
import ProfiloScreen from '../screens/ProfiloScreen'
import CardProvider from '../contexts/CardContext'
import AuthProvider from '../contexts/AuthContext'
import CardNavigator from '../navigators/CardNavigator'

const MainStack = createBottomTabNavigator()

export default function MainNavigator() {
  return (
    
    
      <MainStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          // headerShown: false
          cardStyle: { paddingTop: 0 }
        }}
      >
        <MainStack.Screen name="Home" component={HomeScreen} />
        <MainStack.Screen name="Carte" component={CardNavigator} />
        <MainStack.Screen name="Profilo" component={ProfiloScreen} />

      </MainStack.Navigator>
    
    

  )
}
