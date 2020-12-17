import React, { createContext, useCallback, useState, useEffect } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../Utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()




export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [token, setTokenProv] = useState()
  const [load, setLoad] = useState(true)


  useEffect(() => {
    const caricamento = async () => {

      try {
        let t = await AsyncStorage.getItem('AuthToken')
        let u = await AsyncStorage.getItem('User')
        let j = JSON.parse(u)
        if (j != null) setUser(j)
        setTokenProv(t)


      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false)

      }


    }
    caricamento()




  }, [])

  const manageUserData = useCallback(async (userData) => {
    await AsyncStorage.setItem('AuthToken', userData.token)
    await AsyncStorage.setItem('User', JSON.stringify(userData.user))
  
    setUser(userData.user)
    setToken(userData.token)
    setTokenProv(userData.token)
    


  }, [])

  const onLogout = useCallback(async () => {
    setUser(null)
    setToken('')
    setTokenProv('')


    // cancello la storia di navigazione e vado sulla schermata di autenticazione
    rootNavigation.current.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: "AuthNavigator" }]
    }))
  }, [])



  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData, onLogout, load }}>
      {children}
    </AuthContext.Provider>
  )
}
