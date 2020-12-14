// import React, { useRef } from 'react'
// import { StatusBar } from 'expo-status-bar'
// import { ScrollView, StyleSheet, Text, View, Button } from 'react-native'
// import Input from './components/Input'
// import Spacer from './components/Spacer'
// import ScreenContainer from './components/ScreenContainer'
// import { layoutStyles } from './styles/Layout'

// export default function App() {
//   const passwordInput = useRef() // ci serve per fare focus sull'input in cui la applichiamo

//   return (
//     <ScreenContainer style={layoutStyles.container}>
//       <StatusBar backgroundColor="transparent" />

//       <ScrollView
//         keyboardShouldPersistTaps="handled" // fa fare blur all'input in focus quando si clicca su altre parti della schermata
//       >
//         <Spacer size={10} />
//         <Input
//           label="Username"
//           onSubmitEditing={() => {
//             passwordInput.current.focus() // quando si fa "invio" sulla tastiera il focus viene spostato all'input successivo
//           }}
//           blurOnSubmit={false} // serve a non far chiudere la tastiera quando si fa focus tramite passwordInput.current.focus()
//         />
//         <Spacer size={4} />
//         <Input label="Password" isPassword ref={passwordInput} />
//       </ScrollView>

//     </ScreenContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
// })

import React, { createRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './contexts/AuthContext'
import AppNavigator from './navigators/AppNavigator'
import { rootNavigation } from './Utility/navigation.js'
import Providers from "./contexts/Providers.js"
import Screens from "./screens/Screens.js"
//export const rootNavigation = createRef()

export default function App() {
  return (
    <Providers>
      <Screens/>
    </Providers>
  )
}