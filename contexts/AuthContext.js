import React, { createContext, useCallback, useState, useEffect } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../Utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()




export default function AuthProvider ({ children }) {
  const [user, setUser] = useState()
  const [token, setTokenProv]=useState()
  const [load, setLoad]=useState()
  useEffect(() => {
    const caricamento = async () => {
      try {
        setLoad(false)
        let t = await AsyncStorage.getItem('AuthToken')
        let u = await AsyncStorage.getItem('User')
        if( u==null) console.log(JSON.parse(u))
      
        console.log('qui abbiamo il token' )
        
        console.log(t)
        setUser(u)
        setToken(t)
  
      } catch (err) {
        console.log(err);
      }
    
      setLoad(true)
    }
      caricamento()
  
    
      
      
  }, [])

  const manageUserData = useCallback(async (userData) => {

    setUser(userData.user)
    setToken(userData.token)
    setTokenProv(userData.token)
    await AsyncStorage.setItem('AuthToken', userData.token)
    await AsyncStorage.setItem('User', (userData.user))
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
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData, onLogout ,load}}>
      {children}
    </AuthContext.Provider>
  )
}
