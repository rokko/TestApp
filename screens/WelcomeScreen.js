import React from 'react'
import { Text, View } from 'react-native'
import ScreenContainer from '../components/ScreenContainer'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'

export default function WelcomeScreen(props) {
  return (
    <View style={layoutStyles.container}>
      <Spacer size={10} />
      <Title label="Welcome" centerText />
      <Spacer size={20} />
      <Button
        onPress={() => props.navigation.navigate('Login')}
      >Login</Button>
      <Spacer size={5} />
      <Button
        onPress={() => props.navigation.navigate('Signup')}
      >Registrati</Button>
      <Spacer size={10} />
    </View>
  )
}
