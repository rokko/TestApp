import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View } from 'react-native'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import DashboardScreen from '../screens/DashboardScreen'
import Spacer from '../components/Spacer'
import colors from '../config/colors'

const AuthStack = createStackNavigator()

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <AuthStack.Screen name="Welcome" component={DashboardScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen}
        options={{
          title: '',

          headerStyle: {
            backgroundColor: colors.black,
          },


        }} />
      <AuthStack.Screen name="Signup" component={SignupScreen}
        options={{
          title: 'Registrati subito',
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.yellow,
          headerTitleStyle: {
            fontWeight: 'bold',
            color: colors.yellow,
          },
        }}
      />
    </AuthStack.Navigator>
  )
}
