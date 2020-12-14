import React, { createContext, useCallback, useState } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../Utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setTokenProv]=useState()

  const manageUserData = useCallback(async (userData) => {
    console.log(userData)
    setUser(userData.user)
    setToken(userData.token)
    setTokenProv(userData.token)
    await AsyncStorage.setItem('AuthToken', userData.token)
  }, [])

  const onLogout = useCallback(async () => {
    setUser(null)
    setToken('')
    setTokenProv('')
    await AsyncStorage.removeItem('AuthToken') // cancello token dalla memoria

    // cancello la storia di navigazione e vado sulla schermata di autenticazione
    rootNavigation.current.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: "AuthNavigator" }]
    }))
  }, [])

  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
