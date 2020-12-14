import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from '../navigators/AppNavigator'
import { rootNavigation } from '../Utility/navigation.js'
import useLoader from "../hooks/useLoader.js"
export default function Screens() {
    const loading = useLoader();
    return (
        loading
            ? null
            :
            <NavigationContainer ref={rootNavigation}>
                <AppNavigator />
            </NavigationContainer>
            
            
    )
}